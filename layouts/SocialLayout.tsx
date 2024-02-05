import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Image from 'next/image'

interface SocialLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
}

export default function SocialLayout({ posts, title }: SocialLayoutProps) {
  return (
    <>
      <div className="space-y-2 pb-2 pt-2 md:space-y-2">
        <span className="text-md sm:text-md md:text-md font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:leading-14">
          {title}
        </span>
        <span className="text-md leading-2 pl-8 text-gray-500 dark:text-gray-400">
          artisanal link-in-bio
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {posts
          .filter((post) => post.ig_image !== null && post.ig_image !== undefined)
          .map((post) => {
            const { path, date, title, summary, tags, images, ig_image } = post
            return (
              <Link href={`/${path}`} key={path} className="py-0" passHref legacyBehavior>
                <article className="space-y0">
                  <div className="relative">
                    <div className="image bg-primary">
                      {ig_image && (
                        <Image
                          src={ig_image}
                          alt={title}
                          className="rounded-sm"
                          width={500}
                          height={500}
                        />
                      )}
                    </div>
                    <div className="relative inset-0 mt-auto flex items-end bg-black bg-opacity-60 p-1">
                      <h4 className="text-sm tracking-tight text-white">{title}</h4>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
      </div>
      {/* Blog link for pre-Feb 2024 posts. */}
      <div className="mt-8">
        <hr className="border-gray-200 dark:border-gray-800" />
        <div className="py-4 text-center">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            View all posts from before February 2024
          </Link>
        </div>
      </div>
    </>
  )
}
