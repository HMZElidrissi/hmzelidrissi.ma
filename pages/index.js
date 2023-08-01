import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import Image from 'next/image'

export const POSTS_PER_PAGE = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Home({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSeo
        title={`${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}`}
      />
      <div className="max-w-xl font-bold mx-auto text-center mt-3">
        <Image
          src="/static/images/avatar.png"
          alt="Picture of the author"
          width={160}
          height={160}
        ></Image>
        <h1 className="font-sans text-3xl" style={{ color: '#121643' }}>
          New post every&nbsp;<span className="text-green-400">sometimes</span>.
        </h1>
        <h2 className="font-mono inline-flex mt-2 text-gray-900 text-opacity-50">
          By {`${siteMetadata.author}`}
        </h2>
      </div>
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />
    </>
  )
}
