import React from 'react';
import { GraduationCap, BookOpen, Monitor, Users, Compass, FileText, MessageSquare, Lightbulb, Heart, Target, CheckCircle } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  GraduationCap,
  BookOpen,
  Monitor,
  Users,
  Compass,
  FileText,
  MessageSquare,
  Lightbulb,
  Heart,
  Target
};

const Services = () => {
  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const categories = [
    {
      name: 'Education & Learning Support',
      icon: GraduationCap,
      description: 'Building strong academic foundations'
    },
    {
      name: 'Career & Personal Development',
      icon: Compass,
      description: 'Preparing for successful futures'
    },
    {
      name: 'Empowerment & Growth',
      icon: Lightbulb,
      description: 'Developing confident leaders'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">HOW WE CAN HELP AND SUPPORT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Support Programs for Girls
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive support designed with respect for each girl's dignity and privacy.
          </p>
        </div>

        {/* Services by Category */}
        {categories.map((category, catIndex) => {
          const CategoryIcon = category.icon;
          const categoryServices = groupedServices[category.name] || [];
          
          return (
            <div key={catIndex} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <CategoryIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {categoryServices.map((service, index) => {
                  const Icon = iconMap[service.icon];
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
                    >
                      <div className="p-6">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-orange-600" />
                        </div>

                        {/* Content */}
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Service Clarification */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 border-t-4 border-orange-500 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Commitment
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Volunteer-Driven</h4>
              <p className="text-gray-600 text-sm">All services provided by dedicated volunteers and mentors</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Dignity-Focused</h4>
              <p className="text-gray-600 text-sm">Every interaction respects the girl's dignity and privacy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Long-Term Independence</h4>
              <p className="text-gray-600 text-sm">Building self-reliance and sustainable growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
