import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../../contexts/LanguageContext';

const Layout: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    console.log('Current language:', language);
    console.log('Document element dir:', document.documentElement.dir);

    // Observe changes to the dir attribute on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          console.log('dir attribute changed:', document.documentElement.dir);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
