import React from 'react';
import config from '../config.json';

const AboutMe = () => {
  const { personalInfo } = config;

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {personalInfo.fullName}
              </h1>
              <h2 className="text-xl md:text-2xl text-green-500 mb-8 font-medium">
                {personalInfo.title}
              </h2>
              <div className="text-gray-200 text-base leading-relaxed space-y-3">
                {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-80 h-80 mx-auto">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-green-400/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;