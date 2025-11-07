'use client';

import Image from 'next/image';

import SocialLinks from '@/components/ui/links/social-links';
import Tilt from 'react-parallax-tilt';
import TypeWritterWrapper from '@/components/ui/typewriter';

export default function Home() {
  return (
    <div className="home-page flex flex-col w-[70vw] mx-auto home-section">
      <section className="text-white flex items-start">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-xl">
            {/* Right Section */}
            <div className="flex justify-center md:py-[15vh]">
              <Image src={'./home-main.svg'} alt="home pic" height={350} width={350} priority />
            </div>

            {/* Left Section */}
            <div className="home-header flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hi There!{' '}
                <span className="wave inline-block animate-wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold">
                I&apos;M
                <strong className="text-[#be6adf] ml-2">Avi E. Koenig</strong>
              </h2>
              <h2 className="mt-8 text-[#be6adf] text-[35px] md:text-[30px] font-bold h-10 w-10">
                <TypeWritterWrapper
                  options={{
                    words: [
                      'Full Stack Developer',
                      'React Developer',
                      'Vue Developer',
                      'Node Developer',
                      'Express Developer',
                      'Nest Developer',
                      'MERN Stack Developer',
                      'Freelancer',
                    ],
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="home-about-section text-white mt-[15vh]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            {/* Left Column */}
            <div className="md:w-8/12 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 text-center">
                LET ME <span className="text-purple-500"> INTRODUCE </span> MYSELF
              </h1>
              {/* Description of myself */}
              <section className="home-about-body text-lg leading-relaxed">
                <p>
                  I fell in love with programming years ago—and that passion keeps growing.
                  Every project challenges me to build smarter, stronger, and cleaner systems.
                </p>
                <p>
                  I’m fluent in <b className="text-purple-500">JavaScript, C#, and PHP</b>,
                  with over a decade of experience across web technologies, frameworks, and stacks.
                </p>
                <p>
                  My work revolves around creating <b className="text-purple-500">reliable, production-grade software</b>—
                  the kind that scales, survives refactors, and stays maintainable under pressure.
                </p>
                <p>
                  I aim for <b className="text-purple-500">strong, tested code</b>—whether through
                  <b className="text-purple-500"> Jest</b>, <b className="text-purple-500">end-to-end testing</b>,
                  or simply meticulous attention to detail in every commit.
                </p>
                <p>
                  I enjoy working with <b className="text-purple-500">Node.js</b>,
                  <b className="text-purple-500">React</b>, and <b className="text-purple-500">Next.js</b>,
                  building full-stack apps, CRMs, and platforms that balance performance, usability, and maintainability.
                </p>
              </section>
            </div>

            {/* Right Column */}
            <div className="md:w-4/12 flex justify-center">
              <Tilt>
                <Image
                  src={'./avatar.svg'}
                  alt="avatar"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </Tilt>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <h1 className="text-3xl font-bold mb-4">FIND ME ON</h1>
            <p className="text-lg mb-6">
              Feel free to{' '}
              <a
                href="mailto:avi@koenig.co.il"
                className="text-purple-500 underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                connect
              </a>{' '}
              with me
            </p>
            <SocialLinks iconSize={60} />
          </div>
        </div>
      </section>
    </div>
  );
}
