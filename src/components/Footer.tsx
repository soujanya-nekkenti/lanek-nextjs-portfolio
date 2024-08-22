import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="mx-auto mt-8 h-0.5 w-full border-0 bg-neutral-200"></hr>
      <div className="mx-auto flex flex-col p-4 text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 Lakshmi Sowjanya Nekkanti
          <a href="/" className="hover:underline"></a>
        </div>
        <div className="mb-1 flex flex-row items-center justify-center space-x-2">
          <a
            href="https://github.com/soujanya-nekkenti"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/lakshminekkanti/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
