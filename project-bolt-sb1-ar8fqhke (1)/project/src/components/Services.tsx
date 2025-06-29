import React from 'react';
import { Lightbulb, Settings, Users, Search, Wrench, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Dynamic lighting solutions to create the perfect ambiance for any event.',
      features: ['LED Stage Lighting', 'Architectural Lighting', 'Color-Changing Systems', 'Special Effects']
    },
    {
      icon: Wrench,
      title: 'Rigging Services',
      description: 'Professional rigging solutions for safe and secure equipment installation.',
      features: ['Truss Installation', 'Equipment Mounting', 'Safety Inspections', 'Load Calculations']
    },
    {
      icon: Users,
      title: 'Manpower Assistance',
      description: 'Skilled technicians and crew members to support your event operations.',
      features: ['Technical Crew', 'Setup Teams', 'Event Support Staff', 'Equipment Operators']
    },
    {
      icon: Search,
      title: 'Specialist Sourcing',
      description: 'Connect with qualified audio, visual, and technical specialists for your events.',
      features: ['Audio Engineers', 'Video Technicians', 'Equipment Suppliers', 'Technical Consultants']
    },
    {
      icon: Settings,
      title: 'Technical Support',
      description: 'On-site technical expertise to ensure flawless event execution.',
      features: ['Setup & Operation', 'Troubleshooting', '24/7 Support', 'Equipment Training']
    },
    {
      icon: Shield,
      title: 'Project Management',
      description: 'Complete project coordination from planning to execution.',
      features: ['Event Planning', 'Resource Coordination', 'Timeline Management', 'Quality Assurance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive event technology solutions and professional services tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-xl w-fit mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                <service.icon className="h-8 w-8 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}