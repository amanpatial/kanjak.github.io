import React from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">LATEST UPDATES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            News & Insights
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay informed about our programs, impact stories, and insights on girl child empowerment.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-orange-600 px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3 text-white" />
                    <span className="text-xs font-semibold text-white">{post.category}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-orange-600 font-medium group-hover:space-x-2 transition-all duration-200">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
