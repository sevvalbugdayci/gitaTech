import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SchemaMarkup from "./components/SchemaMarkup";

export default function Yazilimlar() {
  const [activeSoftware, setActiveSoftware] = useState('passeidon');

  const softwareList = {
    passeidon: {
      title: "Passeidon - Self Servis Şifre Sıfırlama Yazılımı",
      description: "Microsoft Active Directory (AD) ve Office 365 üzerindeki son kullanıcıların şifrelerini unuttuklarında kullandıkları bir self servis şifre sıfırlama portalıdır.",
      features: [
        "Kullanıcı Dostu Arayüz",
        "Güvenli Doğrulama Süreci",
        "SMS ile Kod Gönderimi",
        "Esnek Kontrol Parametreleri"
      ],
      advantages: [
        "Zaman Tasarrufu",
        "Artan Güvenlik",
        "Kolay Entegrasyon"
      ],
      content: "Passeidon, Microsoft Active Directory (AD) ve Office 365 üzerindeki son kullanıcıların şifrelerini unuttuklarında kullandıkları bir self servis şifre sıfırlama portalıdır. Bu yazılım, sistem yöneticilerinin yükünü önemli ölçüde azaltarak, kullanıcıların şifre sıfırlama süreçlerini daha bağımsız ve hızlı bir şekilde gerçekleştirmelerine olanak tanır."
    },
    zabbix: {
      title: "Zabbix/Grafana - İzleme ve Görselleştirme Çözümleri",
      description: "Güçlü bir izleme ve alarm yönetimi aracı olan Zabbix ile görselleştirme platformu Grafana'nın entegrasyonu.",
      features: [
        "Gerçek Zamanlı İzleme",
        "Alarm Yönetimi",
        "Genişletilebilirlik",
        "Çeşitli Veri Kaynakları"
      ],
      advantages: [
        "Kapsamlı İzleme",
        "Özelleştirilebilir Panolar",
        "Gerçek Zamanlı Veri Güncellemeleri"
      ],
      content: "Günümüzde işletmeler, IT altyapılarının performansını ve sağlığını izlemek için çeşitli araçlar kullanmaktadır. Zabbix ve Grafana, bu alanda öne çıkan iki önemli araçtır. Zabbix, güçlü bir izleme ve alarm yönetimi aracı iken, Grafana ise görselleştirme ve veri analizi için popüler bir platformdur."
    },
    netbox: {
      title: "Netbox - Veri Merkezi Altyapı Yönetimi",
      description: "Veri merkezi altyapısını yönetmek ve izlemek için tasarlanmış açık kaynaklı bir yazılım platformudur.",
      features: [
        "Modüler Yapı",
        "IP Adresi Yönetimi",
        "Veri Merkezi Yönetimi",
        "Genişletilebilirlik"
      ],
      advantages: [
        "Özelleştirilmiş Çözümler",
        "Gelişmiş İzleme",
        "Kullanıcı Dostu Arayüz"
      ],
      content: "NetBox, veri merkezi altyapısını yönetmek ve izlemek için tasarlanmış açık kaynaklı bir yazılım platformudur. Ağ mimarisi, IP adresleri, cihaz yönetimi gibi alanlarda kapsamlı bir çözüm sunan NetBox, kullanıcılarına işletmeye özgü çözümler geliştirme imkanı tanır."
    },
    proxmox: {
      title: "Proxmox - Alternatif Sanallaştırma Çözümü",
      description: "Sektörde hızla büyüyen, düşük lisans maliyetleri ve güçlü özellikleri ile dikkat çeken sanallaştırma çözümü.",
      features: [
        "Düşük Lisans Maliyetleri",
        "Veeam Entegrasyonu",
        "Kapsamlı Özellikler",
        "Yüksek Erişilebilirlik"
      ],
      advantages: [
        "Bütçe Dostu",
        "Güçlü Yedekleme",
        "Esnek Yönetim"
      ],
      content: "Alternatif Sanallaştırma Çözümü olarak sektörde hızla büyüyen çözümdür. Özellikle Broadcom'un VMware'i satın almasının ardından, VMware'in lisans maliyetlerinin yükselmesi, lisans tiplerinin belirsizliği, son kullanıcıya zorunlu tutulan ekstra ama çoğu işletmenin kullanmayacağı özellikler, birçok işletmeyi alternatif sanallaştırma çözümleri aramaya yönlendirdi."
    },
    ovirt: {
      title: "oVirt - Açık Kaynaklı Sanallaştırma Yönetimi",
      description: "Red Hat tarafından geliştirilmiş açık kaynaklı bir sanallaştırma yönetim platformudur.",
      features: [
        "Web Tabanlı Arayüz",
        "Yüksek Erişilebilirlik",
        "Gelişmiş Ağ Yönetimi",
        "Kapsamlı API Desteği"
      ],
      advantages: [
        "Büyük Veri Merkezleri",
        "Bulut Ortamları",
        "Ölçeklenebilir Yapı"
      ],
      content: "oVirt, açık kaynaklı bir sanallaştırma yönetim platformudur. Red Hat tarafından geliştirilmiş olan bu yazılım, sanal makinelerin yönetimi, izlenmesi ve ölçeklenmesi için kapsamlı bir çözüm sunmaktadır. Büyük veri merkezleri ve bulut ortamları için ideal bir seçenek olan oVirt, güçlü bir kullanıcı arayüzü ve esnek özellikleri ile dikkat çekmektedir."
    },
    olvm: {
      title: "OLVM - Oracle Linux Virtualization Manager",
      description: "Oracle'ın sanallaştırma platformu ve KVM teknolojisini kullanarak sanal makinelerin yönetimini sağlamaktadır.",
      features: [
        "KVM Entegrasyonu",
        "Gelişmiş Güvenlik",
        "Yüksek Performans",
        "Kapsamlı Yönetim Araçları"
      ],
      advantages: [
        "Kurumsal Veri Merkezleri",
        "Otomasyon ve Yönetim",
        "Oracle Desteği"
      ],
      content: "Oracle Linux Virtualization Manager, Oracle'ın sanallaştırma platformudur ve KVM (Kernel-based Virtual Machine) teknolojisini kullanarak sanal makinelerin yönetimini sağlamaktadır. Bu yazılım, yüksek performans ve güvenilirlik sunarak, işletmelerin sanallaştırma altyapılarını optimize etmelerine yardımcı olmaktadır."
    },
    prometheus: {
      title: "Prometheus - Modern İzleme ve Uyarı Sistemi",
      description: "Açık kaynaklı bir izleme ve uyarı sistemi, özellikle bulut ortamlarında ve mikroservis mimarilerinde tercih edilir.",
      features: [
        "Zaman Serisi Verisi",
        "Esnek Veri Modeli",
        "Kendi Sorgu Dili (PromQL)",
        "Otomatik Keşif"
      ],
      advantages: [
        "Mikroservis İzleme",
        "Bulut Ortamları",
        "Veri Merkezleri"
      ],
      content: "Prometheus, açık kaynaklı bir izleme ve uyarı sistemidir. Özellikle bulut ortamlarında ve mikroservis mimarilerinde sıkça tercih edilen bu yazılım, sistemlerin ve uygulamaların performansını izlemek için güçlü bir araçtır. Prometheus, zaman serisi verilerini toplama ve bu verileri analiz etme yetenekleri ile öne çıkar."
    },
    qr: {
      title: "QR Kod Yoklama Yazılımı",
      description: "Üniversitelerin ders yoklama süreçlerini modernize etmek amacıyla geliştirilmiş yenilikçi çözüm.",
      features: [
        "Kolay Kullanım",
        "Hızlı Yoklama",
        "Güvenilir Sistem",
        "Modern Arayüz"
      ],
      advantages: [
        "Zaman Tasarrufu",
        "Kesin Sonuçlar",
        "Verimlilik Artışı"
      ],
      content: "Gita Teknoloji olarak, üniversitelerin ders yoklama süreçlerini modernize etmek amacıyla geliştirdiğimiz QR Kodlu Yoklama Sistemi, eğitim kurumlarına yenilikçi bir çözüm sunmaktadır. Bu sistem, öğrenci katılımını kolay ve hızlı bir şekilde izlemeyi hedeflerken, aynı zamanda eğitim süreçlerini daha verimli hale getirmeyi amaçlamaktadır."
    }
  };

  const softwareItems = [
    { id: 'passeidon', name: 'Passeidon', icon: '🔐' },
    { id: 'zabbix', name: 'Zabbix/Grafana', icon: '📊' },
    { id: 'netbox', name: 'Netbox', icon: '🏢' },
    { id: 'proxmox', name: 'Proxmox', icon: '🖥️' },
    { id: 'ovirt', name: 'oVirt', icon: '☁️' },
    { id: 'olvm', name: 'OLVM', icon: '⚡' },
    { id: 'prometheus', name: 'Prometheus', icon: '📈' },
    { id: 'qr', name: 'QR Yoklama', icon: '📱' }
  ];

  return (
    <>
      <NextSeo
        title="Yazılımlarımız - Gita Teknoloji"
        description="Passeidon, Zabbix/Grafana, Netbox, Proxmox, oVirt, OLVM, Prometheus ve QR Kod Yoklama yazılımları. Kendi ekibimizin geliştirdiği özgün yazılım çözümleri."
        canonical="https://gitatech.com/yazilimlar"
        openGraph={{
          title: 'Gita Teknoloji Yazılımları - Özgün Yazılım Çözümleri',
          description: 'Self servis şifre sıfırlama, izleme sistemleri, sanallaştırma ve yoklama yazılımları',
          url: 'https://gitatech.com/yazilimlar',
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'passeidon, zabbix grafana, netbox, proxmox, ovirt, olvm, prometheus, qr kod yoklama, self servis şifre sıfırlama, gita teknoloji yazılımları',
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
                  Yazılımlarımız
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Kendi ekibimizin geliştirdiği özgün yazılım çözümleri ve entegrasyon hizmetleri
                </p>
              </div>
            </div>
          </section>

          {/* Software Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {softwareItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSoftware(item.id)}
                    className={`p-6 rounded-lg text-center transition-all duration-300 ${
                      activeSoftware === item.id
                        ? 'bg-primary text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold">{item.name}</h3>
                  </button>
                ))}
              </div>

              {/* Software Details */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  {softwareList[activeSoftware].title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {softwareList[activeSoftware].description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Temel Özellikler</h3>
                    <ul className="space-y-2">
                      {softwareList[activeSoftware].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-secondary">Avantajları</h3>
                    <ul className="space-y-2">
                      {softwareList[activeSoftware].advantages.map((advantage, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-800">Detaylı Bilgi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {softwareList[activeSoftware].content}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Yazılım Çözümlerimiz Hakkında Detaylı Bilgi
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Yazılımlarımız hakkında detaylı bilgi almak ve demo talep etmek için 
                uzman ekibimizle iletişime geçin.
              </p>
              <a
                href="/iletisim"
                className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Demo Talep Et
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
} 