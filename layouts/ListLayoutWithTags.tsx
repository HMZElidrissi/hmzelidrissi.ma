/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import { Calendar } from 'lucide-react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
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
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              {pathname.startsWith('/blog') ? (
                <h3 className="font-bold uppercase text-primary-500">All Posts</h3>
              ) : (
                <Link
                  href={`/blog`}
                  className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-teal-400"
                >
                  All Posts
                </Link>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li key={t} className="my-3">
                      {pathname.split('/tags/')[1] === slug(t) ? (
                        <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500 dark:text-teal-400">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-teal-400"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ul className="space-y-8">
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags, images } = post
                return (
                  <li
                    key={path}
                    className="rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
                  >
                    <article className="overflow-hidden rounded-lg">
                      {images && images[0] && images[0].search('twitter-card') === -1 && (
                        <Link href={`/${path}`} className="block overflow-hidden">
                          <Image
                            src={images[0]}
                            alt={title}
                            width={800}
                            height={400}
                            className="h-64 w-full object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                          />
                        </Link>
                      )}
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={16} className="mr-2" />
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </div>
                        <h2 className="mb-3 mt-2 text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/${path}`}
                            className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-teal-500"
                          >
                            {title}
                          </Link>
                        </h2>
                        <div className="mb-4 flex flex-wrap">
                          {tags?.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <p className="prose mb-4 max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </p>
                        <Link
                          href={`/${path}`}
                          className="rounded-full bg-gray-300 px-4 py-2 text-xs font-semibold transition-colors duration-300 hover:bg-gray-300/80 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-700/80"
                          aria-label={`Read "${title}"`}
                        >
                          Read more
                        </Link>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
