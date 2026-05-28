import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { ESSAY_PUBLIC_SLUG_RE } from './utils/slug-rules';
import { parseEssayDateInput, parseEssayPublishedAtInput } from './utils/date-only';

const slugRule = z
  .string()
  .regex(ESSAY_PUBLIC_SLUG_RE, 'slug must be lowercase kebab-case');

const essayBaseFields = {
  title: z.string(),
  description: z.string().optional(),
  date: z.unknown(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  archive: z.boolean().default(true),
  publishedAt: z.unknown().optional(),
  // Optional custom permalink. If present, it overrides the default public slug
  // derived from the entry id / path.
  slug: slugRule.optional()
};

const essayShape = {
  ...essayBaseFields,
  cover: z.string().optional(),
  badge: z.string().optional()
};

const essaySchema = z.object(essayShape).transform((data, ctx) => {
  const dateResult = parseEssayDateInput(data.date);
  if (!dateResult) {
    ctx.addIssue({
      code: 'custom',
      path: ['date'],
      message: 'date must be a valid YYYY-MM-DD date or ISO 8601 datetime'
    });
    return z.NEVER;
  }

  const publishedAtInput = data.publishedAt;
  const hasExplicitPublishedAt =
    publishedAtInput != null &&
    !(typeof publishedAtInput === 'string' && publishedAtInput.trim() === '');
  const publishedAt = hasExplicitPublishedAt
    ? parseEssayPublishedAtInput(publishedAtInput)
    : dateResult.publishedAt;

  if (hasExplicitPublishedAt && !publishedAt) {
    ctx.addIssue({
      code: 'custom',
      path: ['publishedAt'],
      message: 'publishedAt must be a valid ISO 8601 datetime with timezone'
    });
    return z.NEVER;
  }

  const normalizedData = { ...data };
  delete normalizedData.publishedAt;

  return {
    ...normalizedData,
    date: dateResult.date,
    ...(publishedAt ? { publishedAt } : {})
  };
});

const essay = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essay' }),
  schema: essaySchema
});

export const collections = { essay };
