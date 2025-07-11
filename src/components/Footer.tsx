import React from 'react';
import config from '../config.json';

const Footer = () => {
  const { personalInfo } = config;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-300">
            © {currentYear} {personalInfo.fullName}. Built with React and hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;