export type Categories = 'development' | 'work' | 'life';

export type Post = {
  title: string
  slug: string
  description: string
  image: {
    url: string;
    alt: string;
  }
  date: string
  categories: Categories[]
  published: boolean
}

export async function getPosts() {
  const posts: Post[] = []

  const paths = import.meta.glob('/src/lib/posts/*.md', { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split('/').at(-1)?.replace('.md', '')

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>
      const post = { ...metadata, slug } satisfies Post
      if (post.published) posts.push(post)
    }
  }

  return posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
  )
}
