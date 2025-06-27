import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowRight, Package, GraduationCap, Printer, Archive } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  const productCategories = [
    {
      id: 'office',
      title: t('products.office.title'),
      description: t('products.office.description'),
      icon: Package,
      images: [
        '/images/office-stationery-hero.jpg',
        '/images/office-supplies-1.jpg',
        '/images/office-supplies-2.jpg',
      ],
      color: 'bg-blue-50 border-blue-200',
    },
    {
      id: 'education',
      title: t('products.education.title'),
      description: t('products.education.description'),
      icon: GraduationCap,
      images: [
        '/images/education-hero.jpg',
        '/images/education-1.jpg',
        '/images/education-2.jpg',
      ],
      color: 'bg-green-50 border-green-200',
    },
    {
      id: 'printshop',
      title: t('products.printshop.title'),
      description: t('products.printshop.description'),
      icon: Printer,
      images: [
        '/images/print-shop-hero.jpg',
        '/images/print-shop-1.jpg',
        '/images/print-shop-2_0.jpg',
      ],
      color: 'bg-purple-50 border-purple-200',
    },
    {
      id: 'packaging',
      title: t('products.packaging.title'),
      description: t('products.packaging.description'),
      icon: Archive,
      images: [
        '/images/packaging-hero.jpg',
        '/images/packaging-1.jpeg',
        '/images/packaging-2.jpg',
      ],
      color: 'bg-orange-50 border-orange-200',
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  {t('hero.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive B2B solutions for all your office and educational needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className={`${category.color} hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{category.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    {/* Image Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {category.images.map((image, index) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`${category.title} ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between pt-4">
                    <Button variant="outline" className="flex-1 mr-2">
                      {t('products.learn')}
                    </Button>
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        {t('products.quote')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for competitive quotes and exceptional service for all your business supply needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                {t('nav.quote')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-black hover:bg-white hover:text-primary">
                {t('nav.about')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
