import { NextSeo } from 'next-seo';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SchemaMarkup from "./components/SchemaMarkup";

export default function About() {
  return (
    <>
      <NextSeo
        title="Hakkımızda - Gita Teknoloji"
        description="20 yılı aşkın sektör deneyimine sahip mühendislerin kurduğu Gita Teknoloji. Bilgi Teknolojileri, yazılım çözümleri ve dijital dönüşüm hizmetleri ile kurumların güvenilir çözüm ortağı."
        canonical="https://gitatech.com/about"
        openGraph={{
          title: 'Gita Teknoloji Hakkında - 20+ Yıl Deneyim',
          description: 'Bilgi Teknolojileri ve yazılım çözümleri alanında uzman, 20 yılı aşkın deneyime sahip teknoloji şirketi',
          url: 'https://gitatech.com/about',
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'gita teknoloji, bilgi teknolojileri, yazılım çözümleri, dijital dönüşüm, BT altyapı, siber güvenlik, istanbul teknoloji şirketi, 20 yıl deneyim',
          },
        ]}
      />
      <SchemaMarkup type="organization" />
      
      <div className="font-poppins">
        <Header />
        
        <main className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative bg-cover bg-center bg-no-repeat py-40" style={{backgroundImage: 'url(/3.png)'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-800/85"></div>
            <div className="relative z-10 container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Hakkımızda
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  20 yılı aşkın sektör deneyimi ile teknoloji çözümlerinde güvenilir ortağınız
                </p>
              </div>
            </div>
          </section>

          {/* About Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Gita Teknoloji</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Gita Teknoloji, 20 yılı aşkın sektör deneyimine sahip mühendislerin bir araya gelerek kurduğu bir teknoloji şirketidir. Kurulduğu günden bu yana, çok sayıda kurumsal müşteriye çeşitli teknoloji çözümleri sunan firmamız; özellikle Bilgi Teknolojileri ve Yazılım Çözümleri alanlarında uzman ve yaratıcı hizmetler vermektedir.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Müşterilerimizin dijital dönüşüm yolculuğunda güvenilir bir çözüm ortağı olmayı hedefliyor; Ağ ve Sistem Altyapısı, BT güvenliği gibi Bilgi Teknolojileri hizmetlerimizle kurumlara yenilikçi ve fayda-maliyet dengesini koruyan çözümler sunuyoruz. Aynı zamanda kendi ekibimizin geliştirdiği özgün yazılımlar sayesinde, self servis parola sıfırlama, QR kodlu yoklama ve network monitoring gibi pek çok ileri düzey uygulamayı müşterilerimizin hizmetine sunuyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Her adımda güncel teknolojileri yakından takip ederek, projelendirme, kurulum ve bakım süreçlerini titizlikle yönetiyor, sürdürülebilir ve katma değerli çözümler üretmek için çalışıyoruz.
                </p>
              </div>

              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Vizyonumuz</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Türkiye'de ve bölgede; yenilikçi bilgi teknolojileri ve özgün yazılım çözümleriyle kurumların dijital dönüşümüne yön veren, güvenilir ve öncü bir teknoloji şirketi olmaktır.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Sektörün ve özellikle Ülkemizin en büyük işletme problemlerinden biri olan yeterli sayıda ve yeterli nitelikte BT personeli istihdam edilememesi ve donanım altyapılarına işletmeler tarafından maliyetlerin çok yüksek olması sebebiyle gerekli yatırımların yapılamamasıdır. Bu sorunu GİTA olarak inovatif ve riski minimize ederek altyapılarını daha kolay yönetilebilir ve güvenli hale getirmek en büyük hedeflerimiz arasındadır.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Misyonumuz</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Müşterilerimizin iş süreçlerine değer katan, ihtiyaçlarına özel, güvenli ve sürdürülebilir bilgi teknolojileri altyapısı ile yazılım çözümleri geliştirmek; uzman ekibimiz ve mühendislik birikimimizle teknolojiyi herkes için ulaşılabilir ve verimli kılmak.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Değerlerimiz</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Güvenilirlik</h4>
                    <p className="text-gray-600 text-sm">20 yılı aşkın deneyimimizle müşterilerimize güvenilir çözümler sunuyoruz</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">İnovasyon</h4>
                    <p className="text-gray-600 text-sm">Güncel teknolojileri takip ederek yenilikçi çözümler geliştiriyoruz</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Müşteri Odaklılık</h4>
                    <p className="text-gray-600 text-sm">Müşterilerimizin ihtiyaçlarına özel çözümler geliştiriyoruz</p>
                  </div>
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
