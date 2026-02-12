import React from 'react';
import { IndianRupee, Users, GraduationCap, TrendingUp, Target, CheckCircle2 } from 'lucide-react';
import { eligibilityCriteria } from '../data/mock';

const iconMap = {
  IndianRupee,
  Users,
  GraduationCap,
  TrendingUp,
  Target
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
          <p className="text-xl text-gray-600 leading-relaxed">
            KANJAK supports girls who are ready to learn, grow, and transform their futures. We partner with families committed to their daughter's education and empowerment.
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {eligibilityCriteria.map((criteria, index) => {
            const Icon = iconMap[criteria.icon];
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {criteria.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {criteria.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Message */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-10 border-l-4 border-orange-500">
          <div className="flex items-start space-x-4">
            <CheckCircle2 className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                KANJAK Partners with Families
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sustainable change happens when families and communities work together. We believe in empowerment through collaboration, ensuring that every girl has the support system she needs to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
