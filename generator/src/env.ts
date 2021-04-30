import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';
const pathEnv = path.resolve('..', '.env');

dotenv.config({ path: pathEnv });
/**
 * Define Schema
 */
const env = {
  NODE_ENV: Joi.string(),
  PORT: Joi.number(),
  AUTH: Joi.string()
};

/**
 * Verify schema
 */
try {
  Joi.assert(process.env, Joi.object(env), { allowUnknown: true });
} catch (error) {
  console.error(error.details);
  process.exit(1);
}
/**
 * Parse ENV
 */
for (const key in env) {
  if (process.env[key]) {
    process.env[key] = Joi.attempt(process.env[key], (env as any)[key]);
  }
}
/**
 * Add extra functions
 */

if (!process.env.GENERATE) {
  process.env.URL = 'http://localhost:' + process.env.PORT;
}
