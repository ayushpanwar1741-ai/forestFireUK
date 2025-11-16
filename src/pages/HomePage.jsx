import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, BarChart3, Shield, Flame, Leaf } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-600 via-forest-700 to-forest-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                <Flame className="h-16 w-16 text-orange-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-forest-100">
              VanSuraksha
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-forest-100 max-w-3xl mx-auto">
              Forest Fire Risk Prediction System
            </p>
            
            <p className="text-lg mb-10 text-forest-200 max-w-2xl mx-auto">
              Leveraging advanced machine learning to predict and prevent forest fires,
              protecting our natural resources and communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/risk-map">
                <Button size="lg" className="bg-white text-forest-900 hover:bg-forest-50 w-full sm:w-auto">
                  <MapPin className="mr-2 h-5 w-5" />
                  Explore Risk Map
                </Button>
              </Link>
              <Link to="/prediction">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Make Prediction
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why VanSuraksha?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced technology meeting environmental protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Predictive Analysis',
                description: 'Advanced ML models analyze multiple environmental factors to predict fire risks with high accuracy.',
                color: 'text-blue-600',
              },
              {
                icon: MapPin,
                title: 'Real-time Monitoring',
                description: 'Interactive maps display current risk levels across different regions for quick response.',
                color: 'text-green-600',
              },
              {
                icon: BarChart3,
                title: 'Data-Driven Insights',
                description: 'Comprehensive dashboards provide actionable insights for forest management teams.',
                color: 'text-purple-600',
              },
              {
                icon: TrendingUp,
                title: 'Risk Assessment',
                description: 'Multi-factor risk evaluation using temperature, humidity, wind, and vegetation data.',
                color: 'text-orange-600',
              },
              {
                icon: Leaf,
                title: 'Environmental Protection',
                description: 'Help preserve biodiversity and protect communities from devastating forest fires.',
                color: 'text-forest-600',
              },
              {
                icon: Flame,
                title: 'Early Warning System',
                description: 'Get alerts before conditions become critical, enabling proactive prevention measures.',
                color: 'text-red-600',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-forest-600 to-forest-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-forest-100">
              Join us in protecting forests and saving lives through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-white text-forest-900 hover:bg-forest-50 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
