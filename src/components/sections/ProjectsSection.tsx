import { projects } from '@/data/Data';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import SlideUp from '../SlideUp';

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="my-16 pb-12 md:py-20">
        <h1 className="my-10 text-center text-4xl font-bold">
          Projects
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-[#c72c6c]"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="animate-slideUpCubiBezier animation-delay-2 flex flex-col md:flex-row md:space-x-12">
                    <div className="mt-8 md:w-1/2">
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="shadow-sl rounded-xl hover:opacity-70"
                      />
                    </div>
                    <div className="mt-12 md:w-1/2">
                      <h1 className="mb-6 text-4xl font-bold">
                        {project.name}
                      </h1>
                      <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row space-x-4 align-bottom">
                        <Link href={project.github} target="_blank">
                          <BsGithub size={30} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
