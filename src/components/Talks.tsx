import React from 'react';
import { ExternalLink, Youtube, Presentation } from 'lucide-react';
import config from '../config.json';

const Talks = () => {
  const { talks } = config;

  return (
    <section id="talks" className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Technical Talks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talks.map((talk, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-600/50"
              >
                <div className="flex items-center mb-4">
                  <Presentation className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">
                    {talk.title}
                  </h3>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {talk.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={talk.slidesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-800 hover:bg-green-900 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Slides
                  </a>
                  {talk.youtubeLink && (
                    <a
                      href={talk.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <Youtube size={16} className="mr-2" />
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;