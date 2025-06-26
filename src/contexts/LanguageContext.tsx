import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.quote': 'Get Quote',

    // Hero Section
    'hero.title': 'Professional B2B Office & Education Supplies',
    'hero.subtitle': 'Your trusted partner for quality office supplies, educational materials, and business solutions across Iraq and MENA region.',
    'hero.cta': 'Explore Our Products',
    'hero.contact': 'Contact Us',

    // Product Categories
    'products.office.title': 'Office Stationery',
    'products.office.description': 'Complete range of office supplies including notebooks, pens, desk organizers, and professional stationery items for modern businesses.',
    'products.education.title': 'Education Supplies',
    'products.education.description': 'Comprehensive educational materials, school supplies, and learning tools designed to enhance the educational experience.',
    'products.printshop.title': 'Print-Shop Consumables',
    'products.printshop.description': 'High-quality printing materials, ink cartridges, toners, and professional papers for all your printing needs.',
    'products.packaging.title': 'Packaging Raw Materials',
    'products.packaging.description': 'Durable packaging solutions including boxes, containers, wrapping materials, and shipping supplies.',
    'products.quote': 'Request Quote',
    'products.learn': 'Learn More',

    // About Page
    'about.title': 'About eDarris',
    'about.subtitle': 'Leading B2B Supplier in Iraq & MENA',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To provide businesses and educational institutions with high-quality supplies and exceptional service, supporting growth and success across the region.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be the most trusted and reliable partner for B2B office and educational supplies in the MENA region.',
    'about.values.title': 'Our Values',
    'about.values.quality': 'Quality',
    'about.values.quality.text': 'We source only the best products from trusted manufacturers.',
    'about.values.service': 'Service',
    'about.values.service.text': 'Exceptional customer service is at the heart of everything we do.',
    'about.values.reliability': 'Reliability',
    'about.values.reliability.text': 'Dependable delivery and consistent product availability.',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for quotes and inquiries',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company Name',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',

    // Quote Form
    'quote.title': 'Request a Quote',
    'quote.category': 'Product Category',
    'quote.quantity': 'Estimated Quantity',
    'quote.timeline': 'Required Timeline',
    'quote.submit': 'Submit Quote Request',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'نجح!',
    'common.language': 'اللغة',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'معلومات عنا',
    'nav.contact': 'اتصل بنا',
    'nav.quote': 'طلب عرض سعر',

    // Hero Section
    'hero.title': 'مستلزمات المكاتب والتعليم المهنية للشركات',
    'hero.subtitle': 'شريكك الموثوق لمستلزمات المكاتب عالية الجودة والمواد التعليمية وحلول الأعمال في العراق ومنطقة الشرق الأوسط.',
    'hero.cta': 'استكشف منتجاتنا',
    'hero.contact': 'اتصل بنا',

    // Product Categories
    'products.office.title': 'القرطاسية المكتبية',
    'products.office.description': 'مجموعة كاملة من مستلزمات المكاتب تشمل الدفاتر والأقلام ومنظمات المكاتب والقرطاسية المهنية للشركات الحديثة.',
    'products.education.title': 'المستلزمات التعليمية',
    'products.education.description': 'مواد تعليمية شاملة ومستلزمات مدرسية وأدوات تعلم مصممة لتعزيز التجربة التعليمية.',
    'products.printshop.title': 'مستهلكات المطابع',
    'products.printshop.description': 'مواد طباعة عالية الجودة وخراطيش حبر وأحبار وأوراق مهنية لجميع احتياجات الطباعة.',
    'products.packaging.title': 'مواد التغليف الخام',
    'products.packaging.description': 'حلول تغليف متينة تشمل الصناديق والحاويات ومواد التغليف ومستلزمات الشحن.',
    'products.quote': 'طلب عرض سعر',
    'products.learn': 'اقرأ المزيد',

    // About Page
    'about.title': 'عن eDarris',
    'about.subtitle': 'المورد الرائد للشركات في العراق والشرق الأوسط',
    'about.mission.title': 'مهمتنا',
    'about.mission.text': 'تزويد الشركات والمؤسسات التعليمية بمستلزمات عالية الجودة وخدمة استثنائية، لدعم النمو والنجاح في جميع أنحاء المنطقة.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نكون الشريك الأكثر ثقة وموثوقية لمستلزمات المكاتب والتعليم للشركات في منطقة الشرق الأوسط.',
    'about.values.title': 'قيمنا',
    'about.values.quality': 'الجودة',
    'about.values.quality.text': 'نحن نحصل على أفضل المنتجات من الشركات المصنعة الموثوقة فقط.',
    'about.values.service': 'الخدمة',
    'about.values.service.text': 'خدمة العملاء الاستثنائية هي في قلب كل ما نقوم به.',
    'about.values.reliability': 'الموثوقية',
    'about.values.reliability.text': 'تسليم موثوق وتوفر منتجات ثابت.',

    // Contact Page
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا للحصول على عروض الأسعار والاستفسارات',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.company': 'اسم الشركة',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.address': 'العنوان',
    'contact.info.phone': 'الهاتف',
    'contact.info.email': 'البريد الإلكتروني',

    // Quote Form
    'quote.title': 'طلب عرض سعر',
    'quote.category': 'فئة المنتج',
    'quote.quantity': 'الكمية المقدرة',
    'quote.timeline': 'الإطار الزمني المطلوب',
    'quote.submit': 'إرسال طلب عرض السعر',

    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ',
    'common.success': 'نجح!',
    'common.language': 'اللغة',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    console.log('Setting dir for language:', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    console.log('document.documentElement.dir after setting:', document.documentElement.dir);
    // Optional: Add class to html element for CSS targeting
    document.documentElement.classList.remove('ltr', 'rtl');
    document.documentElement.classList.add(language === 'ar' ? 'rtl' : 'ltr');
    console.log('document.documentElement.classList after setting:', document.documentElement.classList.value);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
