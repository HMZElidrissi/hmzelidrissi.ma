import Image from './Image'
import Link from './Link'

const Card = ({ title, description, tasks, imgSrc, href, technos }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-2 max-w-none text-gray-900 dark:text-gray-400">{description}</p>
        {tasks && (
          <ul className="prose mb-4 list-disc text-gray-900 dark:text-gray-400">
            {tasks.map((task) => (
              <li className="ml-4" key={task}>{task}</li>
            ))}
          </ul>
        )}
        {technos && (
          <div className="flex flex-wrap">
            {technos.map((techno) => (
              <span
                key={techno}
                className="mb-4 mr-2 rounded-sm bg-primary-400 px-2 py-2 text-xs font-medium text-white"
              >
                {techno}
              </span>
            ))}
          </div>
        )}
        {href && href.search('#') === -1 && (
          <div className="flex justify-end">
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              visit project &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Card
