import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SchemaMarkup from "../components/SchemaMarkup";

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Router henüz yüklenmemişse loading göster
  if (router.isFallback || !slug) {
    return (
      <div className="font-poppins">
        <Header />
        <main className="min-h-screen bg-gray-50 pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Yükleniyor...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const blogPosts = {
    "proxmox-sanallastirma-cozumu": {
      title: "Proxmox Sanallaştırma Çözümü: VMware Alternatifi",
      excerpt: "Proxmox sanallaştırma platformu ile kurumsal sanallaştırma ihtiyaçlarınızı karşılayın. VMware alternatifi olarak maliyet etkin çözüm.",
      content: `
        <h2>Proxmox Sanallaştırma Çözümü: VMware Alternatifi</h2>
        
        <p>Proxmox, açık kaynaklı bir <strong>sanallaştırma</strong> platformu olarak <strong>kurumsal teknoloji çözümleri</strong> sunar. VMware'in yüksek lisans maliyetleri nedeniyle birçok işletme Proxmox'a yönelmektedir. <a href='/cozumler' style='color:#1e3a8a;text-decoration:underline;'>Tüm çözümlerimizi inceleyin</a> veya <a href='/hizmetler' style='color:#1e3a8a;text-decoration:underline;'>hizmetlerimiz hakkında bilgi alın</a>.</p>
        
        <h3>Proxmox'un Avantajları</h3>
        <ul>
          <li><strong>Maliyet Etkinlik:</strong> Açık kaynak olduğu için lisans maliyeti yoktur</li>
          <li><strong>Yüksek Performans:</strong> KVM tabanlı sanallaştırma ile mükemmel performans</li>
          <li><strong>Kolay Yönetim:</strong> Web tabanlı arayüz ile basit yönetim</li>
          <li><strong>Ölçeklenebilirlik:</strong> Küçük işletmelerden büyük veri merkezlerine kadar</li>
        </ul>
        
        <h3>Proxmox ile Sanallaştırma Çözümleri</h3>
        <p>Gita Teknoloji olarak <strong>Proxmox sanallaştırma çözümleri</strong> ve <strong>bulut hizmetleri</strong> sunuyoruz:</p>
        <ul>
          <li>Sunucu sanallaştırma kurulumu ve yapılandırması</li>
          <li>Yüksek erişilebilirlik (HA) konfigürasyonu</li>
          <li>Yedekleme ve felaket kurtarma çözümleri</li>
          <li>Performans optimizasyonu ve izleme</li>
        </ul>
        <p>Daha fazla bilgi için <a href='/iletisim' style='color:#1e3a8a;text-decoration:underline;'>iletişim</a> sayfamızdan bize ulaşabilirsiniz.</p>
        
        <h3>Veeam Entegrasyonu</h3>
        <p>Proxmox ile <a href='/blog/veeam-backup-cozumleri' style='color:#1e3a8a;text-decoration:underline;'>Veeam backup çözümleri</a> entegre ederek güvenli yedekleme stratejileri oluşturabilirsiniz.</p>
        
        <h3>Sonuç</h3>
        <p>Proxmox, <strong>kurumsal sanallaştırma</strong> ve <strong>teknoloji çözümleri</strong> için güçlü ve maliyet etkin bir seçenektir. Diğer <a href='/blog' style='color:#1e3a8a;text-decoration:underline;'>blog yazılarımıza</a> göz atarak teknoloji dünyasındaki yenilikleri takip edebilirsiniz.</p>
      `,
      date: "2024-01-20",
      category: "Sanallaştırma",
      readTime: "6 dk",
      author: "GitaTech Sanallaştırma Uzmanı",
      image: "/blog/proxmox-virtualization.jpg"
    },
    "veeam-backup-cozumleri": {
      title: "Veeam Backup Çözümleri: Veri Güvenliği Garantisi",
      excerpt: "Veeam backup ve felaket kurtarma çözümleri ile verilerinizi güvende tutun. Kurumsal yedekleme stratejileri.",
      content: `
        <h2>Veeam Backup Çözümleri: Veri Güvenliği Garantisi</h2>
        
        <p>Veeam, modern veri merkezleri için geliştirilmiş güçlü <strong>backup ve felaket kurtarma çözümleri</strong> ile <strong>kurumsal teknoloji çözümleri</strong> sunar. VMware, Hyper-V ve fiziksel sunucular için kapsamlı koruma sağlar. <a href='/cozumler' style='color:#1e3a8a;text-decoration:underline;'>Tüm çözümlerimizi keşfedin</a>.</p>
        
        <h3>Veeam'ın Temel Özellikleri</h3>
        <ul>
          <li><strong>Hızlı Yedekleme:</strong> Değişiklik tabanlı yedekleme ile hızlı işlem</li>
          <li><strong>Anında Geri Yükleme:</strong> VM'leri anında geri yükleme</li>
          <li><strong>Cloud Entegrasyonu:</strong> AWS, Azure, Google Cloud desteği</li>
          <li><strong>Gelişmiş Raporlama:</strong> Detaylı backup raporları</li>
        </ul>
        
        <h3>Veeam ile Yedekleme Stratejileri</h3>
        <p>Gita Teknoloji olarak Veeam ile kapsamlı <strong>yedekleme çözümleri</strong> ve <strong>bulut hizmetleri</strong> sunuyoruz:</p>
        <ul>
          <li>3-2-1 yedekleme stratejisi uygulaması</li>
          <li>Cloud backup entegrasyonu</li>
          <li>Otomatik yedekleme zamanlaması</li>
          <li>Yedekleme testleri ve doğrulama</li>
        </ul>
        <p>Detaylı bilgi için <a href='/hizmetler' style='color:#1e3a8a;text-decoration:underline;'>hizmetlerimizi</a> inceleyebilir veya <a href='/iletisim' style='color:#1e3a8a;text-decoration:underline;'>bizimle iletişime geçebilirsiniz</a>.</p>
        
        <h3>Proxmox ile Entegrasyon</h3>
        <p>Veeam, <a href='/blog/proxmox-sanallastirma-cozumu' style='color:#1e3a8a;text-decoration:underline;'>Proxmox sanallaştırma platformu</a> ile mükemmel entegrasyon sağlar.</p>
        
        <h3>Sonuç</h3>
        <p>Veeam backup çözümleri ile verilerinizi güvende tutun ve iş sürekliliğinizi garanti altına alın. Diğer <a href='/blog' style='color:#1e3a8a;text-decoration:underline;'>blog yazılarımıza</a> göz atarak <strong>teknoloji çözümleri</strong> hakkında daha fazla bilgi edinebilirsiniz.</p>
      `,
      date: "2024-01-18",
      category: "Yedekleme",
      readTime: "5 dk",
      author: "GitaTech Backup Uzmanı",
      image: "/blog/veeam-backup.jpg"
    },
    "zabbix-izleme-sistemi": {
      title: "Zabbix İzleme Sistemi: Ağ ve Sistem İzleme",
      excerpt: "Zabbix ile ağ, sunucu ve uygulama izleme. Gerçek zamanlı performans takibi ve alarm yönetimi.",
      content: `
        <h2>Zabbix İzleme Sistemi: Ağ ve Sistem İzleme</h2>
        
        <p>Zabbix, kurumsal IT altyapılarını izlemek için geliştirilmiş güçlü bir açık kaynak <strong>izleme platformu</strong> ve <strong>teknoloji çözümü</strong>dür. Ağ cihazları, sunucular ve uygulamalar için kapsamlı izleme çözümleri sunar. <a href='/cozumler' style='color:#1e3a8a;text-decoration:underline;'>Çözümlerimizi keşfedin</a>.</p>
        
        <h3>Zabbix'in Temel Özellikleri</h3>
        <ul>
          <li><strong>Çoklu Platform Desteği:</strong> Windows, Linux, Unix sistemleri</li>
          <li><strong>Ağ İzleme:</strong> Switch, router, firewall izleme</li>
          <li><strong>Uygulama İzleme:</strong> Web uygulamaları, veritabanları</li>
          <li><strong>Gelişmiş Alarm Sistemi:</strong> E-posta, SMS, webhook bildirimleri</li>
        </ul>
        
        <h3>Zabbix ile İzleme Çözümleri</h3>
        <p>Gita Teknoloji olarak Zabbix ile kapsamlı <strong>izleme çözümleri</strong> ve <strong>kurumsal teknoloji hizmetleri</strong> sunuyoruz:</p>
        <ul>
          <li>Sunucu performans izleme</li>
          <li>Ağ trafiği analizi</li>
          <li>Uygulama performans izleme</li>
          <li>Kapasite planlama ve raporlama</li>
        </ul>
        <p>Daha fazla bilgi için <a href='/hizmetler' style='color:#1e3a8a;text-decoration:underline;'>hizmetlerimizi</a> inceleyebilir veya <a href='/iletisim' style='color:#1e3a8a;text-decoration:underline;'>iletişime geçebilirsiniz</a>.</p>
        
        <h3>Grafana Entegrasyonu</h3>
        <p>Zabbix verilerini Grafana ile görselleştirerek daha detaylı analizler yapabilirsiniz. Bu entegrasyon <strong>bulut hizmetleri</strong> ve <strong>teknoloji çözümleri</strong> alanında önemli avantajlar sağlar.</p>
        
        <h3>Sonuç</h3>
        <p>Zabbix ile IT altyapınızı 7/24 izleyin ve proaktif sorun çözümü yapın. Diğer <a href='/blog' style='color:#1e3a8a;text-decoration:underline;'>blog yazılarımıza</a> göz atarak <strong>teknoloji çözümleri</strong> hakkında daha fazla bilgi edinebilirsiniz.</p>
      `,
      date: "2024-01-15",
      category: "İzleme",
      readTime: "7 dk",
      author: "GitaTech İzleme Uzmanı",
      image: "/blog/zabbix-monitoring.jpg"
    },
    "password-reset-cozumu": {
      title: "Password Reset Çözümü: Self-Service Şifre Sıfırlama",
      excerpt: "Passeidon self-service password reset çözümü ile kullanıcı şifre yönetimini otomatikleştirin.",
      content: `
        <h2>Password Reset Çözümü: Self-Service Şifre Sıfırlama</h2>
        
        <p>Passeidon, Microsoft Active Directory ve Office 365 için geliştirilmiş <strong>self-service password reset çözümü</strong> ve <strong>kurumsal teknoloji çözümü</strong>dür. Kullanıcıların şifrelerini güvenli bir şekilde sıfırlamalarını sağlar. <a href='/yazilimlar' style='color:#1e3a8a;text-decoration:underline;'>Yazılımlarımızı inceleyin</a>.</p>
        
        <h3>Passeidon'un Avantajları</h3>
        <ul>
          <li><strong>Self-Service:</strong> Kullanıcılar kendi şifrelerini sıfırlayabilir</li>
          <li><strong>Güvenlik:</strong> SMS doğrulama ile güvenli sıfırlama</li>
          <li><strong>AD Entegrasyonu:</strong> Active Directory ile tam entegrasyon</li>
          <li><strong>Office 365 Desteği:</strong> Cloud tabanlı kullanıcılar için destek</li>
        </ul>
        
        <h3>Password Reset Süreci</h3>
        <ol>
          <li>Kullanıcı şifresini unuttuğunda portal'a girer</li>
          <li>Kullanıcı adını ve e-posta adresini girer</li>
          <li>SMS ile doğrulama kodu gönderilir</li>
          <li>Doğrulama sonrası yeni şifre belirlenir</li>
        </ol>
        
        <h3>Kurumsal Faydalar</h3>
        <ul>
          <li>IT destek yükünü azaltır</li>
          <li>Kullanıcı memnuniyetini artırır</li>
          <li>Güvenlik standartlarını yükseltir</li>
          <li>Maliyetleri düşürür</li>
        </ul>
        <p>Bu <strong>teknoloji çözümü</strong> hakkında daha fazla bilgi için <a href='/hizmetler' style='color:#1e3a8a;text-decoration:underline;'>hizmetlerimizi</a> inceleyebilir veya <a href='/iletisim' style='color:#1e3a8a;text-decoration:underline;'>bizimle iletişime geçebilirsiniz</a>.</p>
        
        <h3>Sonuç</h3>
        <p>Passeidon password reset çözümü ile şifre yönetimini modernize edin ve kullanıcı deneyimini iyileştirin. Diğer <a href='/blog' style='color:#1e3a8a;text-decoration:underline;'>blog yazılarımıza</a> göz atarak <strong>teknoloji çözümleri</strong> hakkında daha fazla bilgi edinebilirsiniz.</p>
      `,
      date: "2024-01-12",
      category: "Güvenlik",
      readTime: "4 dk",
      author: "GitaTech Güvenlik Uzmanı",
      image: "/blog/password-reset.jpg"
    },
    "xcitium-antivirus-cozumu": {
      title: "Xcitium Antivirus Çözümü: EDR/XDR Güvenlik",
      excerpt: "Xcitium antivirus ve EDR/XDR çözümleri ile siber tehditlere karşı kapsamlı koruma.",
      content: `
        <h2>Xcitium Antivirus Çözümü: EDR/XDR Güvenlik</h2>
        
        <p>Xcitium, geleneksel antivirus çözümlerinin ötesine geçen EDR (Endpoint Detection and Response) ve XDR (Extended Detection and Response) teknolojileri ile kapsamlı <strong>siber güvenlik koruması</strong> ve <strong>teknoloji çözümleri</strong> sağlar. <a href='/cozumler' style='color:#1e3a8a;text-decoration:underline;'>Güvenlik çözümlerimizi keşfedin</a>.</p>
        
        <h3>Xcitium'un Güvenlik Özellikleri</h3>
        <ul>
          <li><strong>Containerization:</strong> Şüpheli uygulamaları izole eder</li>
          <li><strong>Behavioral Analysis:</strong> Davranış tabanlı tehdit tespiti</li>
          <li><strong>Real-time Protection:</strong> Gerçek zamanlı koruma</li>
          <li><strong>Threat Intelligence:</strong> Gelişmiş tehdit istihbaratı</li>
        </ul>
        
        <h3>EDR/XDR Avantajları</h3>
        <ul>
          <li>Gelişmiş tehdit tespiti ve yanıt</li>
          <li>Otomatik tehdit analizi</li>
          <li>Merkezi güvenlik yönetimi</li>
          <li>Detaylı güvenlik raporları</li>
        </ul>
        
        <h3>Kurumsal Güvenlik Stratejisi</h3>
        <p>Gita Teknoloji olarak Xcitium ile kapsamlı <strong>güvenlik çözümleri</strong> ve <strong>siber güvenlik hizmetleri</strong> sunuyoruz:</p>
        <ul>
          <li>Endpoint güvenlik kurulumu</li>
          <li>Güvenlik politikası yapılandırması</li>
          <li>Tehdit avcılığı ve analiz</li>
          <li>Güvenlik eğitimleri</li>
        </ul>
        <p>Bu <strong>teknoloji çözümü</strong> hakkında daha fazla bilgi için <a href='/hizmetler' style='color:#1e3a8a;text-decoration:underline;'>hizmetlerimizi</a> inceleyebilir veya <a href='/iletisim' style='color:#1e3a8a;text-decoration:underline;'>bizimle iletişime geçebilirsiniz</a>.</p>
        
        <h3>Sonuç</h3>
        <p>Xcitium ile modern siber tehditlere karşı kapsamlı koruma sağlayın. Diğer <a href='/blog' style='color:#1e3a8a;text-decoration:underline;'>blog yazılarımıza</a> göz atarak <strong>teknoloji çözümleri</strong> ve <strong>siber güvenlik</strong> hakkında daha fazla bilgi edinebilirsiniz.</p>
      `,
      date: "2024-01-10",
      category: "Siber Güvenlik",
      readTime: "6 dk",
      author: "GitaTech Siber Güvenlik Uzmanı",
      image: "/blog/xcitium-security.jpg"
    },
    "yapisal-kablolama-rehberi": {
      title: "Yapısal Kablolama Rehberi: Network Altyapısı",
      excerpt: "Yapısal kablolama çözümleri ile güvenilir network altyapısı kurun. Cat6, Cat7 ve fiber optik kablolama.",
      content: `
        <h2>Yapısal Kablolama Rehberi: Network Altyapısı</h2>
        
        <p>Yapısal kablolama, modern network altyapılarının temelidir. Doğru kablolama çözümleri ile yüksek performanslı ve güvenilir ağ altyapısı oluşturabilirsiniz. Bu <strong>teknoloji çözümü</strong> <strong>kurumsal network</strong> ihtiyaçlarını karşılar. <a href='/cozumler' style='color:#1e3a8a;text-decoration:underline;'>Network çözümlerimizi keşfedin</a>.</p>
        
        <h3>Kablolama Standartları</h3>
        <ul>
          <li><strong>Cat6:</strong> 1 Gbps hızında veri transferi</li>
          <li><strong>Cat6A:</strong> 10 Gbps hızında veri transferi</li>
          <li><strong>Cat7:</strong> 10 Gbps hızında veri transferi (daha iyi ekranlama)</li>
          <li><strong>Fiber Optik:</strong> Yüksek hızda uzun mesafe bağlantıları</li>
        </ul>
        
        <h3>Yapısal Kablolama Bileşenleri</h3>
        <ul>
          <li>Patch panel'ler</li>
          <li>Network switch'ler</li>
          <li>Kablolama kanalları</li>
          <li>Test ekipmanları</li>
        </ul>
        
        <h3>Kurumsal Kablolama Çözümleri</h3>
        <p>Gita Teknoloji olarak yapısal kablolama çözümleri ve <strong>network teknoloji hizmetleri</strong> sunuyoruz:</p>
        <ul>
          <li>Keşif ve projelendirme</li>
          <li>Kablolama kurulumu</li>
          <li>Test ve sertifikasyon</li>
          <li>Dokümantasyon</li>
        </ul>
        <p>Bu <strong>teknoloji çözümü</strong> hakkında daha fazla bilgi için <a href='/hizmetler' style='color:#1e3a8a;text-decoration:underline;'>hizmetlerimizi</a> inceleyebilir veya <a href='/iletisim' style='color:#1e3a8a;text-decoration:underline;'>bizimle iletişime geçebilirsiniz</a>.</p>
        
        <h3>Network Switch Seçimi</h3>
        <p>Doğru network switch seçimi kablolama performansını doğrudan etkiler. PoE, VLAN ve QoS özelliklerini göz önünde bulundurun. Bu <strong>kurumsal teknoloji çözümü</strong> için profesyonel danışmanlık alabilirsiniz.</p>
        
        <h3>Sonuç</h3>
        <p>Profesyonel yapısal kablolama ile geleceğe hazır network altyapısı kurun. Diğer <a href='/blog' style='color:#1e3a8a;text-decoration:underline;'>blog yazılarımıza</a> göz atarak <strong>teknoloji çözümleri</strong> ve <strong>network</strong> hakkında daha fazla bilgi edinebilirsiniz.</p>
      `,
      date: "2024-01-08",
      category: "Network",
      readTime: "8 dk",
      author: "GitaTech Network Uzmanı",
      image: "/blog/structured-cabling.jpg"
    },
    "cctv-guvenlik-sistemi": {
      title: "CCTV Güvenlik Sistemi: IP Kamera Çözümleri",
      excerpt: "IP CCTV güvenlik sistemleri ile işletmenizi koruyun. HD kamera, video analiz ve uzaktan izleme.",
      content: `
        <h2>CCTV Güvenlik Sistemi: IP Kamera Çözümleri</h2>
        
        <p>IP CCTV güvenlik sistemleri, modern işletmelerin güvenlik ihtiyaçlarını karşılayan gelişmiş <strong>güvenlik çözümleri</strong> ve <strong>teknoloji çözümleri</strong>dir. HD kalitede video kaydı, akıllı analiz ve uzaktan izleme özellikleri sunar. <a href='/cozumler' style='color:#1e3a8a;text-decoration:underline;'>Güvenlik çözümlerimizi keşfedin</a>.</p>
        
        <h3>IP CCTV Sistem Bileşenleri</h3>
        <ul>
          <li><strong>IP Kameralar:</strong> HD, 4K çözünürlük seçenekleri</li>
          <li><strong>NVR (Network Video Recorder):</strong> Merkezi kayıt sistemi</li>
          <li><strong>PoE Switch:</strong> Güç ve veri transferi</li>
          <li><strong>Video Analiz Yazılımı:</strong> Akıllı analiz özellikleri</li>
        </ul>
        
        <h3>CCTV Güvenlik Özellikleri</h3>
        <ul>
          <li>Hareket algılama</li>
          <li>Yüz tanıma</li>
          <li>Plaka okuma</li>
          <li>Gece görüşü</li>
          <li>Uzaktan izleme</li>
        </ul>
        
        <h3>Kurumsal Güvenlik Çözümleri</h3>
        <p>Gita Teknoloji olarak CCTV güvenlik sistemleri ve <strong>siber güvenlik hizmetleri</strong> sunuyoruz:</p>
        <ul>
          <li>Güvenlik analizi ve projelendirme</li>
          <li>IP kamera kurulumu</li>
          <li>Video analiz yazılımı entegrasyonu</li>
          <li>Mobil uygulama ile uzaktan izleme</li>
        </ul>
        <p>Bu <strong>teknoloji çözümü</strong> hakkında daha fazla bilgi için <a href='/hizmetler' style='color:#1e3a8a;text-decoration:underline;'>hizmetlerimizi</a> inceleyebilir veya <a href='/iletisim' style='color:#1e3a8a;text-decoration:underline;'>bizimle iletişime geçebilirsiniz</a>.</p>
        
        <h3>Sonuç</h3>
        <p>IP CCTV güvenlik sistemleri ile işletmenizi koruyun ve güvenliğinizi artırın. Diğer <a href='/blog' style='color:#1e3a8a;text-decoration:underline;'>blog yazılarımıza</a> göz atarak <strong>teknoloji çözümleri</strong> ve <strong>güvenlik</strong> hakkında daha fazla bilgi edinebilirsiniz.</p>
      `,
      date: "2024-01-05",
      category: "Güvenlik",
      readTime: "7 dk",
      author: "GitaTech Güvenlik Uzmanı",
      image: "/blog/cctv-security.jpg"
    },
    "linux-sunucu-cozumleri": {
      title: "Linux Sunucu Çözümleri: Açık Kaynak Performans",
      excerpt: "Linux sunucu çözümleri ile yüksek performanslı, güvenli ve maliyet etkin altyapı kurun.",
      content: `
        <h2>Linux Sunucu Çözümleri: Açık Kaynak Performans</h2>
        
        <p>Linux sunucu çözümleri, <strong>kurumsal teknoloji çözümleri</strong> için yüksek performanslı, güvenli ve maliyet etkin altyapı seçeneğidir. Açık kaynak teknolojiler ile <strong>teknoloji çözümleri</strong> sunar. <a href='/cozumler' style='color:#1e3a8a;text-decoration:underline;'>Sunucu çözümlerimizi keşfedin</a>.</p>
        
        <h3>Linux Sunucu Avantajları</h3>
        <ul>
          <li><strong>Yüksek Performans:</strong> Optimize edilmiş sistem kaynakları</li>
          <li><strong>Güvenlik:</strong> Gelişmiş güvenlik özellikleri</li>
          <li><strong>Maliyet Etkinlik:</strong> Açık kaynak lisans maliyeti yok</li>
          <li><strong>Ölçeklenebilirlik:</strong> Küçük işletmelerden büyük veri merkezlerine</li>
        </ul>
        
        <h3>Linux Sunucu Çözümleri</h3>
        <ul>
          <li>Web sunucu kurulumu (Apache, Nginx)</li>
          <li>Veritabanı sunucu yapılandırması</li>
          <li>Mail sunucu kurulumu</li>
          <li>Dosya sunucu yapılandırması</li>
        </ul>
        
        <h3>Kurumsal Linux Hizmetleri</h3>
        <p>Gita Teknoloji olarak Linux sunucu çözümleri ve <strong>bulut hizmetleri</strong> sunuyoruz:</p>
        <ul>
          <li>Linux sunucu kurulumu ve yapılandırması</li>
          <li>Güvenlik yapılandırması</li>
          <li>Performans optimizasyonu</li>
          <li>7/24 teknik destek</li>
        </ul>
        <p>Bu <strong>teknoloji çözümü</strong> hakkında daha fazla bilgi için <a href='/hizmetler' style='color:#1e3a8a;text-decoration:underline;'>hizmetlerimizi</a> inceleyebilir veya <a href='/iletisim' style='color:#1e3a8a;text-decoration:underline;'>bizimle iletişime geçebilirsiniz</a>.</p>
        
        <h3>Sonuç</h3>
        <p>Linux sunucu çözümleri ile yüksek performanslı ve güvenli altyapı kurun. Diğer <a href='/blog' style='color:#1e3a8a;text-decoration:underline;'>blog yazılarımıza</a> göz atarak <strong>teknoloji çözümleri</strong> ve <strong>sunucu</strong> hakkında daha fazla bilgi edinebilirsiniz.</p>
      `,
      date: "2024-01-03",
      category: "Sunucu",
      readTime: "6 dk",
      author: "GitaTech Sunucu Uzmanı",
      image: "/blog/linux-server.jpg"
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="font-poppins">
        <Header />
        <main className="min-h-screen bg-gray-50 pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Yazısı Bulunamadı</h1>
            <p className="text-gray-600 mb-8">Aradığınız blog yazısı mevcut değil.</p>
            <Link href="/blog" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Blog'a Dön
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={`${post.title} - GitaTech Blog`}
        description={post.excerpt}
        canonical={`https://gitatech.com/blog/${slug}`}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          url: `https://gitatech.com/blog/${slug}`,
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'article',
          article: {
            publishedTime: post.date,
            modifiedTime: post.date,
            authors: [post.author],
            tags: [post.category],
          },
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${post.category.toLowerCase()}, blog, gitatech, ${post.title.toLowerCase()}`,
          },
        ]}
      />
      <SchemaMarkup type="article" />
      
      <div className="font-poppins">
        <Header />
        
        <main className="min-h-screen bg-gray-50 pt-20">
          {/* Article Header */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="mb-8">
                <Link href="/blog" className="text-primary hover:text-secondary font-semibold mb-4 inline-block">
                  ← Blog'a Dön
                </Link>
              </div>
              
              <div className="mb-6">
                <span className="text-sm text-primary font-semibold">{post.category}</span>
                <span className="mx-2 text-gray-400">•</span>
                <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('tr-TR')}</time>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{post.author}</p>
                  <p className="text-sm text-gray-500">GitaTech</p>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <article className="bg-white rounded-lg shadow-lg p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
            </div>
          </section>

          {/* Related Posts */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">İlgili Yazılar</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(blogPosts)
                  .filter(([key]) => key !== slug)
                  .slice(0, 2)
                  .map(([key, relatedPost]) => (
                    <article key={key} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        <Link href={`/blog/${key}`} className="hover:text-primary transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary font-semibold">{relatedPost.category}</span>
                        <time className="text-sm text-gray-500">{new Date(relatedPost.date).toLocaleDateString('tr-TR')}</time>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
} 