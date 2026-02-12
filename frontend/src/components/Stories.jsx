import React from 'react';
import { Quote, Award } from 'lucide-react';
import { successStories } from '../data/mock';

const Stories = () => {
  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming Dreams into Reality
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every girl's journey is unique. Here are some inspiring stories of transformation, determination, and success.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Achievement Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-semibold text-gray-900">{story.achievement}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Age {story.age} • {story.location}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{story.story}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-2xl border-l-4 border-orange-500">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold">Your story could be next.</span> Whether you're seeking guidance or want to make a difference by becoming a mentor, we're here to support you on your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
