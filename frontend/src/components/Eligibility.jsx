import React from 'react';
import { IndianRupee, Users, GraduationCap, Target, BookX, Shield } from 'lucide-react';
import { eligibilityCriteria } from '../data/mock';

const iconMap = {
  IndianRupee,
  Users,
  GraduationCap,
  Target,
  BookX
};

const Eligibility = () => {
  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">WHO WE SUPPORT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Eligibility & Criteria
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            KANJAK focuses on the most vulnerable girls who need support the most.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            We support girls who face the greatest challenges and have the strongest will to overcome them.
          </p>
        </div>

        {/* Criteria Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            KANJAK Supports Girls Who:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {eligibilityCriteria.map((criteria, index) => {
              const Icon = iconMap[criteria.icon];
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {criteria.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {criteria.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Powerful Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-10 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 flex items-center justify-center space-x-4">
              <Shield className="w-12 h-12 text-white flex-shrink-0" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white text-center leading-tight">
                When society fails a girl, KANJAK stands beside her.
              </h3>
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
            <p className="text-gray-700 leading-relaxed">
              We believe every girl deserves a chance, regardless of her circumstances. KANJAK provides comprehensive support to help the most vulnerable girls overcome barriers and build a future filled with dignity, education, and opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
