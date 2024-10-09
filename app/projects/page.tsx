import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            projects
          </h1>
          <p className="text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            (a non-comprehensive list of) some of the things I help(ed) bring to life.
          </p>
        </div>
        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                tasks={d.tasks}
                imgSrc={d.imgSrc}
                link={d.link}
                github={d.github}
                blog={d.blog}
                technologies={d.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
