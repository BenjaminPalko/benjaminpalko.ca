import { logger } from '$lib/server/logger';
import type { HandleServerError } from '@sveltejs/kit';

export const handleError: HandleServerError = async ({ error, event, message, status }) => {

  logger.error({ error, event, message, status });

  return {
    message: 'An Internal Error Occurred',
  };
};

