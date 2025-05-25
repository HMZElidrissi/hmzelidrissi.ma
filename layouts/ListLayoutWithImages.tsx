/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { RoughNotation } from 'react-rough-notation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Calendar } from 'lucide-react'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="text-primary-500 hover:text-primary-600 dark:text-teal-500 dark:hover:text-teal-400"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="text-primary-500 hover:text-primary-600 dark:text-teal-500 dark:hover:text-teal-400"
          >
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

function FeaturedArticle({ post }: { post: CoreContent<Blog> }) {
  const { slug, date, title, summary, tags, images } = post
  const postDateTemplate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <div className="mb-12 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-xl transition duration-300 ease-in-out hover:shadow-2xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
      <article className="grid grid-cols-1 gap-0 md:grid-cols-2">
        <Link href={`/blog/${slug}`} className="group relative h-full overflow-hidden">
          <Image
            src={images[0]}
            alt={title}
            className="absolute h-full w-full transform object-cover transition duration-500 group-hover:scale-105"
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        </Link>
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight">
              <Link
                href={`/blog/${slug}`}
                className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-teal-400"
              >
                {title}
              </Link>
            </h2>
            <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar size={16} className="mr-2" />
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </div>
            <p className="prose mb-6 line-clamp-4 text-gray-600 dark:text-gray-300">{summary}</p>
          </div>
          <Link
            href={`/blog/${slug}`}
            className="mt-auto inline-flex items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Read Featured Article
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default function ListLayoutWithImages({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const nonDraftPosts = posts.filter((post) => !post.draft)
  const nonDraftInitialDisplayPosts = initialDisplayPosts.filter((post) => !post.draft)
  const displayPosts =
    nonDraftInitialDisplayPosts.length > 0 ? nonDraftInitialDisplayPosts : nonDraftPosts
  const [featuredPost, ...otherPosts] = displayPosts

  const postDateTemplate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <div className="flex dark:text-white sm:space-x-24">
      <div className="w-full">
        <div className="space-y-4 pb-10 pt-6 text-center">
          <p className="mx-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            new post every&nbsp;
            <span className="text-black">
              <RoughNotation
                show={true}
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color="#BEE3F8"
              >
                sometimes
              </RoughNotation>
            </span>
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            learnings, thoughts, and other musings.
          </p>
        </div>

        <FeaturedArticle post={featuredPost} />

        <div className="mt-12">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">Latest Posts</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((frontMatter) => {
              const { slug, date, title, summary, tags, images } = frontMatter
              return (
                <article
                  key={slug}
                  className="group flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg transition duration-300 hover:shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-800"
                >
                  <Link href={`/blog/${slug}`} className="relative h-48 overflow-hidden">
                    <Image
                      src={images[0]}
                      alt={title}
                      className="h-full w-full transform object-cover transition duration-500 group-hover:scale-105"
                      width={400}
                      height={200}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </Link>
                  <div className="flex flex-grow flex-col p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-tight">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-teal-400"
                      >
                        {title}
                      </Link>
                    </h3>
                    <div className="mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </div>
                    <p className="prose mb-4 line-clamp-4 text-sm flex-grow text-gray-600 dark:text-gray-300">
                      {summary}
                    </p>
                    <Link
                      href={`/blog/${slug}`}
                      className="mt-auto inline-flex items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Read more
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {pagination && pagination.totalPages > 1 && (
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        )}
      </div>
    </div>
  )
}
