import Image from 'next/image'
import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
import { useRandomColorPair } from 'utils/useRandomColorPair'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  const [aboutColor, contactColor] = useRandomColorPair()

  return (
    <div className="fade-in banner mt-10 flex flex-col justify-between px-6 py-10 dark:text-white lg:flex-row lg:items-center lg:px-10 lg:py-20">
      <div className="lg:max-w-2xl">
        <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">Hi, I am Hamza</h1>
        <p className="my-2 text-lg lg:my-4 lg:text-2xl">Software Developer</p>
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
      {/*<div className="mt-10 flex justify-center lg:mt-0 lg:justify-end">*/}
      {/*  <Image*/}
      {/*    src="/static/images/hero.svg"*/}
      {/*    alt="Hamza's portrait"*/}
      {/*    width={400}*/}
      {/*    height={400}*/}
      {/*    className="max-w-full lg:max-w-md"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="relative mt-10 flex justify-center lg:mt-0 lg:justify-end">
        <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
          <Image
            src="/static/images/orbit.png"
            alt="Orbiting technologies"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
            className="animate-spin-slow"
            priority
          />
          <div className="absolute left-1/2 top-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 transform">
            <Image
              src="/static/images/stylish-owl.png"
              alt="Owl mascot"
              fill
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 20vw"
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
