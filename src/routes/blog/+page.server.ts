import { logger } from '$lib/server/logger';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/posts';

export const load: PageServerLoad = async () => {
  try {
    const posts = await getPosts();

    return {
      posts
    };
  } catch (err) {
    logger.error('Uh-oh!', err);
    error(500);
  }
};
