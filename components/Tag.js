import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="px-6 py-1 border border-purple-600 rounded-full text-purple-600 text-xs uppercase font-semibold mt-1">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
