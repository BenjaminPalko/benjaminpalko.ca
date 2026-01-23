import { logger } from '$lib/server/logger';
import type { HandleServerError } from '@sveltejs/kit';
import { randomUUID } from 'crypto';

export const handleError: HandleServerError = async ({ error, event, message, status }) => {
  const errorId = randomUUID();

  logger.error({ error, errorId, event, message, status }, 'Blyat');

  return {
    message: 'An Internal Error Occurred',
    errorId
  };
};

