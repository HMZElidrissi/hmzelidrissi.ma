/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { RoughNotation } from 'react-rough-notation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Calendar } from 'lucide-react'
import type { Blog } from 'contentlayer/generated'
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

export default function ListLayoutWithImages({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const nonDraftPosts = posts.filter((post) => !post.draft)
  const nonDraftInitialDisplayPosts = initialDisplayPosts.filter((post) => !post.draft)

  const displayPosts =
    nonDraftInitialDisplayPosts.length > 0 ? nonDraftInitialDisplayPosts : nonDraftPosts

  const postDateTemplate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <div className="flex dark:text-white sm:space-x-24">
      <div>
        <div className="space-y-4 border-b border-gray-100 pb-10 pt-6 text-center dark:border-black">
          <p className="mx-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            new post every&nbsp;
            <span className="text-black">
              <RoughNotation
                show={true}
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color="#F9E5D8"
              >
                sometimes
              </RoughNotation>
            </span>
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            learnings, thoughts, and other musings.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            // Use the first image from the images array as the thumbnail
            const thumbnailImage = images[0]

            return (
              <li
                key={slug}
                className="mt-5 rounded-lg border border-gray-200 bg-gray-50 pt-5 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:border-0 dark:bg-gray-900/80"
              >
                <article className="space-y-2 p-4">
                  <div>
                    {/* Display the thumbnail image */}
                    <Link href={`/blog/${slug}`}>
                      <Image
                        src={thumbnailImage}
                        alt={title}
                        className="h-40 w-full rounded-t-lg object-cover"
                        width={400}
                        height={200}
                      />
                    </Link>
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </div>
                    <h3 className="mb-2 text-xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h3>
                    <div className="mb-2 flex flex-wrap space-x-0.5">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <p className="prose max-w-none text-gray-700 dark:text-white">{summary}</p>
                  </div>
                  <div>
                    <Link
                      href={`/blog/${slug}`}
                      className="ml-3 rounded-full bg-gray-300 px-4 py-2 text-xs font-semibold transition-colors duration-300 hover:bg-gray-300/80 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-700/80"
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
  )
}
