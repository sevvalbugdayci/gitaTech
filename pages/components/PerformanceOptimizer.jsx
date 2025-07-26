import { useEffect } from 'react';
import Head from 'next/head';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/Poppins-Regular.ttf', as: 'font', type: 'font/ttf', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/Poppins-Bold.ttf', as: 'font', type: 'font/ttf', crossOrigin: 'anonymous' },
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }, []);

  return (
    <Head>
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Critical CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .lazy {
            opacity: 0;
            transition: opacity 0.3s;
          }
          .lazy.loaded {
            opacity: 1;
          }
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
        `
      }} />
    </Head>
  );
};

export default PerformanceOptimizer; 