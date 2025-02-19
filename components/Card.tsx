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
  technologies?: string[]
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  tasks,
  imgSrc,
  github,
  link,
  blog,
  technologies,
}) => {
  const primaryLink = link || github || blog

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/95">
      {imgSrc && (
        <div className="relative h-48 overflow-hidden">
          <Image
            alt={title}
            src={imgSrc}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            width={544}
            height={306}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-6">
          <h2 className="mb-3 text-xl font-bold leading-8 tracking-tight">
            {primaryLink ? (
              <Link
                href={primaryLink}
                aria-label={`Link to ${title}`}
                className="text-gray-900 transition-colors duration-300 hover:text-primary-500 dark:text-gray-100 dark:hover:text-teal-400"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <div className="mb-4 h-1 w-20 rounded-full bg-primary-500 transition-all duration-300 group-hover:w-32 dark:bg-teal-500" />
          <p className="prose prose-sm line-clamp-3 text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        <div className="flex-1 space-y-6">
          {tasks && tasks.length > 0 && (
            <div className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 max-h-48 overflow-y-auto">
              <ul className="list-none space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500 dark:bg-teal-500" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((techno) => (
                <span
                  key={techno}
                  className="mb-1 mr-1 inline-flex items-center rounded-full bg-primary-400 px-3 py-1 text-xs font-medium text-white dark:bg-teal-900/30 dark:text-teal-300"
                >
                  {techno}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {github && (
            <Link
              href={github}
              className="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          )}
          {link && (
            <Link
              href={link}
              className="inline-flex items-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-600 dark:bg-teal-600 dark:hover:bg-teal-500"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Project
            </Link>
          )}
          {blog && (
            <Link
              href={blog}
              className="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
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
