import { siteMetadata } from "@/config/siteMetadata";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

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
import { RoughNotation } from "react-rough-notation";
import { navigate } from "astro:transitions/client";

interface MainProps {
  aboutColor: string;
  contactColor: string;
}

export default function Main({ aboutColor, contactColor }: MainProps) {
  return (
    <div className="banner relative flex flex-col justify-between px-4 py-8 lg:flex-row lg:items-center lg:py-16">      {/* Hero copy */}
      <div className="relative z-10 lg:max-w-xl">

        <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="inline-block">
            Hamza
            {/* <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-none bg-foreground" /> */}
          </span>
        </h1>

        <p className="mt-4 text-lg font-medium text-muted-foreground lg:text-xl">
          DevOps <span className="font-bold text-violet-500">·</span> Cloud{" "}
          <span className="font-bold text-violet-500">·</span> Software Engineer
        </p>

        <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          Building reliable, scalable infrastructure and developing software.
          Always open to new opportunities and collaborations.
        </p>

        {/* CTA buttons */}
        <div className="mt-6 text-base font-medium text-muted-foreground">
          <span className="text-nowrap">Read more</span>
          <span className="text-nowrap">
            <a
              className="ml-2 mr-2 font-normal text-white"
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
          <span className="text-nowrap text-muted-foreground">
            <a
              className="ml-2 font-normal text-white"
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
        </div>
      </div>

      {/* Orbiting tech stack — unchanged, works with any theme */}
      <div className="relative z-10 mt-12 flex justify-center lg:mt-0 lg:justify-end">
        {/* Mobile variant */}
        <div className="relative flex h-64 w-64 flex-col items-center justify-center overflow-hidden sm:hidden">
          <OrbitingCircles iconSize={32} radius={95} duration={25}>
            <Java className="h-8 w-8" />
            <Golang className="h-8 w-8" />
            <Docker className="h-8 w-8" />
            <Kubernetes className="h-8 w-8" />
            <ArgoCD className="h-8 w-8" />
            <Helm className="h-8 w-8" />
          </OrbitingCircles>

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

          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform">
            <img
              src="/stylish-owl.png"
              alt="Stylish Owl"
              className="h-full w-full object-contain opacity-90"
              loading="lazy"
            />
          </div>
        </div>

        {/* Tablet/Desktop variant */}
        <div className="relative hidden h-[420px] w-[420px] flex-col items-center justify-center overflow-hidden sm:flex lg:h-[500px] lg:w-[500px]">
          <OrbitingCircles iconSize={45} radius={185} duration={25}>
            <Java className="h-16 w-16" />
            <Golang className="h-12 w-12" />
            <Docker className="h-16 w-16" />
            <Kubernetes className="h-12 w-12" />
            <ArgoCD className="h-16 w-16" />
            <Helm className="h-12 w-12" />
          </OrbitingCircles>

          <OrbitingCircles
            iconSize={45}
            radius={112}
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

          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform lg:h-40 lg:w-40">
            <img
              src="/stylish-owl.png"
              alt="Stylish Owl"
              className="h-full w-full object-contain opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
