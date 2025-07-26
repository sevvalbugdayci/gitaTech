import { NextSeo } from 'next-seo';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Hizmetler() {
  return (
    <>
      <NextSeo
        title="Hizmetlerimiz"
        description="GitaTech olarak sunduğumuz profesyonel hizmetler: Web tasarım, yazılım geliştirme, mobil uygulama, e-ticaret çözümleri ve dijital pazarlama hizmetleri."
        canonical="https://gitatech.com/hizmetler"
        openGraph={{
          title: 'GitaTech Hizmetleri - Profesyonel Teknoloji Çözümleri',
          description: 'Web tasarım, yazılım geliştirme, mobil uygulama ve dijital pazarlama hizmetleri',
          url: 'https://gitatech.com/hizmetler',
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'web tasarım, yazılım geliştirme, mobil uygulama, e-ticaret, dijital pazarlama, istanbul yazılım şirketi, gitatech hizmetleri',
          },
        ]}
      />
      
      <div className="font-poppins">
        <Header />
        
        <main className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative bg-cover bg-center bg-no-repeat py-40" style={{backgroundImage: 'url(/3.png)'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-800/85"></div>
            <div className="relative z-10 container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Hizmetlerimiz
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Modern teknoloji çözümleri ile işinizi dijital dünyada büyütün
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Web Tasarım */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Web Tasarım</h3>
                  <p className="text-gray-600 mb-4">
                    Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. SEO uyumlu ve hızlı yüklenen siteler.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Responsive Tasarım</li>
                    <li>• SEO Optimizasyonu</li>
                    <li>• Hızlı Yükleme</li>
                    <li>• Modern UI/UX</li>
                  </ul>
                </div>

                {/* Yazılım Geliştirme */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Yazılım Geliştirme</h3>
                  <p className="text-gray-600 mb-4">
                    Özel yazılım çözümleri geliştiriyoruz. İş süreçlerinizi otomatikleştiren ve verimliliği artıran sistemler.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Özel Yazılım</li>
                    <li>• API Geliştirme</li>
                    <li>• Veritabanı Tasarımı</li>
                    <li>• Sistem Entegrasyonu</li>
                  </ul>
                </div>

                {/* Mobil Uygulama */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mobil Uygulama</h3>
                  <p className="text-gray-600 mb-4">
                    iOS ve Android için native mobil uygulamalar geliştiriyoruz. Kullanıcı deneyimi odaklı tasarımlar.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• iOS Uygulaması</li>
                    <li>• Android Uygulaması</li>
                    <li>• Cross-Platform</li>
                    <li>• App Store Optimizasyonu</li>
                  </ul>
                </div>

                {/* E-Ticaret */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">E-Ticaret Çözümleri</h3>
                  <p className="text-gray-600 mb-4">
                    Online satış yapabileceğiniz e-ticaret siteleri kuruyoruz. Güvenli ödeme sistemleri ve stok yönetimi.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Online Mağaza</li>
                    <li>• Ödeme Sistemi</li>
                    <li>• Stok Yönetimi</li>
                    <li>• Müşteri Yönetimi</li>
                  </ul>
                </div>

                {/* Dijital Pazarlama */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Dijital Pazarlama</h3>
                  <p className="text-gray-600 mb-4">
                    SEO, SEM, sosyal medya yönetimi ve içerik pazarlama hizmetleri ile markanızı büyütün.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• SEO Optimizasyonu</li>
                    <li>• Google Ads</li>
                    <li>• Sosyal Medya</li>
                    <li>• İçerik Pazarlama</li>
                  </ul>
                </div>

                {/* Danışmanlık */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Teknoloji Danışmanlığı</h3>
                  <p className="text-gray-600 mb-4">
                    Dijital dönüşüm sürecinizde size rehberlik ediyoruz. En uygun teknoloji çözümlerini belirliyoruz.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Dijital Dönüşüm</li>
                    <li>• Teknoloji Seçimi</li>
                    <li>• Proje Yönetimi</li>
                    <li>• Eğitim & Destek</li>
                  </ul>
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