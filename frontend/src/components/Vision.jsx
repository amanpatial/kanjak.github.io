import React from 'react';
import { TrendingUp, Lightbulb, Heart } from 'lucide-react';

const Vision = () => {
  const impacts = [
    {
      icon: TrendingUp,
      title: 'Uplift Communities',
      description: 'Educated girls uplift entire families and communities, creating a ripple effect of positive change.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Lightbulb,
      title: 'Financial Independence',
      description: 'Economic empowerment leads to आत्मनिर्भरता (self-reliance) and the freedom to make life choices.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Lead with Confidence',
      description: 'Confidence transforms girls into leaders who inspire and influence generations to come.',
      color: 'from-orange-600 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff9933' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-orange-700">FUTURE VISION</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Future of the Girl Child
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our vision extends beyond today. We're creating a future where every girl has the opportunity to reach her full potential and contribute to society.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {impact.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 text-center">
              <div className="text-6xl text-white/30 mb-4">"</div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                When a Girl Rises, Society Rises with Her
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                One empowered girl influences generations. She becomes a role model, a leader, and a force for positive change in her family, community, and beyond.
              </p>
              <div className="text-6xl text-white/30 mt-4 rotate-180">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
