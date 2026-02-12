import React from 'react';
import { BookX, Utensils, Home, Compass, UserX, Laptop } from 'lucide-react';
import { challenges } from '../data/mock';

const iconMap = {
  BookX,
  Utensils,
  Home,
  Compass,
  UserX,
  Laptop
};

const Reality = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">THE REALITY</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Challenges We're Addressing
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding the barriers helps us build better solutions. These are the real challenges underprivileged girls face every day.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = iconMap[challenge.icon];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-300 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
            <p className="text-lg text-gray-700 leading-relaxed">
              These challenges are real, but they are not insurmountable. With the right support, guidance, and opportunities, every girl can overcome these barriers and reach her full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reality;
