import React from 'react';
import { Play, Award, Users, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               opacity: 0.2
             }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl block mb-3 text-gray-300 font-medium">
              Your Go-To Event Technician
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Akshay
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
            Bringing your events to life with cutting-edge lighting solutions and professional technical services. 
            From intimate gatherings to large-scale productions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
            <button
              onClick={scrollToPortfolio}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Play className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
              View Portfolio
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-400 text-blue-400 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
            >
              Get Quote
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {[
              { icon: Award, label: 'Years Experience', value: '10+' },
              { icon: Users, label: 'Events Completed', value: '1000+' },
              { icon: Clock, label: 'Hours of Service', value: '4000+' },
              { icon: Play, label: 'Happy Clients', value: '500+' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}