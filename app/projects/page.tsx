import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            (a non-comprehensive list of) some of the things I help(ed) bring to life.
          </p>
        </div>
        <div className="container py-12">
          <div className="">
            {Array.from(new Set(projectsData.map((project) => project.type))).map((type) => (
              <>
                <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:truncate sm:text-3xl sm:leading-9">
                  {type}
                </h2>
                <div className="m-8 flex flex-wrap">
                  {projectsData
                    .filter((project) => project.type === type)
                    .map((d) => (
                      <Card
                        key={d.title}
                        title={d.title}
                        description={d.description}
                        imgSrc={d.imgSrc}
                        href={d.href}
                      />
                    ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
