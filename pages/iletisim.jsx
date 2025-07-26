import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SchemaMarkup from "./components/SchemaMarkup";

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      name: "Kadıköy Ofis",
      address: "Merdivenköy Mah. Nur Sk. A Blok No:1/1 İç Kapı No:115 Kadıköy/İstanbul",
      email: "info@gitateknoloji.com",
      email2: "satis@gitateknoloji.com",
      phone: null
    },
    {
      name: "Ataşehir Ofis (Deluxia Palace)",
      address: "Barbaros Mah. Mor Sümbül Sk. No:5/A K:11 D:308 Ataşehir/İstanbul PK:34746",
      email: "info@gitateknoloji.com",
      email2: "satis@gitateknoloji.com",
      phone: "0216 514 74 48"
    }
  ];

  return (
    <>
      <NextSeo
        title="İletişim - Gita Teknoloji"
        description="Kadıköy ve Ataşehir ofislerimizle iletişime geçin. Gita Teknoloji'ye ulaşmak için telefon, e-posta veya iletişim formunu kullanabilirsiniz."
        canonical="https://gitatech.com/iletisim"
        openGraph={{
          title: 'Gita Teknoloji İletişim - Kadıköy ve Ataşehir Ofisleri',
          description: 'İstanbul\'da iki ofisimizle hizmetinizdeyiz. Teknoloji çözümleri için bizimle iletişime geçin.',
          url: 'https://gitatech.com/iletisim',
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'gita teknoloji iletişim, kadıköy ofis, ataşehir ofis, istanbul teknoloji şirketi, gita teknoloji telefon, gita teknoloji email',
          },
        ]}
      />
      <SchemaMarkup type="website" />
      
      <div className="font-poppins">
        <Header />
        
        <main className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative bg-cover bg-center bg-no-repeat py-40" style={{backgroundImage: 'url(/3.png)'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-800/85"></div>
            <div className="relative z-10 container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  İletişim
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Teknoloji çözümleriniz için bizimle iletişime geçin
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Bize Ulaşın</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Şirket
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mesajınız *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Projeniz veya ihtiyaçlarınız hakkında bilgi verin..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                    >
                      Mesaj Gönder
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  {/* Offices */}
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{office.name}</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <p className="text-gray-600 leading-relaxed">{office.address}</p>
                          </div>
                        </div>
                        
                        {office.phone && (
                          <div className="flex items-center">
                            <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                              {office.phone}
                            </a>
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-primary transition-colors block">
                              {office.email}
                            </a>
                            <a href={`mailto:${office.email2}`} className="text-gray-600 hover:text-primary transition-colors block">
                              {office.email2}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Working Hours */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Çalışma Saatleri</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pazartesi - Cuma:</span>
                        <span className="font-semibold">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cumartesi:</span>
                        <span className="font-semibold">09:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pazar:</span>
                        <span className="font-semibold">Kapalı</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map Placeholder */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Ofislerimiz</h2>
                <p className="text-gray-600">
                  İstanbul'un iki farklı lokasyonunda hizmetinizdeyiz
                </p>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                  <p className="text-gray-500">Harita entegrasyonu buraya eklenecek</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
} 