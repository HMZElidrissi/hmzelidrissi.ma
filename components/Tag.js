import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
