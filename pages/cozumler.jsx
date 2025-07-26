import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SchemaMarkup from "./components/SchemaMarkup";

export default function Cozumler() {
  const [activeTab, setActiveTab] = useState('network');

  const solutions = {
    network: {
      title: "Kurumsal Ağ Çözümleri",
      items: [
        {
          title: "Kablolu ve Kablosuz Ağ Çözümleri",
          description: "Gita Teknoloji, kurumlara özel kablolu ve kablosuz ağ altyapıları ile yüksek performans ve güvenilirlik sunmaktadır. Alanında uzman ekibiyle birlikte keşif, projelendirme ve kurulum süreçlerini titizlikle yürütmektedir. Kurulum sonrası kapsamlı teknik destek ile ağın sürekliliği güvence altına alınmaktadır."
        },
        {
          title: "SD-WAN Çözümleri",
          description: "SD-WAN çözümleri ile şubeler ve merkez arasında güvenli ve verimli bağlantılar sağlanmaktadır. Teknik yeterlilik sayesinde gereksinimler analiz edilmekte, keşif ve planlama aşamasından uygulamaya kadar tüm süreç profesyonelce yönetilmektedir. Kurulum ve entegrasyon sonrası sürekli destek ile ağ trafiğinin kesintisiz çalışması temin edilmektedir."
        },
        {
          title: "Yük Dengeleme ve WAF Çözümleri",
          description: "Yük dengeleme ve Web Application Firewall (WAF) çözümleri için yerinde keşif çalışması yapılmakta ve ihtiyaca özel projeler geliştirilmektedir. Gita Teknoloji'nin deneyimli ekibiyle sistemlere uygun mimari kurulmakta ve canlıya alınmaktadır. Uygulama sonrası sunulan teknik destek ile hem güvenlik hem performans garanti altına alınmaktadır."
        },
        {
          title: "Ağ Güvenliği Çözümleri",
          description: "Gita Teknoloji, kurumların ağ güvenliğini sağlamak amacıyla ihtiyacı yerinde analiz etmekte ve güncel teknolojilerle kapsamlı çözümler sunmaktadır. Güvenlik altyapısının kurulumu ve entegrasyonu uzman ekip tarafından gerçekleştirilmektedir. Ayrıca, proaktif bakım ve 7/24 teknik destek ile ağ güvenliği sürekli olarak korunmaktadır."
        }
      ]
    },
    system: {
      title: "Kurumsal Sistem Çözümleri",
      items: [
        {
          title: "Sunucu ve Veri Depolama",
          description: "Günümüz dijital dünyasında, sunucular ve veri depolama sistemleri, işletmelerin bilgi yönetimini ve iş süreçlerini sürdürebilmesi için kritik bir öneme sahiptir. Gita Teknoloji olarak mevcut iş yüklerinizin ve depolama alanı ihtiyacınızı öngörüsel olarak analiz ederek, uygulama katmanı düzeyinde ihtiyaç olacak donanım ve yazılımların projelendirmesi ve kurulum/bakım hizmetlerini Uzman Kadromuz ile sunmaktayız."
        },
        {
          title: "Sanallaştırma ve HiperBütünleşik",
          description: "Gita Teknoloji olarak, sanallaştırma ve hiper bütünleşik çözümler konusunda uzman kadromuzla, işletmelerin ihtiyaçlarına uygun projeler geliştiriyoruz. Mevcut iş yüklerinizi analiz ederek, en uygun donanım ve yazılımları belirleyip, kurulum ve bakım hizmetlerini sunmaktayız."
        },
        {
          title: "Masa Üstü Sanallaştırma Çözümleri",
          description: "Masa üstü sanallaştırma, birden fazla sanal masaüstü ortamının tek bir fiziksel cihaz üzerinde çalışmasını sağlayan bir teknolojidir. Gita Teknoloji'nin uzmanlığı ile, bu teknolojiyi etkili bir şekilde kullanarak, işletmenizin verimliliğini artırmayı hedefliyoruz."
        },
        {
          title: "Veri Yedekleme Çözümleri",
          description: "Veri yedekleme, işletmelerin kritik verilerini koruma altına almak için kullandıkları önemli bir süreçtir. Gita Teknoloji'nin uzmanlığı ile, etkili yedekleme stratejileri geliştirerek, işletmenizin geleceğe güvenle adım atmasını sağlıyoruz."
        },
        {
          title: "İş Sürekliliği ve DR Çözümleri",
          description: "İş sürekliliği ve felaket kurtarma (Disaster Recovery - DR) çözümleri, modern işletmelerin sürdürülebilirliği ve veri güvenliği için kritik öneme sahiptir. Gita Teknoloji olarak, iş sürekliliği ve DR çözümleri sunarak, işletmelerin kesintisiz operasyonlar yürütmesini sağlamaktayız."
        },
        {
          title: "Linux Sistem Çözümleri",
          description: "Linux, açık kaynaklı bir işletim sistemi olarak, dünya genelinde sunucu ve masaüstü bilgisayarlar için popüler bir tercih haline gelmiştir. Gita Teknoloji olarak, Linux sistem çözümleri sunarak, işletmelerin verimliliğini artırmayı amaçlıyoruz."
        }
      ]
    },
    devops: {
      title: "DevOps ve Mikroservis Mimari Çözümleri",
      items: [
        {
          title: "DevOps Nedir?",
          description: "DevOps, yazılım geliştirme (Development) ve BT operasyonları (Operations) arasındaki işbirliğini artırmayı hedefleyen bir kültür ve uygulama setidir. DevOps'un temel amacı, yazılım geliştirme süreçlerini hızlandırmak, daha sık ve güvenilir güncellemeler sağlamak ve müşteri memnuniyetini artırmaktır."
        },
        {
          title: "Mikroservis Mimarisi",
          description: "Mikroservis mimarisi, bir uygulamanın bağımsız olarak dağıtılabilen ve yönetilebilen küçük, modüler servisler haline getirilmesidir. Her bir mikroservis, belirli bir işlevi yerine getirir ve diğer mikroservislerle API aracılığıyla etkileşimde bulunur."
        },
        {
          title: "DevOps ve Mikroservislerin Birlikte Kullanımı",
          description: "DevOps ve mikroservis mimarisi, birlikte kullanıldığında, yazılım geliştirme süreçlerini daha da optimize eder. Gita Teknoloji olarak, DevOps ve mikroservis mimarisi çözümleri sunarak, işletmelerin yazılım geliştirme süreçlerini optimize etmeyi hedefliyoruz."
        }
      ]
    },
    security: {
      title: "Siber Güvenlik Çözümleri",
      items: [
        {
          title: "Privileged Access Management (PAM) Çözümleri",
          description: "Günümüz dijital dünyasında, kuruluşların bilgi güvenliğini sağlamada en kritik unsurlardan biri, ayrıcalıklı erişim yönetimidir (PAM). PAM çözümleri, sistem yöneticileri ve diğer yetkili kullanıcıların kritik verilere ve sistemlere erişimini kontrol altına alarak, veri ihlali riskini minimize eder."
        },
        {
          title: "Mobil Device Managing (MDM) Çözümleri",
          description: "Günümüzde mobil cihazlar, iş süreçlerinin ayrılmaz bir parçası haline gelmiştir. Mobil Device Management (MDM) çözümleri, kuruluşların mobil cihazlarını güvenli bir şekilde yönetmelerine ve verimliliklerini artırmalarına yardımcı olur."
        },
        {
          title: "Data Loss Prevention (DLP) Çözümleri",
          description: "Veri güvenliği, günümüz dijital çağında en önemli öncelikler arasında yer almaktadır. Data Loss Prevention (DLP) çözümleri, kuruluşların hassas verilerini korumak ve veri kaybını önlemek için geliştirilmiştir."
        },
        {
          title: "Antivirüs Çözümleri ve EDR/XDR",
          description: "Siber tehditler, günümüz iş dünyasında giderek daha karmaşık hale gelmekte ve bu tehditlere karşı etkili bir koruma sağlamak her zamankinden daha önemli olmaktadır. Antivirüs çözümleri, bu tehditlere karşı temel bir savunma katmanı sunarken, EDR ve XDR gibi daha gelişmiş güvenlik çözümleri, kapsamlı bir güvenlik stratejisinin parçası olarak devreye girmektedir."
        }
      ]
    },
    physical: {
      title: "Zayıf Akım ve Yapısal Kablolama",
      items: [
        {
          title: "IP CCTV ve Video Analiz Sistemleri",
          description: "İşletmenizi Elektronik Güvenlik kapsamında olmazsa olmazı olan IP CCTV Sistemlerinin, Projelendirilmesi, doğru nokta ve ihtiyaca göre doğru özellikte kullanılmalıdır. Fayda –maliyet dengesinin optimumda tutarak işletmelerin ihtiyaçları ve yasal regülasyonlara göre sistem tasarımı uzman kadromuz tarafından sunulmaktadır."
        },
        {
          title: "Kartlı Geçiş Sistemleri",
          description: "Elektronik güvenliğin en önemli çözümlerinden olan KGS, yetkisiz ve izinsiz girişleri engeller, işletmelerin ve personel güvenliğini maksimum seviyede tutar, ziyaretçilerinin ise sadece belirlenen alanlara geçişini mümkün kılar."
        },
        {
          title: "Yangın İhbar Sistemleri",
          description: "Yangın İhbar sistemleri günümüzde her işletme için en önemli ve önleyici güvenlik sistemidir. Gita olarak uzman ekibimiz ile projelendirme, uygulama/devreye alma ve bakım hizmetlerini sunmaktayız."
        },
        {
          title: "Acil Anons/Müzik Yayın Sistemleri",
          description: "Yangın İhbar Sisteminin bir parçası olan Acil Anons sistemi, olası alarm durumlarında bütün bina,tesis vb. için tahliye ve uyarı yapmaktadır. IP Altyapı ile uçtan uca keşif, projelendirme ve kurulum hizmetlerini Gita olarak sağlamaktayız."
        }
      ]
    }
  };

  const tabs = [
    { id: 'network', name: 'Ağ Çözümleri', icon: '🌐' },
    { id: 'system', name: 'Sistem Çözümleri', icon: '🖥️' },
    { id: 'devops', name: 'DevOps & Mikroservis', icon: '⚙️' },
    { id: 'security', name: 'Siber Güvenlik', icon: '🔒' },
    { id: 'physical', name: 'Fiziksel Güvenlik', icon: '🏢' }
  ];

  return (
    <>
      <NextSeo
        title="Çözümlerimiz - Gita Teknoloji"
        description="Kurumsal ağ çözümleri, sistem çözümleri, DevOps, siber güvenlik ve fiziksel güvenlik çözümleri. 20 yıllık deneyimle kurumların teknoloji ihtiyaçlarını karşılıyoruz."
        canonical="https://gitatech.com/cozumler"
        openGraph={{
          title: 'Gita Teknoloji Çözümleri - Kurumsal Teknoloji Çözümleri',
          description: 'Ağ, sistem, güvenlik ve DevOps çözümleri ile kurumların dijital dönüşümüne destek',
          url: 'https://gitatech.com/cozumler',
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'kurumsal ağ çözümleri, sistem çözümleri, devops, siber güvenlik, fiziksel güvenlik, SD-WAN, sanallaştırma, veri yedekleme, gita teknoloji çözümleri',
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
                  Çözümlerimiz
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  20 yıllık deneyimle kurumların teknoloji ihtiyaçlarını karşılayan kapsamlı çözümler
                </p>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
                  {solutions[activeTab].title}
                </h2>
                
                <div className="space-y-8">
                  {solutions[activeTab].items.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Çözümlerimiz Hakkında Detaylı Bilgi
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Kurumunuzun ihtiyaçlarına özel çözümler için uzman ekibimizle görüşün. 
                Size en uygun teknoloji çözümlerini sunalım.
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