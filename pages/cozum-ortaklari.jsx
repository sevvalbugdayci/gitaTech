import { NextSeo } from 'next-seo';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SchemaMarkup from "./components/SchemaMarkup";

export default function CozumOrtaklari() {
  const partners = [
    { name: 'HPE', category: 'Hardware' },
    { name: 'Dell', category: 'Hardware' },
    { name: 'IBM', category: 'Hardware' },
    { name: 'Lenovo', category: 'Hardware' },
    { name: 'Supermicro', category: 'Hardware' },
    { name: 'Aruba', category: 'Network' },
    { name: 'Checkpoint', category: 'Security' },
    { name: 'Fortinet', category: 'Security' },
    { name: 'Citrix', category: 'Virtualization' },
    { name: 'Veeam', category: 'Backup' },
    { name: 'VMware', category: 'Virtualization' },
    { name: 'Proxmox', category: 'Virtualization' },
    { name: 'oVirt', category: 'Virtualization' },
    { name: 'Xcitium', category: 'Security' },
    { name: 'Hanwha', category: 'Security' },
    { name: 'Bosch Security', category: 'Security' },
    { name: 'Linux Foundation', category: 'Open Source' }
  ];

  const categories = {
    Hardware: '🖥️',
    Network: '🌐',
    Security: '🔒',
    Virtualization: '☁️',
    Backup: '💾',
    'Open Source': '🐧'
  };

  const groupedPartners = partners.reduce((acc, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = [];
    }
    acc[partner.category].push(partner);
    return acc;
  }, {});

  return (
    <>
      <NextSeo
        title="Çözüm Ortaklarımız - Gita Teknoloji"
        description="HPE, Dell, IBM, VMware, Citrix, Veeam, Fortinet ve daha fazlası. Gita Teknoloji'nin güvenilir çözüm ortakları ile en iyi teknoloji çözümlerini sunuyoruz."
        canonical="https://gitatech.com/cozum-ortaklari"
        openGraph={{
          title: 'Gita Teknoloji Çözüm Ortakları - Güvenilir Teknoloji Ortaklıkları',
          description: 'Dünya çapında tanınmış teknoloji şirketleri ile ortaklıklarımız',
          url: 'https://gitatech.com/cozum-ortaklari',
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'hpe, dell, ibm, vmware, citrix, veeam, fortinet, checkpoint, gita teknoloji ortakları, çözüm ortakları',
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
                  Çözüm Ortaklarımız
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Dünya çapında tanınmış teknoloji şirketleri ile güçlü ortaklıklarımız
                </p>
              </div>
            </div>
          </section>

          {/* Partners Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Güvenilir Teknoloji Ortaklarımız
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  20 yılı aşkın deneyimimiz boyunca, sektörün önde gelen teknoloji şirketleri ile 
                  güçlü ortaklıklar kurarak müşterilerimize en iyi çözümleri sunuyoruz.
                </p>
              </div>

              {/* Partners by Category */}
              <div className="space-y-12">
                {Object.entries(groupedPartners).map(([category, categoryPartners]) => (
                  <div key={category} className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <span className="text-3xl mr-3">{categories[category]}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{category}</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {categoryPartners.map((partner, index) => (
                        <div 
                          key={index}
                          className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300"
                        >
                          <div className="text-2xl font-bold text-gray-700 mb-2">
                            {partner.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {category}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Ortaklık Avantajları
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Güçlü ortaklıklarımız sayesinde müşterilerimize sunduğumuz avantajlar
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Güvenilir Çözümler</h3>
                  <p className="text-gray-600">
                    Dünya çapında tanınmış markaların güvenilir ve test edilmiş çözümlerini sunuyoruz
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Teknik Destek</h3>
                  <p className="text-gray-600">
                    Ortaklarımızdan aldığımız teknik destek ile hızlı ve etkili çözümler sağlıyoruz
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Uygun Fiyatlar</h3>
                  <p className="text-gray-600">
                    Ortaklıklarımız sayesinde müşterilerimize uygun fiyatlarla kaliteli çözümler sunuyoruz
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Ortaklarımızla Çözümlerimiz Hakkında Bilgi Alın
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Hangi teknoloji çözümüne ihtiyacınız olduğunu belirtin, 
                size en uygun ortak çözümü önerelim.
              </p>
              <a
                href="/iletisim"
                className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                İletişime Geçin
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
} 