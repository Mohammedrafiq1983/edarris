import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/icon.ico" alt="eDarris Logo" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="text-xl font-bold">eDarris</h3>
                <p className="text-gray-400 text-sm">Office & Education Supplies</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for quality office supplies, educational materials, and business solutions across Iraq and MENA region.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-400">Baghdad, Iraq</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+964 (0) 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">info@edarris.com</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="text-right">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li className="text-right">
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li className="text-right">
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li className="text-right">
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.quote')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-right">Our Products</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-right">{t('products.office.title')}</li>
              <li className="text-gray-400 text-right">{t('products.education.title')}</li>
              <li className="text-gray-400 text-right">{t('products.printshop.title')}</li>
              <li className="text-gray-400 text-right">{t('products.packaging.title')}</li>
            </ul>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 rtl:space-x-reverse mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm text-right">
            © 2025 eDarris Office & Education Supplies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
