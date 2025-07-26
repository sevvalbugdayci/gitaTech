import React, { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState(new Set());

  const toggleSection = (index) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(index)) {
      newOpenSections.delete(index);
    } else {
      newOpenSections.add(index);
    }
    setOpenSections(newOpenSections);
  };

  const footerSections = [
    {
      title: "İletişim",
      items: [
        { label: "Email", value: "info@gitateknoloji.com", href: "mailto:info@gitateknoloji.com" },
        { label: "Telefon", value: "+90 (212) XXX XX XX", href: "tel:+90212XXXXXXX" }
      ]
    },
    {
      title: "Adres",
      items: [
        { label: "Meridvenköy mah. Nur Sk. A Blok" },
        { label: "Kapı No:1 /1 Daire No:115" },
        { label: "Kadıköy/İstanbul" },
        { label: "Business33 Ofis İstanbul" }
      ]
    },
    {
      title: "Hizmetlerimiz",
      items: [
        { label: "Yazılım Geliştirme", href: "/hizmetler" },
        { label: "Yapay Zeka", href: "/hizmetler" },
        { label: "Siber Güvenlik", href: "/hizmetler" },
        { label: "Bulut Hizmetleri", href: "/hizmetler" },
        { label: "Yönetilen Hizmetler", href: "/hizmetler" }
      ]
    },
    {
      title: "Site Haritası",
      items: [
        { label: "Ana Sayfa", href: "/" },
        { label: "Hizmetler", href: "/hizmetler" },
        { label: "Çözümler", href: "/cozumler" },
        { label: "Yazılımlar", href: "/yazilimlar" },
        { label: "Çözüm Ortakları", href: "/cozum-ortaklari" },
        { label: "Blog", href: "/blog" },
        { label: "SSS", href: "/sss" },
        { label: "Hakkımızda", href: "/about" },
        { label: "İletişim", href: "/iletisim" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/gitatech", icon: "💼" },
    { name: "Twitter", href: "https://twitter.com/gitatech", icon: "🐦" },
    { name: "Facebook", href: "https://facebook.com/gitatech", icon: "📘" },
    { name: "Instagram", href: "https://instagram.com/gitatech", icon: "📷" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              {/* Desktop: Always visible header */}
              <h3 className="hidden lg:block text-xl font-bold text-white mb-4 relative">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></div>
              </h3>
              
              {/* Mobile/Tablet: Collapsible header */}
              <button
                onClick={() => toggleSection(index)}
                className="lg:hidden w-full text-left flex justify-between items-center text-xl font-bold text-white mb-4 relative group"
              >
                <span>{section.title}</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg
                      className={`w-4 h-4 text-white transition-transform duration-300 ${
                        openSections.has(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
              </button>
              
              {/* Desktop: Always visible content */}
              <ul className="hidden lg:block space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.href ? (
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-gray-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Mobile/Tablet: Collapsible content */}
              <div 
                className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                  openSections.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-3 pt-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.href ? (
                        <Link 
                          href={item.href}
                          className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-gray-300 flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter & Social */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Bültenimize Katılın</h4>
              <p className="text-gray-300 mb-4">
                Teknoloji trendleri ve güncellemeler için bültenimize abone olun.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-400"
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Abone Ol
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-bold mb-4 text-white">Bizi Takip Edin</h4>
              <div className="flex justify-center lg:justify-end gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} Gita Teknoloji. Tüm Hakları Saklıdır.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <Link href="/gizlilik" className="hover:text-primary transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="hover:text-primary transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/cerez-politikasi" className="hover:text-primary transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
        title="Yukarı Çık"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer