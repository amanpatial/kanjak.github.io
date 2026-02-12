import React from 'react';
import { BookOpen, Monitor, Briefcase, FileText, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  BookOpen,
  Monitor,
  Briefcase,
  FileText,
  MessageSquare,
  Sparkles
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">WHAT WE OFFER</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Free Services & Support
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            All our services are completely free, volunteer-driven, and designed with respect for each girl's dignity and privacy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border-t-4 border-orange-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Services Are
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Completely Free</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Volunteer-Driven</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Dignity-Focused</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Privacy Respected</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Professional Mentors</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Long-term Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
