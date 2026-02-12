import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Empowerment with Dignity</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {heroData.title}
            </h1>

            <div className="space-y-4">
              <p className="text-xl text-gray-600 leading-relaxed">
                {heroData.subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {heroData.description}
              </p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm border-l-4 border-orange-500 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-gray-900 italic">
                {heroData.vision}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={heroData.images[0]}
                    alt="Girl studying with hope"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={heroData.images[1]}
                    alt="Empowered girl"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
              <div className="pt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={heroData.images[2]}
                    alt="Girl with determination"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-xl shadow-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600">250+</div>
                  <div className="text-sm text-gray-600">Girls Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">45+</div>
                  <div className="text-sm text-gray-600">Active Mentors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">5000+</div>
                  <div className="text-sm text-gray-600">Learning Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
