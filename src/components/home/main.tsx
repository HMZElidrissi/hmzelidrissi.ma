import { useRandomColorPair } from "@/lib/useRandomColorPair";
import { siteMetadata } from "@/config/siteMetadata";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { RoughNotation } from "react-rough-notation";
import { navigate } from "astro:transitions/client";
import {
  Java,
  Golang,
  Docker,
  Kubernetes,
  ArgoCD,
  Helm,
  Spring,
  React,
  NextJS,
  Jenkins,
  GitlabCI,
} from "@/components/icons";

export default function Home() {
  const [aboutColor, contactColor] = useRandomColorPair();

  return (
    <div className="banner relative flex flex-col justify-between px-4 py-6 fade-in dark:text-white lg:flex-row lg:items-center lg:py-10">
      <div className="absolute inset-0 z-0 lg:block">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="lg:max-w-2xl">
        <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">
          Hi, I am Hamza
        </h1>
        <p className="my-2 text-lg lg:my-4 lg:text-2xl">
          DevOps/Cloud Engineer
        </p>
        <p className="font-light lg:text-xl">
          <span className="text-nowrap">Read more</span>
          <span className="text-nowrap">
            <a
              className="ml-2 mr-2 font-normal text-black"
              href="/whoami"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== "/whoami") {
                  navigate("/whoami");
                }
              }}
            >
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={aboutColor}
              >
                about me
              </RoughNotation>
            </a>
          </span>
          or
          <span className="text-nowrap">
            <a
              className="ml-2 font-normal text-black"
              href={`mailto:${siteMetadata.email}`}
            >
              <RoughNotation
                show
                type="highlight"
                animationDelay={250}
                animationDuration={2000}
                color={contactColor}
              >
                contact me
              </RoughNotation>
            </a>
          </span>
        </p>
      </div>

      {/* Orbiting circles with tech stack */}
      <div className="relative mt-10 flex justify-center lg:mt-0 lg:justify-end">
        {/* Mobile variant */}
        <div className="relative flex h-64 w-64 flex-col items-center justify-center overflow-hidden sm:hidden">
          {/* Outer orbit - Backend & Infrastructure (mobile) */}
          <OrbitingCircles iconSize={32} radius={95} duration={25}>
            <Java className="h-8 w-8" />
            <Golang className="h-8 w-8" />
            <Docker className="h-8 w-8" />
            <Kubernetes className="h-8 w-8" />
            <ArgoCD className="h-8 w-8" />
            <Helm className="h-8 w-8" />
          </OrbitingCircles>

          {/* Inner orbit - Frontend & DevOps (mobile) */}
          <OrbitingCircles
            iconSize={24}
            radius={60}
            reverse
            speed={1.5}
            duration={20}
          >
            <Spring className="h-6 w-6" />
            <React className="h-6 w-6" />
            <NextJS className="h-8 w-8" />
            <Jenkins className="h-6 w-6" />
            <GitlabCI className="h-5 w-5" />
          </OrbitingCircles>

          {/* mascot (mobile) */}
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform">
            <img
              src="/stylish-owl.png"
              alt="Stylish Owl"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Tablet/Desktop variant */}
        <div className="relative hidden h-[400px] w-[400px] flex-col items-center justify-center overflow-hidden sm:flex lg:h-[500px] lg:w-[500px]">
          {/* Outer orbit - Backend & Infrastructure */}
          <OrbitingCircles iconSize={45} radius={180} duration={25}>
            <Java className="h-16 w-16" />
            <Golang className="h-12 w-12" />
            <Docker className="h-16 w-16" />
            <Kubernetes className="h-12 w-12" />
            <ArgoCD className="h-16 w-16" />
            <Helm className="h-12 w-12" />
          </OrbitingCircles>

          {/* Inner orbit - Frontend & DevOps */}
          <OrbitingCircles
            iconSize={45}
            radius={110}
            reverse
            speed={1.5}
            duration={20}
          >
            <Spring className="h-12 w-12" />
            <React className="h-12 w-12" />
            <NextJS className="h-16 w-16" />
            <Jenkins className="h-12 w-12" />
            <GitlabCI className="h-10 w-10" />
          </OrbitingCircles>

          {/* mascot */}
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform lg:h-40 lg:w-40">
            <img
              src="/stylish-owl.png"
              alt="Stylish Owl"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
