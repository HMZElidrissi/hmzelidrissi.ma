import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 mt-1 rounded-full border border-primary-500 px-3 py-1 text-sm font-medium uppercase text-primary-500 hover:border-primary-600 hover:text-primary-600 dark:border-primary-400 dark:text-primary-400 dark:hover:border-primary-400 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
