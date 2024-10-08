'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowDown } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';

export const IntroSection = () => {
  return (
    <section id="home" className="lg:py-16">
      <div className="animation-delay-2 my-5 flex animate-fadeIn flex-col items-center justify-between py-32 text-center md:flex-row md:space-x-12 md:py-48 md:text-left">
        <div>
          <p className="py-2 font-sans text-3xl font-semibold md:text-4xl">
            Hi There !
          </p>
          {/* Profile Name */}
          <p className="py-2 font-sans text-3xl font-semibold md:text-4xl">
            I&apos;m a {''}
            <TypeAnimation
              sequence={[
                'Soujanya',
                1000,
                'Web Developer',
                1000,
                // 'Food Blogger',
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
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
            <Link
              className="rounded border border-red-500 px-4 py-3 text-xl font-semibold hover:bg-red-500 hover:text-white"
              href="/my-cv.pdf"
              target="_blank"
            >
              Download CV
            </Link>
          </div>
        </div>
        <div className="relative col-span-4 mt-4 h-[250px] w-[250px] place-self-center lg:mt-0 lg:h-[400px] lg:w-[400px]">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.png"
            alt=""
            width={300}
            height={300}
          />
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
