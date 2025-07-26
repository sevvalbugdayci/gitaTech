import { NextSeo } from 'next-seo';
import { useState, useEffect, useRef } from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SchemaMarkup from "./components/SchemaMarkup";

export default function SSS() {
  const [openItems, setOpenItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Staggered animation for FAQ items
          setTimeout(() => {
            setAnimatedItems(Array.from({ length: 12 }, (_, i) => i));
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "Gita Teknoloji hangi hizmetleri sunuyor?",
      answer: "Gita Teknoloji olarak kurumsal ağ çözümleri, sistem çözümleri, DevOps ve mikroservis mimarisi, siber güvenlik çözümleri, fiziksel güvenlik sistemleri, dijital dönüşüm danışmanlığı, hibrid/private cloud hizmetleri, BT altyapı bakım hizmetleri, yazılım geliştirme ve çözüm hizmetleri, yönetilebilir hizmetler sunuyoruz. 20 yılı aşkın deneyimimizle kurumların teknoloji ihtiyaçlarını karşılıyoruz."
    },
    {
      question: "Hangi teknolojileri kullanıyorsunuz?",
      answer: "Modern ve güncel teknolojiler kullanıyoruz: HPE, Dell, IBM, Lenovo, Supermicro donanım çözümleri; Aruba, Checkpoint, Fortinet ağ ve güvenlik çözümleri; VMware, Citrix, Proxmox, oVirt sanallaştırma platformları; Veeam yedekleme çözümleri; Zabbix, Grafana, Netbox, Prometheus izleme sistemleri; Linux Foundation açık kaynak çözümleri ve kendi geliştirdiğimiz Passeidon, QR Kod Yoklama gibi özgün yazılımlar."
    },
    {
      question: "Çözüm ortaklarınız kimler?",
      answer: "Dünya çapında tanınmış teknoloji şirketleri ile güçlü ortaklıklarımız var: HPE, Dell, IBM, Lenovo, Supermicro (Donanım); Aruba, Checkpoint, Fortinet, Xcitium, Hanwha, Bosch Security (Ağ ve Güvenlik); Citrix, Veeam, VMware, Proxmox, oVirt (Sanallaştırma ve Yedekleme); Linux Foundation (Açık Kaynak). Bu ortaklıklar sayesinde müşterilerimize güvenilir, uygun fiyatlı ve teknik destekli çözümler sunuyoruz."
    },
    {
      question: "Kendi geliştirdiğiniz yazılımlar neler?",
      answer: "Kendi ekibimizin geliştirdiği özgün yazılımlarımız: Passeidon (Self Servis Şifre Sıfırlama Yazılımı) - Microsoft AD ve Office 365 entegrasyonu ile kullanıcıların şifrelerini güvenli şekilde sıfırlamalarını sağlar; QR Kod Yoklama Yazılımı - Üniversiteler için geliştirilmiş modern yoklama sistemi; Zabbix/Grafana entegrasyonu, Netbox, Prometheus gibi açık kaynak çözümlerin kurulum ve yapılandırması."
    },
    {
      question: "Ofisleriniz nerede?",
      answer: "İstanbul'da iki ofisimizle hizmetinizdeyiz: Kadıköy Ofis (Merdivenköy Mah. Nur Sk. A Blok No:1/1 İç Kapı No:115 Kadıköy/İstanbul) ve Ataşehir Ofis (Barbaros Mah. Mor Sümbül Sk. No:5/A K:11 D:308 Ataşehir/İstanbul PK:34746). Ataşehir ofisimizde telefon: 0216 514 74 48. Her iki ofis için e-posta: info@gitateknoloji.com ve satis@gitateknoloji.com."
    },
    {
      question: "Çalışma saatleriniz nedir?",
      answer: "Çalışma saatlerimiz: Pazartesi - Cuma: 09:00 - 18:00, Cumartesi: 09:00 - 14:00, Pazar: Kapalı. Acil durumlar için 7/24 teknik destek hizmetimiz bulunmaktadır."
    },
    {
      question: "Proje süreçleri nasıl işliyor?",
      answer: "Proje süreçlerimiz şu adımlardan oluşur: 1) İhtiyaç analizi ve keşif çalışması, 2) Projelendirme ve tasarım, 3) Kurulum ve entegrasyon, 4) Test ve optimizasyon, 5) Eğitim ve dokümantasyon, 6) Canlıya alma ve destek. Her aşamada müşterilerimizle yakın iletişim halinde çalışıyor, projelerin zamanında ve bütçe dahilinde tamamlanmasını sağlıyoruz."
    },
    {
      question: "Siber güvenlik çözümleriniz neler?",
      answer: "Siber güvenlik çözümlerimiz: Privileged Access Management (PAM) - Ayrıcalıklı erişim yönetimi; Mobil Device Management (MDM) - Mobil cihaz yönetimi; Data Loss Prevention (DLP) - Veri kaybı önleme; Antivirüs çözümleri ve EDR/XDR - Gelişmiş tehdit tespiti ve yanıtı; Ağ güvenliği çözümleri - Firewall, WAF, yük dengeleme; Fiziksel güvenlik sistemleri - IP CCTV, kartlı geçiş, yangın ihbar sistemleri."
    },
    {
      question: "Sanallaştırma çözümleriniz neler?",
      answer: "Sanallaştırma çözümlerimiz: VMware, Citrix, Proxmox, oVirt, Oracle Linux Virtualization Manager (OLVM) kurulum ve yapılandırması; Veeam entegrasyonu ile güçlü yedekleme çözümleri; Masa üstü sanallaştırma (VDI) çözümleri; Hiper bütünleşik altyapı çözümleri; Sanallaştırma danışmanlığı ve optimizasyon hizmetleri. Özellikle VMware lisans maliyetlerinin artması nedeniyle Proxmox gibi alternatif çözümlere yönelik danışmanlık hizmeti veriyoruz."
    },
    {
      question: "İzleme ve görselleştirme çözümleriniz neler?",
      answer: "İzleme ve görselleştirme çözümlerimiz: Zabbix - Güçlü izleme ve alarm yönetimi; Grafana - Veri görselleştirme ve analiz; Netbox - Veri merkezi altyapı yönetimi; Prometheus - Modern izleme ve uyarı sistemi; Özelleştirilmiş dashboard'lar ve raporlama; Mikroservis mimarilerinde izleme çözümleri; Bulut ortamları için izleme sistemleri."
    },
    {
      question: "Fiyatlandırma nasıl belirleniyor?",
      answer: "Fiyatlandırma, projenin kapsamına, karmaşıklığına, süresine ve gereksinimlerine göre belirlenir. Her proje için özel teklif hazırlıyoruz. Ortaklıklarımız sayesinde müşterilerimize uygun fiyatlarla kaliteli çözümler sunuyoruz. Detaylı bilgi ve fiyat teklifi için bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Proje sonrası destek hizmeti veriyor musunuz?",
      answer: "Evet, tüm projelerimizde proje sonrası destek hizmeti veriyoruz. Bu hizmet kapsamında: 7/24 teknik destek, proaktif bakım ve izleme, güvenlik güncellemeleri, performans optimizasyonu, eğitim ve dokümantasyon, yedekleme ve felaket kurtarma planları bulunmaktadır. Müşterilerimizin memnuniyeti bizim için çok önemli."
    },
    {
      question: "Eğitim hizmeti veriyor musunuz?",
      answer: "Evet, eğitim hizmeti veriyoruz. Kurumların ihtiyaçlarına göre özelleştirilmiş eğitim programları hazırlıyoruz: Sistem yönetimi eğitimleri, güvenlik farkındalık eğitimleri, yazılım kullanım eğitimleri, DevOps ve mikroservis eğitimleri, sanallaştırma platformları eğitimleri. Eğitimler hem teorik hem de pratik uygulamalar içerir."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item, index) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <NextSeo
        title="Sıkça Sorulan Sorular (SSS) - Gita Teknoloji"
        description="Gita Teknoloji hakkında sıkça sorulan sorular ve cevapları. Hizmetlerimiz, çözümlerimiz, yazılımlarımız ve iletişim bilgilerimiz hakkında detaylı bilgiler."
        canonical="https://gitatech.com/sss"
        openGraph={{
          title: 'Gita Teknoloji SSS - Sıkça Sorulan Sorular',
          description: 'Teknoloji hizmetlerimiz hakkında sıkça sorulan sorular ve detaylı cevaplar',
          url: 'https://gitatech.com/sss',
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'gita teknoloji sss, sıkça sorulan sorular, teknoloji hizmetleri, siber güvenlik, sanallaştırma, izleme sistemleri, gita teknoloji iletişim',
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
                  Sıkça Sorulan Sorular
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Gita Teknoloji hakkında merak ettiğiniz her şey
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section ref={sectionRef} className="py-16 relative overflow-hidden">
            {/* Background Animation Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float-reverse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
              {/* Section Header with Animation */}
              <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-text-glow">
                  Merak Ettikleriniz
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  En çok sorulan sorular ve detaylı cevapları
                </p>
              </div>

              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-1 ${
                      animatedItems.includes(index) ? 'animate-faq-slide-in' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-primary transition-colors duration-300">
                        {item.question}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <svg
                          className={`w-6 h-6 text-primary transition-all duration-500 group-hover:scale-110 ${
                            openItems.has(index) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* Animated Answer Section */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="border-l-4 border-primary pl-4">
                          <p className="text-gray-600 leading-relaxed animate-text-fade-in">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA with Enhanced Animation */}
          <section className="bg-white py-16 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float-medium"></div>
              <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-float-slow"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold mb-4 text-gray-800 group-hover:scale-105 transition-transform duration-300">
                  Başka Sorularınız mı Var?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Burada cevabını bulamadığınız sorularınız için bizimle iletişime geçebilirsiniz. 
                  Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
                </p>
                <a
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                >
                  <span>İletişime Geçin</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes faq-slide-in {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(15, 23, 42, 0.3); }
          50% { text-shadow: 0 0 30px rgba(15, 23, 42, 0.6); }
        }
        
        @keyframes text-fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-faq-slide-in {
          animation: faq-slide-in 0.6s ease-out forwards;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 7s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-text-fade-in {
          animation: text-fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
} 