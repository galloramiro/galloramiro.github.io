import React from 'react';
import { Linkedin, Youtube, Mail } from 'lucide-react';
import config from '../config.json';

const Contact = () => {
  const { contact } = config;

  return (
    <section id="contact" className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Let's Connect
          </h2>
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-600/50">
            <div className="flex items-center justify-center mb-6">
              <Mail className="text-green-500 mr-3" size={28} />
              <h3 className="text-xl font-semibold text-white">
                Get in Touch
              </h3>
            </div>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborations, 
              or just having a chat about technology. Feel free to reach out to me via LinkedIn!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 font-medium"
              >
                <Linkedin size={20} className="mr-3" />
                Connect on LinkedIn
              </a>
              {contact.youtubeUrl && (
                <a
                  href={contact.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 font-medium"
                >
                  <Youtube size={20} className="mr-3" />
                  YouTube Channel
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;