import React from 'react';
import { Award, Clock, Users, Wrench, Lightbulb, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Akshay</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creative and innovative Lighting Designer with 10+ years of experience in live production, 
            bringing compelling lighting designs that enhance experiences and uphold brand value.
          </p>
        </div>

        {/* Image Section - Now Above Content */}
        <div className="mb-12">
          <img
            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
            alt="Professional lighting setup"
            className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto h-96 object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lightbulb className="h-7 w-7 text-blue-400 mr-3" />
              Professional Experience
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Creative and innovative Lighting Designer with <span className="text-blue-400 font-semibold">10+ years of experience</span> in live production, 
              bringing a proactive and positive attitude to collaborate with content and production teams.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Proficient in various lighting software and able to quickly provide solid design solutions 
              that enhance worship experiences and uphold brand value across all venues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, title: 'Professional Freelancer', desc: 'Sept 2024 - Present', color: 'text-green-400' },
              { icon: Users, title: 'Apex Business Solutions', desc: 'Jan 2018 - Aug 2024', color: 'text-blue-400' },
              { icon: Lightbulb, title: 'CELIN Pro Lighting', desc: 'Jan 2015 - Jan 2018', color: 'text-purple-400' },
              { icon: Globe, title: '100+ Events Completed', desc: 'International & Local', color: 'text-orange-400' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-200">
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-700 p-2 rounded-lg">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <Globe className="h-5 w-5 text-orange-400 mr-2" />
              Notable International Events
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {[
                'FIFA Club World Cup 2019',
                'Global Security Forum',
                'Qatar National Day 2019',
                'Oracle Modern Business Forum',
                'Qatar Airways Global Conference',
                'Adidas FIFA Media Center',
                'NATO MSCPC',
                'UNOCT Behavioral Conference'
              ].map((event, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                  {event}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Certifications', desc: 'Grand MA2 & Avolites Tiger Touch' },
              { icon: Clock, title: 'Languages', desc: 'Hindi, English, Arabic' },
              { icon: Users, title: 'Team Leadership', desc: 'Managed 3+ technicians' },
              { icon: Wrench, title: 'Education', desc: 'Diploma - Govt. Polytechnic Kerala' }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}