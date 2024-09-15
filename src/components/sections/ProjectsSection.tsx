import { projects } from '@/data/Data';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import SlideUp from '../SlideUp';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h1 className="mb-12 text-center text-5xl font-bold text-gray-800 dark:text-gray-200">
          Projects
          <hr className="mx-auto my-4 h-1 w-20 rounded border-0 bg-[#c72c6c]" />
        </h1>

        <ul className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <li key={idx} className="flex justify-center">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="max-w-xs transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800 dark:text-gray-200 md:max-w-md">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6">
                    <h2 className="mb-4 text-2xl font-semibold">
                      {project.name}
                    </h2>
                    <p className="mb-6 text-gray-700 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="text-gray-700 hover:text-[#c72c6c] dark:text-gray-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
