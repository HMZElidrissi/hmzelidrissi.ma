import { RoughNotation } from "react-rough-notation";

export default function BlogHeader() {
  return (
    <div className="space-y-4 pb-10 pt-6 text-center">
      <p className="mx-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        new post every&nbsp;
        <span className="text-black">
          <RoughNotation
            show={true}
            type="highlight"
            animationDelay={250}
            animationDuration={2000}
            color="#BEE3F8"
          >
            sometimes
          </RoughNotation>
        </span>
      </p>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        learnings, thoughts, and other musings.
      </p>
    </div>
  );
}
