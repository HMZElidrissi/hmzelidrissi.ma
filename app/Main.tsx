import Image from 'next/image'
import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
import { useRandomColorPair } from 'utils/useRandomColorPair'
import siteMetadata from '@/data/siteMetadata'
import { OrbitingCircles } from '@/components/OrbitingCircles'
import { components } from '@/components/icons'

export default function Home() {
  const [aboutColor, contactColor] = useRandomColorPair()

  return (
    <div className="fade-in banner relative flex flex-col justify-between px-4 py-6 dark:text-white lg:flex-row lg:items-center lg:py-10">
      <div className="absolute inset-0 z-0 lg:block">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="lg:max-w-2xl">
        <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">Hi, I am Hamza</h1>
        <p className="my-2 text-lg lg:my-4 lg:text-2xl">DevOps/Cloud Engineer</p>
        <p className="font-light lg:text-xl">
          <span className="text-nowrap">Read more</span>
          <span className="text-nowrap">
            <Link className="ml-2 mr-2 font-normal text-black" href="/whoami">
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={aboutColor}
              >
                about me
              </RoughNotation>
            </Link>
          </span>
          or
          <span className="text-nowrap">
            <Link className="ml-2 font-normal text-black" href={`mailto:${siteMetadata.email}`}>
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={contactColor}
              >
                contact me
              </RoughNotation>
            </Link>
          </span>
        </p>
      </div>

      {/* Orbiting circles with tech stack */}
      <div className="relative mt-10 flex justify-center lg:mt-0 lg:justify-end">
        <div className="relative flex h-[400px] w-[400px] flex-col items-center justify-center overflow-hidden sm:h-[500px] sm:w-[500px]">
          {/* Outer orbit - Backend & Infrastructure */}
          <OrbitingCircles iconSize={45} radius={180} duration={25}>
            <components.java className="h-16 w-16" />
            <components.golang className="h-12 w-12" />
            <components.docker className="h-16 w-16" />
            <components.kubernetes className="h-12 w-12" />
            <components.argocd className="h-16 w-16" />
            <components.helm className="h-12 w-12" />
          </OrbitingCircles>

          {/* Inner orbit - Frontend & DevOps */}
          <OrbitingCircles iconSize={45} radius={120} reverse speed={1.5} duration={20}>
            <components.spring className="h-12 w-12" />
            <components.react className="h-12 w-12" />
            <components.nextjs className="h-16 w-16" />
            <components.jenkins className="h-12 w-12" />
            <components.gitlabci className="h-10 w-10" />
          </OrbitingCircles>

          {/* Center - Your avatar/mascot */}
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform sm:h-40 sm:w-40">
            <Image
              src="/static/images/stylish-owl.png"
              alt="Hamza's avatar"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
