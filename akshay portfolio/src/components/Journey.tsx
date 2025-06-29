import React from 'react';
import { Calendar, MapPin, Award, Users, Lightbulb, Briefcase } from 'lucide-react';

export default function Journey() {
  const journeyData = [
    {
      period: 'Sept 2024 - Present',
      title: 'Professional Freelance Lighting Designer',
      company: 'Independent',
      location: 'Doha, Qatar',
      type: 'current',
      highlights: [
        'Custom lighting designs for concerts, weddings, and corporate functions',
        'Client consultation and budget optimization',
        'Equipment setup and on-site execution',
        'Advanced software for dynamic lighting effects'
      ]
    },
    {
      period: 'Jan 2018 - Aug 2024',
      title: 'Lighting Designer',
      company: 'Apex Business Solutions',
      location: 'Doha, Qatar',
      type: 'professional',
      highlights: [
        'Designed lighting for 100+ events including FIFA Club World Cup 2019',
        'Managed and trained team of 3 lighting technicians',
        'Created innovative designs resulting in increased attendance',
        'Maintained lighting systems and console show files'
      ]
    },
    {
      period: 'Jan 2015 - Jan 2018',
      title: 'Lead Lighting Designer',
      company: 'CELIN Pro Lighting',
      location: 'Kochi, Kerala',
      type: 'foundation',
      highlights: [
        'Led team of lighting designers',
        'Collaborated with clients on vision and requirements',
        'Developed lighting concepts within budget constraints',
        'Managed complete project lifecycle from concept to implementation'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'from-green-500 to-emerald-500';
      case 'professional': return 'from-blue-500 to-cyan-500';
      case 'foundation': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'current': return Award;
      case 'professional': return Briefcase;
      case 'foundation': return Lightbulb;
      default: return Users;
    }
  };

  return (
    <section id="journey" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-purple-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade-long journey of growth, innovation, and excellence in lighting design and event technology.
          </p>
        </div>

        {/* Journey Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Calendar, label: 'Years Experience', value: '10+', color: 'text-green-400' },
            { icon: Award, label: 'Major Projects', value: '100+', color: 'text-blue-400' },
            { icon: Users, label: 'Team Members Trained', value: '15+', color: 'text-purple-400' },
            { icon: MapPin, label: 'Countries Served', value: '3+', color: 'text-orange-400' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors duration-200">
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 rounded-full"></div>
          
          <div className="space-y-16">
            {journeyData.map((job, index) => {
              const TypeIcon = getTypeIcon(job.type);
              return (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group">
                      {/* Header */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${getTypeColor(job.type)} text-white`}>
                        <TypeIcon className="h-4 w-4 mr-2" />
                        {job.type === 'current' ? 'Current Role' : job.type === 'professional' ? 'Professional Growth' : 'Foundation Years'}
                      </div>
                      
                      <div className="text-purple-400 font-semibold mb-2 flex items-center justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        {job.period}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {job.title}
                      </h3>
                      
                      <div className="text-gray-300 font-medium mb-1 text-lg">{job.company}</div>
                      
                      <div className="text-gray-400 mb-6 flex items-center justify-start">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                        {job.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start text-gray-300">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 bg-gradient-to-r ${getTypeColor(job.type)}`}></div>
                            <span className="leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 rounded-full border-4 border-gray-800 bg-gradient-to-r ${getTypeColor(job.type)} shadow-lg`}>
                      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Career <span className="text-purple-400">Highlights</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'International Recognition',
                description: 'Worked on prestigious events including FIFA Club World Cup 2019 and Qatar National Day celebrations',
                icon: Award,
                color: 'text-yellow-400'
              },
              {
                title: 'Technical Leadership',
                description: 'Successfully managed and trained teams of lighting technicians across multiple high-profile projects',
                icon: Users,
                color: 'text-blue-400'
              },
              {
                title: 'Innovation & Growth',
                description: 'Continuously evolved from foundation roles to leading independent lighting design consultancy',
                icon: Lightbulb,
                color: 'text-green-400'
              }
            ].map((highlight, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-8 text-center hover:bg-gray-800 transition-colors duration-200">
                <div className="bg-gray-800 p-4 rounded-full w-fit mx-auto mb-6">
                  <highlight.icon className={`h-8 w-8 ${highlight.color}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{highlight.title}</h4>
                <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}