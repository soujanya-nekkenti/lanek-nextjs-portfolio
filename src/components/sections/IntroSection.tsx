import Image from 'next/image';
import Link from 'next/link';
import { HiArrowDown } from 'react-icons/hi';

export const IntroSection = () => {
  return (
    <section id="home">
      <div className="animate-fadeIn animation-delay-2 my-5 flex flex-col items-center justify-center py-16 text-center sm:py-32 md:flex-row md:space-x-12 md:py-48 md:text-left">
        <div>
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div>
          <p className="py-2 font-sans text-2xl font-semibold md:text-4xl">
            Hi There !
          </p>
          {/* Profile Name */}
          <p className="py-2 font-sans text-2xl font-semibold md:text-4xl">
            I&apos;m a web
            <span className="text-[#c72c6c] dark:text-[#07d0e5]">
              {' '}
              developer <span className="text-white">|</span>
            </span>
          </p>
          <div className="mt-5 flex gap-3 md:mt-10">
            {/* Projects */}
            <Link
              className="rounded bg-red-400 px-6 py-3 text-xl font-semibold text-white hover:bg-red-500"
              href={'#projects'}
            >
              Projects
            </Link>
            {/* Download CV Button */}
            {/* <Link
              className="rounded border border-red-500 px-4 py-3 text-xl font-semibold hover:bg-red-500 hover:text-white"
              href="" // Add cv link
              target="_blank"
            >
              Download CV
            </Link> */}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <Link href="#about">
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};
