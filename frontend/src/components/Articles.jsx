import React, { useState } from 'react';
import { BookOpen, ChevronRight, Clock, Tag } from 'lucide-react';
import { articles } from '../data/mock';
import { Button } from './ui/button';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <section id="articles" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="mb-8 flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
            Back to Articles
          </button>

          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedArticle.category}
                </span>
                <span className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedArticle.readTime}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {selectedArticle.title}
              </h1>
              <div className="flex items-center text-gray-600 text-sm">
                <span>By {selectedArticle.author}</span>
                <span className="mx-3">•</span>
                <span>{selectedArticle.date}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {selectedArticle.excerpt}
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                {selectedArticle.content}
              </p>

              {/* Key Points */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  {selectedArticle.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Make a Difference?</h3>
              <p className="text-lg mb-6">
                Join us in empowering girls with education, safety, and opportunities.
              </p>
              <Button
                onClick={() => {
                  handleBack();
                  setTimeout(() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl"
              >
                Get Involved
              </Button>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">AWARENESS & EDUCATION</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Understanding the Challenges
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Knowledge is power. Explore articles on safety, independence, empowerment, and the real issues affecting girls in India today.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-orange-600 px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3 text-white" />
                    <span className="text-xs font-semibold text-white">{article.category}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <button
                    onClick={() => handleReadMore(article)}
                    className="flex items-center space-x-1 text-orange-600 font-medium group-hover:space-x-2 transition-all duration-200"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Author & Date */}
                <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                  <BookOpen className="w-4 h-4" />
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-2xl border-l-4 border-orange-500">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold">Stay informed, stay empowered.</span> These articles are based on real data and research. Share them to raise awareness about the challenges girls face and the solutions we can build together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
