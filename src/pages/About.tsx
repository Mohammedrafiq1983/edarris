import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Award, Users, Globe, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Award,
      title: t('about.values.quality'),
      description: t('about.values.quality.text'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Users,
      title: t('about.values.service'),
      description: t('about.values.service.text'),
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Globe,
      title: t('about.values.reliability'),
      description: t('about.values.reliability.text'),
      color: 'bg-purple-100 text-purple-600',
    },
  ];
  
  const stats = [
    { number: '500+', label: 'Business Clients' },
    { number: '50+', label: 'Educational Institutions' },
    { number: '10+', label: 'Years of Excellence' },
    { number: '24/7', label: 'Customer Support' },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">{t('about.mission.title')}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">{t('about.vision.title')}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/team.jpg"
                alt="eDarris Team"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t('about.values.title')}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Company Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Founded with a vision to transform the B2B supply landscape in Iraq and the MENA region, 
                eDarris has grown from a small local supplier to a trusted partner for businesses and 
                educational institutions across the region.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our journey began with a simple observation: businesses needed a reliable, professional 
                supplier who understood their unique challenges and could deliver consistent quality at 
                competitive prices. Today, we serve over 500 business clients and 50+ educational 
                institutions, maintaining the same commitment to excellence that started our journey.
              </p>
              
              <p className="text-lg leading-relaxed">
                We're the best on our region, our focus remains on building lasting partnerships with our clients, 
                understanding their evolving needs, and providing solutions that help them succeed in an 
                increasingly competitive marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
