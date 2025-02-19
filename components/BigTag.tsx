import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
  count?: number
}

const BigTag = ({ text, count }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="group relative inline-flex items-center overflow-hidden"
    >
      <span className="hover:bg-primary-50 hover:text-primary-700 relative z-10 inline-flex items-center overflow-hidden rounded-l-full border border-primary-200 px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-primary-600 transition-all duration-300 hover:border-primary-300 dark:border-teal-800 dark:text-teal-300 dark:hover:border-teal-700 dark:hover:bg-teal-900/20 dark:hover:text-teal-200">
        <span>{text.split(' ').join('-')}</span>
        <div className="absolute inset-0 h-full w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-primary-100/40 to-transparent transition-transform duration-300 group-hover:translate-x-[100%] dark:via-teal-500/5" />
      </span>
      {count !== undefined && (
        <span className="group-hover:bg-primary-50 relative z-10 -ml-px inline-flex h-full items-center rounded-r-full border border-primary-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition-all duration-300 group-hover:border-primary-300 dark:border-teal-800 dark:text-gray-300 dark:group-hover:border-teal-700 dark:group-hover:bg-teal-900/20">
          {count}
        </span>
      )}
    </Link>
  )
}

export default BigTag
