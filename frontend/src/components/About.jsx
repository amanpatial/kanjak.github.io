import React from 'react';
import { BookOpen, Users, Heart, Scale, Target, Hand } from 'lucide-react';
import { kanjakValues } from '../data/mock';

const iconMap = {
  BookOpen,
  Users,
  Heart,
  Scale,
  Target,
  Hand
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">ABOUT KANJAK</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What KANJAK Stands For
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            KANJAK is both a cultural belief and a modern empowerment mission. We bridge the gap between ritual and responsibility, ensuring every girl receives the dignity, education, and opportunity she deserves.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {kanjakValues.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Letter Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-3xl font-bold text-white">{value.letter}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-end mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-10 shadow-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl leading-relaxed">
            KANJAK is not charity — it is empowerment with dignity. We partner with families to create sustainable change, believing that when a girl rises, society rises with her.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
