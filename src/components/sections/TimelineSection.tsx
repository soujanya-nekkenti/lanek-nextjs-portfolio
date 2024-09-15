import { timelines } from '@/data/Data';
import { ImBook, ImBriefcase, ImLocation } from 'react-icons/im';
import SlideUp from '../SlideUp';

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="mb-12 text-center text-5xl font-bold text-gray-800 dark:text-gray-200">
          Timeline
          <hr className="mx-auto my-4 h-1 w-20 rounded border-0 bg-[#c72c6c]" />
        </h1>

        <div className="relative">
          {/* Vertical Line in the Center */}
          <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-4 border-gray-200 dark:border-gray-700"></div>

          <ul className="space-y-8 md:space-y-4">
            {timelines.map((timeline, index) => (
              <SlideUp offset="-300px 0px -300px 0px" key={index}>
                <li
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } w-full items-center`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-[#c72c6c] shadow-lg">
                    {index < 3 ? (
                      <ImBriefcase className="text-white" size={20} />
                    ) : (
                      <ImBook className="text-white" size={20} />
                    )}
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    } rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800`}
                  >
                    <time className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {timeline.dated}
                    </time>
                    <h2 className="mt-2 text-2xl font-bold text-[#c72c6c]">
                      {timeline.name}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {timeline.designation}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <ImLocation className="mr-2" />
                      {timeline.location}
                    </div>
                  </div>
                </li>
              </SlideUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
