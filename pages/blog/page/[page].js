import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from '@/layouts/ListLayout'
import { POSTS_PER_PAGE } from '../../index'
import Image from 'next/image'

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('blog')
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter('blog')
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.author}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog/${pagination.currentPage}`}
      />
      <div className="max-w-xl font-bold mx-auto text-center m-4">
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
