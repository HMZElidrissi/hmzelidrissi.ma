import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <br />
          <div className="relative max-w-lg mx-auto flex items-center">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:ring-green-400 focus:border-green-400"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            // Use the first image from the images array as the thumbnail
            const thumbnailImage = images[0]

            return (
              <li
                key={slug}
                className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition duration-300 mt-5 bg-gray-100"
              >
                <article className="p-4 space-y-2">
                  <div>
                    {/* Display the thumbnail image */}
                    <Link href={`/blog/${slug}`}>
                      <img
                        src={thumbnailImage}
                        alt={title}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                    </Link>
                  </div>
                  <div className="p-4">
                    <p className="mt-2 block text-gray-500 text-xs">
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </p>
                    <h3 className="text-xl font-bold leading-8 tracking-tight mb-2">
                      <Link href={`/blog/${slug}`} className="text-gray-900">
                        {title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap space-x-0.5 mb-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{summary}</p>
                  </div>
                  <div>
                    <Link
                      href={`/blog/${slug}`}
                      className="transition-colors duration-300 text-xs font-semibold bg-gray-300 hover:bg-gray-400 rounded-full ml-3 py-2 px-4"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
