import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/blog/${slug}`)}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      <article>
        <div className="xl:divide-y xl:divide-gray-200">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 ">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">
                    <Image
                      src={siteMetadata.image}
                      width="38px"
                      height="38px"
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 ">{siteMetadata.author}</dd>
                      {typeof siteMetadata.twitter === 'string' && (
                        <>
                          <dt className="sr-only">Twitter</dt>
                          <dd>
                            <Link
                              href={siteMetadata.twitter}
                              className="text-blue-500 hover:text-blue-600 "
                            >
                              {siteMetadata.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          </dd>
                        </>
                      )}
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose max-w-none">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase">Tags</h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase ">
                          Previous Article
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 ">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase ">
                          Next Article
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 ">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link href="/" className="text-blue-500 hover:text-blue-600 ">
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
