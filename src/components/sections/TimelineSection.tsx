import { ImBook, ImBriefcase, ImLocation } from 'react-icons/im';
import SlideUp from '../SlideUp';

export const TimelineSection = () => {
  const timelines = [
    {
      name: 'H&M Group',
      designation: 'Senior Software Engineer - Frontend',
      dated: 'May 2021 - Jan 2023',
      location: 'Stockholm, Sweden',
    },
    {
      name: 'AB Trav och Galoop',
      designation: 'Frontend Developer & Scrum Master',
      dated: 'May 2018 - May 2021',
      location: 'Stockholm, Sweden',
    },
    {
      name: 'Qliro Financial Services',
      designation: 'Software Engineer',
      dated: 'Jan 2017 - May 2018',
      location: 'Stockholm, Sweden',
    },
    {
      name: 'Blekinge Tekniska Hogskolan (BTH)',
      designation: 'Masters in Software Engineering',
      dated: 'Jan 2015 - Jan 2017',
      location: 'Karlskrona, Sweden',
    },
    {
      name: 'Jawaharlal Nehru Technological University (JNTUk)',
      designation: 'Bachelors in Computer Science Engineering',
      dated: 'May 2011 - Dec 2014',
      location: 'Kakinada, India',
    },
  ];

  return (
    <section id="timeline">
      <div className="my-16 pb-12 md:py-20">
        <h1 className="my-10 text-center text-4xl font-bold">
          Timeline
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-[#c72c6c]"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          <div>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="animate-slideUpCubiBezier animation-delay-2 relative mx-4 content-center border-l border-gray-200 dark:border-gray-700">
                {timelines.map((timeline, index) => (
                  <div key={index} className="relative mb-10 ml-8">
                    <div className="absolute -left-12 top-1.5 flex items-center">
                      {index < 3 ? (
                        <ImBriefcase
                          className="text-[#6f89cc] dark:text-[#6f89cc]"
                          size={24}
                        />
                      ) : (
                        <ImBook
                          className="text-[#6f89cc] dark:text-[#6f89cc]"
                          size={24}
                        />
                      )}
                    </div>
                    <div className="cursor-pointer rounded border border-zinc-300 p-3 shadow-sm shadow-zinc-300 dark:border-zinc-700 dark:shadow-zinc-700">
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        <div className="flex justify-between gap-2">
                          <p className="text-xl font-bold text-[#c72c6c] md:text-2xl">
                            {timeline.name}
                          </p>
                          <p className="flex items-center gap-2 text-[#6f89cc]">
                            <ImLocation /> {timeline.location}
                          </p>
                        </div>
                      </time>
                      <div className="mt-2 flex justify-between gap-2 text-gray-600 dark:text-gray-400">
                        <p className="font-semibold">{timeline.designation}</p>
                        <p>{timeline.dated}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};
