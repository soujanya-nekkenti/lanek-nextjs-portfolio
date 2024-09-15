'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

type NavItem = {
  label: string;
  page: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    page: '#home',
  },
  {
    label: 'About',
    page: '#about',
  },
  {
    label: 'Timeline',
    page: '#timeline',
  },
  {
    label: 'Projects',
    page: '#projects',
  },
  {
    label: 'Contact',
    page: '#contact',
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="fixed top-0 z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-stone-900 sm:px-20">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="#home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">
                  Lakshmi Sowjanya Nekkanti
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item) => {
                return (
                  <Link
                    key={item.page}
                    href={item.page}
                    onClick={() => setNavbar(!navbar)}
                    className={
                      'block cursor-pointer hover:text-neutral-500 dark:text-neutral-100 lg:inline-block'
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="rounded-xl bg-slate-100 p-2"
                >
                  <FaRegLightbulb size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="rounded-xl bg-slate-100 p-2"
                >
                  <FaLightbulb size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
