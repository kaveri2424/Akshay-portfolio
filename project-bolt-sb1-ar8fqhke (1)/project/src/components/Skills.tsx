import React from 'react';
import { Lightbulb, Wrench, Users, Settings, Shield } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Lighting Design',
      icon: Lightbulb,
      skills: ['LED Programming', 'Stage Lighting', 'Color Theory', 'DMX Control']
    },
    {
      title: 'Rigging & Safety',
      icon: Wrench,
      skills: ['Truss Installation', 'Load Calculations', 'Safety Inspections', 'Equipment Mounting']
    },
    {
      title: 'Project Management',
      icon: Shield,
      skills: ['Team Coordination', 'Resource Planning', 'Timeline Management', 'Quality Control']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-green-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized skills in lighting design, rigging, and project management with 10+ years of hands-on experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Settings className="h-7 w-7 text-green-400 mr-3" />
              Core Competencies
            </h3>

            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center mb-6">
                    <category.icon className="h-6 w-6 text-green-400 mr-3" />
                    <h4 className="text-xl font-semibold text-white">{category.title}</h4>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-gray-300 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Capabilities */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Users className="h-7 w-7 text-green-400 mr-3" />
              Service Capabilities
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: 'Manpower Coordination',
                  description: 'Managing technical crews and support staff for seamless event execution',
                  icon: Users
                },
                {
                  title: 'Specialist Sourcing',
                  description: 'Connecting with qualified audio, visual, and technical experts',
                  icon: Settings
                },
                {
                  title: 'Technical Consultation',
                  description: 'Equipment recommendations and comprehensive technical planning',
                  icon: Lightbulb
                },
                {
                  title: 'Safety Compliance',
                  description: 'Ensuring all installations meet international safety standards',
                  icon: Shield
                }
              ].map((capability, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <capability.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-lg">{capability.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}