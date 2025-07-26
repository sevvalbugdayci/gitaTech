import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SchemaMarkup from "./components/SchemaMarkup";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Proxmox Sanallaştırma Çözümü: VMware Alternatifi",
      excerpt: "Proxmox sanallaştırma platformu ile kurumsal sanallaştırma ihtiyaçlarınızı karşılayın. VMware alternatifi olarak maliyet etkin çözüm.",
      slug: "proxmox-sanallastirma-cozumu",
      date: "2024-01-20",
      category: "Sanallaştırma",
      readTime: "6 dk",
      image: "/blog/proxmox-virtualization.jpg"
    },
    {
      id: 2,
      title: "Veeam Backup Çözümleri: Veri Güvenliği Garantisi",
      excerpt: "Veeam backup ve felaket kurtarma çözümleri ile verilerinizi güvende tutun. Kurumsal yedekleme stratejileri.",
      slug: "veeam-backup-cozumleri",
      date: "2024-01-18",
      category: "Yedekleme",
      readTime: "5 dk",
      image: "/blog/veeam-backup.jpg"
    },
    {
      id: 3,
      title: "Zabbix İzleme Sistemi: Ağ ve Sistem İzleme",
      excerpt: "Zabbix ile ağ, sunucu ve uygulama izleme. Gerçek zamanlı performans takibi ve alarm yönetimi.",
      slug: "zabbix-izleme-sistemi",
      date: "2024-01-15",
      category: "İzleme",
      readTime: "7 dk",
      image: "/blog/zabbix-monitoring.jpg"
    },
    {
      id: 4,
      title: "Password Reset Çözümü: Self-Service Şifre Sıfırlama",
      excerpt: "Passeidon self-service password reset çözümü ile kullanıcı şifre yönetimini otomatikleştirin.",
      slug: "password-reset-cozumu",
      date: "2024-01-12",
      category: "Güvenlik",
      readTime: "4 dk",
      image: "/blog/password-reset.jpg"
    },
    {
      id: 5,
      title: "Xcitium Antivirus Çözümü: EDR/XDR Güvenlik",
      excerpt: "Xcitium antivirus ve EDR/XDR çözümleri ile siber tehditlere karşı kapsamlı koruma.",
      slug: "xcitium-antivirus-cozumu",
      date: "2024-01-10",
      category: "Siber Güvenlik",
      readTime: "6 dk",
      image: "/blog/xcitium-security.jpg"
    },
    {
      id: 6,
      title: "Yapısal Kablolama Rehberi: Network Altyapısı",
      excerpt: "Yapısal kablolama çözümleri ile güvenilir network altyapısı kurun. Cat6, Cat7 ve fiber optik kablolama.",
      slug: "yapisal-kablolama-rehberi",
      date: "2024-01-08",
      category: "Network",
      readTime: "8 dk",
      image: "/blog/structured-cabling.jpg"
    },
    {
      id: 7,
      title: "CCTV Güvenlik Sistemi: IP Kamera Çözümleri",
      excerpt: "IP CCTV güvenlik sistemleri ile işletmenizi koruyun. HD kamera, video analiz ve uzaktan izleme.",
      slug: "cctv-guvenlik-sistemi",
      date: "2024-01-05",
      category: "Güvenlik",
      readTime: "7 dk",
      image: "/blog/cctv-security.jpg"
    },
    {
      id: 8,
      title: "Linux Sunucu Çözümleri: Açık Kaynak Performans",
      excerpt: "Linux sunucu çözümleri ile yüksek performanslı, güvenli ve maliyet etkin altyapı kurun.",
      slug: "linux-sunucu-cozumleri",
      date: "2024-01-03",
      category: "Sunucu",
      readTime: "6 dk",
      image: "/blog/linux-server.jpg"
    }
  ];

  return (
    <>
      <NextSeo
        title="Blog - Teknoloji ve Dijital Dönüşüm"
        description="GitaTech blog'unda teknoloji, sanallaştırma, yedekleme, izleme, güvenlik ve network çözümleri hakkında güncel bilgiler ve ipuçları."
        canonical="https://gitatech.com/blog"
        openGraph={{
          title: 'GitaTech Blog - Teknoloji ve Dijital Dönüşüm Rehberi',
          description: 'Proxmox, Veeam, Zabbix, Linux, Xcitium ve network çözümleri hakkında uzman görüşleri',
          url: 'https://gitatech.com/blog',
          siteName: 'GitaTech',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'proxmox, veeam, zabbix, linux, xcitium, network, switch, cctv, yazılım, yapısal kablolama, password reset, sanallaştırma, gitatech blog',
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
                  Blog
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Teknoloji ve dijital dönüşüm hakkında güncel bilgiler, ipuçları ve uzman görüşleri
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Blog Görseli</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-primary font-semibold">{post.category}</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('tr-TR')}</time>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-primary hover:text-secondary font-semibold transition-colors"
                        >
                          Devamını Oku →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Güncel Kalın
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Teknoloji dünyasındaki son gelişmeler ve GitaTech'ten özel içerikler için e-posta listemize katılın.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Abone Ol
                </button>
              </form>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
} 