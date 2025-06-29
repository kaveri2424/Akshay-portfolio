import React, { useState } from 'react';
import { ExternalLink, Play, Calendar, MapPin, Globe, Award } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'international', 'corporate', 'sports', 'conference'];

  const projects = [
    {
      id: 1,
      title: 'FIFA Club World Cup 2019',
      category: 'international',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Main stage lighting design for FIFA Club World Cup 2019',
      date: '2019',
      location: 'Qatar',
      services: ['Stage Lighting', 'LED Programming', 'Live Production']
    },
    {
      id: 2,
      title: 'Global Security Forum',
      category: 'international',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete lighting setup for international security conference',
      date: '2023',
      location: 'Doha, Qatar',
      services: ['Conference Lighting', 'Audio Visual', 'Technical Support']
    },
    {
      id: 3,
      title: 'Trinity Forum',
      category: 'conference',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Professional lighting design for Trinity Forum conference',
      date: '2022',
      location: 'Qatar',
      services: ['Presentation Lighting', 'Stage Design', 'Technical Management']
    },
    {
      id: 4,
      title: 'Oracle Modern Business Forum',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'High-tech lighting solutions for Oracle business forum',
      date: '2023',
      location: 'Doha, Qatar',
      services: ['Corporate Lighting', 'Brand Integration', 'Interactive Displays']
    },
    {
      id: 5,
      title: 'Qatar National Day 2019',
      category: 'international',
      image: 'https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Grand lighting celebration for Qatar National Day',
      date: '2019',
      location: 'Qatar',
      services: ['Celebration Lighting', 'Patriotic Themes', 'Large Scale Production']
    },
    {
      id: 6,
      title: 'Qatar Airways Global Cargo Conference',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Professional lighting for Qatar Airways global conference',
      date: '2022',
      location: 'Doha, Qatar',
      services: ['Corporate Branding', 'Conference Setup', 'Professional Lighting']
    },
    {
      id: 7,
      title: 'Adidas FIFA Media Center',
      category: 'international',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Brand-focused lighting design for Adidas FIFA media center',
      date: '2022',
      location: 'Qatar',
      services: ['Brand Lighting', 'Media Production', 'Sports Event Support']
    },
    {
      id: 8,
      title: 'NATO MSCPC Conference',
      category: 'international',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'High-security international conference lighting setup',
      date: '2023',
      location: 'Qatar',
      services: ['Security Compliant Setup', 'Professional Lighting', 'Technical Support']
    },
    {
      id: 9,
      title: 'UNOCT Behavioral Conference',
      category: 'international',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'UN conference lighting with international standards',
      date: '2023',
      location: 'Doha, Qatar',
      services: ['International Standards', 'Conference Lighting', 'Diplomatic Events']
    },
    {
      id: 10,
      title: 'Jaidah Group National Sports Day',
      category: 'sports',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Sports event lighting for Jaidah Group celebration',
      date: '2023',
      location: 'Qatar',
      services: ['Sports Lighting', 'Event Production', 'Corporate Sports Events']
    },
    {
      id: 11,
      title: 'Invest Qatar National Sports Day',
      category: 'sports',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Professional lighting for Invest Qatar sports celebration',
      date: '2023',
      location: 'Qatar',
      services: ['Sports Event Lighting', 'Government Events', 'Celebration Production']
    },
    {
      id: 12,
      title: 'UDC National Sports Day',
      category: 'sports',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Urban Development Company sports day lighting',
      date: '2023',
      location: 'Qatar',
      services: ['Corporate Sports Events', 'Outdoor Lighting', 'Event Management']
    },
    {
      id: 13,
      title: 'GORD Research & Development ECO Lab Opening',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Grand opening ceremony lighting for GORD ECO Lab',
      date: '2023',
      location: 'Qatar',
      services: ['Grand Opening', 'Eco-Friendly Lighting', 'Research Facility Launch']
    },
    {
      id: 14,
      title: 'Jotun Color Design Launch',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Color-themed lighting design for Jotun product launch',
      date: '2022',
      location: 'Qatar',
      services: ['Product Launch', 'Color Design', 'Brand Integration']
    },
    {
      id: 15,
      title: 'Qatar Rail Economic Zone Station Launch',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Infrastructure launch event lighting design',
      date: '2023',
      location: 'Qatar',
      services: ['Infrastructure Events', 'Government Projects', 'Launch Ceremonies']
    },
    {
      id: 16,
      title: 'NOC International Women\'s Day',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Celebration lighting for NOC Women\'s Day event',
      date: '2023',
      location: 'Qatar',
      services: ['Celebration Events', 'Corporate Social Events', 'Themed Lighting']
    },
    {
      id: 17,
      title: 'Gallaf 25 Years Anniversary',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Milestone anniversary celebration lighting',
      date: '2023',
      location: 'Qatar',
      services: ['Anniversary Events', 'Corporate Celebrations', 'Milestone Lighting']
    },
    {
      id: 18,
      title: 'FIFA Activation Events',
      category: 'international',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Multiple FIFA activation events lighting design',
      date: '2022',
      location: 'Qatar',
      services: ['Sports Activation', 'FIFA Branding', 'Multiple Venues']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event <span className="text-orange-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover some of our most prestigious international and local events, including FIFA World Cup, 
            government celebrations, and corporate milestones.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Events' : category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors duration-200">
                    <Play className="h-6 w-6" />
                  </button>
                </div>
                {project.category === 'international' && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Globe className="h-3 w-3 mr-1" />
                      International
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.category === 'international' ? 'bg-blue-500/20 text-blue-400' :
                    project.category === 'corporate' ? 'bg-green-500/20 text-green-400' :
                    project.category === 'sports' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {project.date}
                  <MapPin className="h-4 w-4 ml-4 mr-2" />
                  {project.location}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '100+', label: 'Major Events', icon: Globe },
            { number: '50+', label: 'International Projects', icon: Award },
            { number: '10+', label: 'Years Experience', icon: Calendar },
            { number: '100%', label: 'Client Satisfaction', icon: Play }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
              <stat.icon className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}