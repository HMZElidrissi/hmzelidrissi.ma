import Image from './Image'
import Link from './Link'
import { Github, ExternalLink, BookOpen } from 'lucide-react'

interface CardProps {
  title: string
  description: string
  tasks?: string[]
  imgSrc?: string
  github?: string
  link?: string
  blog?: string
  technos?: string[]
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  tasks,
  imgSrc,
  github,
  link,
  blog,
  technos,
}) => {
  const primaryLink = link || github || blog

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800">
      {imgSrc && (
        <div className="h-48 overflow-hidden">
          <Image
            alt={title}
            src={imgSrc}
            className="h-full w-full object-cover object-center"
            width={544}
            height={306}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight">
          {primaryLink ? (
            <Link
              href={primaryLink}
              aria-label={`Link to ${title}`}
              className="hover:text-primary-500"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div className="mb-4 h-1 w-20 bg-primary-500"></div>
        <p className="mb-4 text-sm text-gray-900 dark:text-gray-400">{description}</p>
        {tasks && tasks.length > 0 && (
          <ul className="mb-4 list-disc pl-5 text-sm text-gray-900 dark:text-gray-400">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
        {technos && technos.length > 0 && (
          <div className="mb-4 flex flex-wrap">
            {technos.map((techno) => (
              <span
                key={techno}
                className="mb-2 mr-2 rounded-sm bg-primary-400 px-2 py-1 text-xs font-medium text-white"
              >
                {techno}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto flex space-x-2">
          {github && (
            <Link
              href={github}
              className="flex items-center rounded-lg bg-zinc-100 px-4 py-2 text-sm text-zinc-800 transition-colors duration-300 hover:bg-zinc-200 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-500"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          )}
          {link && (
            <Link
              href={link}
              className="flex items-center rounded-lg bg-zinc-100 px-4 py-2 text-sm text-zinc-800 transition-colors duration-300 hover:bg-zinc-200 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-500"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Project
            </Link>
          )}
          {blog && (
            <Link
              href={blog}
              className="flex items-center rounded-lg bg-zinc-100 px-4 py-2 text-sm text-zinc-800 transition-colors duration-300 hover:bg-zinc-200 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-500"
              aria-label={`Blog post about ${title}`}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Blog
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
