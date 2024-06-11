import { findUpSync } from 'find-up';

export const findEnvUtil = () => findUpSync(['.env', '.env.development', '.env.production']);
