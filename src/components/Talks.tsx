import { ExternalLink, Youtube, Presentation, Calendar } from 'lucide-react';
import config from '../config.json';

const Talks = () => {
  const { talks } = config;

  return (
    <section id="talks" className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Technical Talks
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Sharing knowledge and experience through technical presentations on software development, 
            architecture patterns, and best practices.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {talks.map((talk, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-600/50 hover:border-green-500/50"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-green-500/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Presentation className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                      {talk.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {talk.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={talk.slidesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 text-sm font-medium hover:scale-105"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Slides
                  </a>
                  {talk.youtubeLink && (
                    <a
                      href={talk.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 text-sm font-medium hover:scale-105"
                    >
                      <Youtube size={16} className="mr-2" />
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-600/50">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Want me to speak at your event?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always excited to share knowledge about Python, software architecture, 
                and development best practices. Let's connect!
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 font-medium hover:scale-105"
              >
                <Calendar size={20} className="mr-2" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;