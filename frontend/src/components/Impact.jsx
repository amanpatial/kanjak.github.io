import React, { useState, useEffect } from 'react';
import { Users, UserCheck, Clock, Award } from 'lucide-react';
import { impactMetrics } from '../data/mock';

const iconMap = {
  Users,
  UserCheck,
  Clock,
  Award
};

const Impact = () => {
  const [counters, setCounters] = useState(impactMetrics.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    impactMetrics.forEach((metric, index) => {
      const increment = metric.value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          current = metric.value;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, interval);
    });
  }, []);

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-orange-500 to-amber-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-white">OUR IMPACT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Making a Real Difference
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Every number represents a life touched, a dream nurtured, and a future transformed.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">
                    {counters[index]}{metric.suffix}
                  </div>
                  <div className="text-lg text-white/90 font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-2xl text-white font-semibold">
            Together, we're building a brighter future, one girl at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
