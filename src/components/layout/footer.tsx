import React from 'react';
import SocialLinks from '@/components/ui/links/social-links';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Designed and Developed Section */}
          <div className="mb-6 md:mb-0 text-center">
            <h3 className="text-md font-semibold">
              Based on work of&nbsp;&nbsp;
              <a className="text-scrollbar-thumb" href="https://soumyajit.vercel.app/">
                Soumyajit Behera
              </a>
              &nbsp;rewritten by&nbsp;
              <span className="text-scrollbar-thumb">Avi E Koenig</span>
            </h3>
          </div>

          {/* Copyright Section */}
          <div className="mb-6 md:mb-0 text-center">
            <h3 className="text-lg font-semibold">CoffeRights <span className="text-scrollbar-thumb">©{year}</span>&nbsp;Avi E Koenig</h3>
          </div>

          {/* Social Icons Section */}
          <SocialLinks className="text-white [&_a]:border-white [&_a]:text-white [&_a:hover]:border-purple-400 [&_a:hover]:text-purple-300" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
