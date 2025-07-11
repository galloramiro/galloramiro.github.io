import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import config from '../config.json';

const WorkExperience = () => {
  const { workExperience } = config;

  const formatDate = (dateString: string | null, isCurrent: boolean) => {
    if (isCurrent) return 'Present';
    if (!dateString) return 'Present';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="bg-gray-700/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <img
                      src={job.companyLogo}
                      alt={`${job.company} logo`}
                      className="w-16 h-16 object-cover rounded-lg mr-4 border-2 border-gray-600"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {job.jobTitle}
                      </h3>
                      <p className="text-green-300 font-medium">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">
                      {formatDate(job.startDate, false)} - {formatDate(job.endDate, job.currentlyWorking)}
                    </span>
                  </div>
                </div>
                <div className="pl-0 md:pl-20">
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start text-gray-200 leading-relaxed"
                      >
                        <span className="text-green-500 mr-3 mt-1.5 flex-shrink-0">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;