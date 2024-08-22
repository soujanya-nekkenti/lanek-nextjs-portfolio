import Image from 'next/image';

export const AboutSection = () => {
  const skills = [
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'React' },
    { skill: 'Next' },
    { skill: 'Typescript' },
    { skill: 'Node' },
    { skill: 'Git' },
    { skill: 'React Hooks' },
    { skill: 'Styled Components' },
  ];
  return (
    <section id="about">
      <div className="my-16 pb-12 md:py-28">
        <h1 className="text-center text-4xl font-bold">
          About Me
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-[#c72c6c]"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              Get to know me
            </h1>
            <p>
              Hi, my name is Lakshmi Sowjanya and I am a{' '}
              <span className="font-bold">{'highly ambitious'}</span>,
              <span className="font-bold">{' self-motivated'}</span>, and
              <span className="font-bold">{' driven'}</span> software engineer
              based in Stockholm, Sweden.
            </p>
            <br />
            <p>
              I graduated from Blekinge Tekniska Hogskolan, Sweden in 2017 with
              a Masters in Software Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From painting, traveling, cooking, to blogging my food receipes, I
              am always seeking new experiences and love to keep myself engaged
              and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{' '}
              <span className="font-bold text-[#c72c6c]">
                never stop growing
              </span>{' '}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              My Skills
            </h1>
            <div className="flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="text-gray500 mr-2 mt-2 rounded bg-gray-200 px-4 py-2 font-semibold dark:text-black"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:relative md:bottom-4 md:left-32 md:z-0 md:block"
              src="/about-image.png"
              alt=""
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
