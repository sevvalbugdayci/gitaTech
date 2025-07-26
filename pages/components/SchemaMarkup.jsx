import Head from 'next/head';

const SchemaMarkup = ({ type = 'organization' }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GitaTech",
    "url": "https://gitatech.com",
    "logo": "https://gitatech.com/logo.svg",
    "description": "Modern teknoloji çözümleri ile işinizi dijital dünyada büyütün. Profesyonel yazılım geliştirme, web tasarım ve dijital dönüşüm hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-212-XXX-XX-XX",
      "contactType": "customer service",
      "email": "info@gitatech.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/gitatech",
      "https://twitter.com/gitatech",
      "https://www.facebook.com/gitatech"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Turkey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Teknoloji Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Tasarım",
            "description": "Modern, responsive ve SEO uyumlu web siteleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yazılım Geliştirme",
            "description": "Özel yazılım çözümleri ve sistem entegrasyonu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobil Uygulama",
            "description": "iOS ve Android mobil uygulamalar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Ticaret Çözümleri",
            "description": "Online satış platformları ve e-ticaret sistemleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dijital Pazarlama",
            "description": "SEO, SEM ve sosyal medya yönetimi"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GitaTech",
    "url": "https://gitatech.com",
    "description": "Modern teknoloji çözümleri ile işinizi dijital dünyada büyütün",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gitatech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://gitatech.com"
      }
    ]
  };

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return organizationSchema;
      case 'website':
        return websiteSchema;
      case 'breadcrumb':
        return breadcrumbSchema;
      default:
        return organizationSchema;
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSchema()),
        }}
      />
    </Head>
  );
};

export default SchemaMarkup; 