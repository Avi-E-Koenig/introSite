'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineUser, AiFillStar } from 'react-icons/ai';
import { CgGitFork, CgFileDocument } from 'react-icons/cg';
import Image from 'next/image';
import { IconType } from 'react-icons';

type Props = {
  href: string;
  icon: IconType;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
};

const Li = ({ href, icon: Icon, children, external, onClick }: Props) => {
  const Component = external ? 'a' : Link;
  const props = external ? { href, target: '_blank', rel: 'noreferrer' } : { href };

  return (
    <li className="relative ml-5">
      <Component
        {...props}
        className="font-medium text-white transition-all duration-300 relative z-10 hover:text-yellow-500"
        onClick={onClick}
      >
        <span className="flex items-center">
          <Icon className="inline-block mr-2" />
          {children}
        </span>
      </Component>
    </li>
  );
};

const Navbar = () => {
  const [navColour, setNavColour] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const scrollHandler = () => {
    setNavColour(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-colors duration-300 ${
        navColour ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center">
          <Image src={`/logo.png`} width={60} height={30} alt="Brand Logo" />
        </Link>
        <button className="text-white md:hidden" onClick={() => setExpanded(!expanded)}>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        <div
          className={`absolute top-full left-0 w-full bg-gray-900 md:static md:w-auto md:flex md:bg-transparent ${
            expanded ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
            <Li href="/" icon={AiOutlineHome} onClick={() => setExpanded(false)}>
              Home
            </Li>
            <Li href="/about" icon={AiOutlineUser} onClick={() => setExpanded(false)}>
              About
            </Li>
            <Li href="/resume" icon={CgFileDocument} onClick={() => setExpanded(false)}>
              Resume
            </Li>
            {/* <Li
              href="/project"
              icon={AiOutlineFundProjectionScreen}
              onClick={() => setExpanded(false)}
            >
              Projects
            </Li>
            <Li href="https://soumyajit.tech/" icon={ImBlog} external>
              Blogs
            </Li> */}
            <li className="relative ml-5">
              <a
                href="https://github.com/Avi-E-Koenig"
                target="_blank"
                rel="noreferrer"
                className="bg-[#623686] border border-transparent rounded-md text-white cursor-pointer text-base font-normal leading-6 px-3 py-1.5 text-center no-underline transition duration-150 ease-in-out transform hover:scale-110 hover:text-yellow-500 flex items-center"
              >
                <CgGitFork className="mr-2" />
                <AiFillStar />
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-purple-500 rounded-lg transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
