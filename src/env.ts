import { z } from 'zod'

export const envSchema = z.object({
  NODE_ENV: z.string().default('development'),
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
})

export type Env = z.infer<typeof envSchema>
