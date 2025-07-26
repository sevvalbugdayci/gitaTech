import React from 'react'

const WeDo = () => {
  const services = [
    {
      id: 1,
      title: "Yazılım Geliştirme",
      description: "İşletmenizi özel yazılım, mobil uygulama ve web geliştirme çözümlerimizle yükseltin. Bulut tabanlı teknolojinin gücünü kullanarak inovasyonu ve büyümeyi destekleyin!",
      image: "/new/4.png",
      icon: "💻",
      features: ["Özel Yazılım", "Mobil Uygulamalar", "Web Geliştirme", "Bulut Çözümleri"],
      link: "/hizmetler"
    },
    {
      id: 2,
      title: "Yapay Zeka ve Makine Öğrenmesi",
      description: "İşletmenizi dönüştürmek için Yapay Zeka ve Makine Öğrenmesinin gücünü kullanın! Verimliliği artıran AI uygulamalarından, insan iletişimini anlayan doğal dil işleme modellerine kadar, sizi hiç olmadığı kadar inovasyon yapmaya güçlendiriyoruz.",
      image: "/presentation.png",
      icon: "🤖",
      features: ["AI Uygulamaları", "Makine Öğrenmesi", "Doğal Dil İşleme", "Veri Analizi"],
      link: "/hizmetler"
    },
    {
      id: 3,
      title: "Siber Güvenlik",
      description: "Güçlü ağ güvenliği ve veritabanı koruması dahil kapsamlı güvenlik çözümlerimizle dijital altyapınızı güçlendirin. Uzman güvenlik danışmanlığımıza güvenin ve sürekli evrim geçiren siber tehdit ortamında varlıklarınızı koruyun.",
      image: "/cyber.png",
      icon: "🔒",
      features: ["Ağ Güvenliği", "Veritabanı Koruması", "Güvenlik Danışmanlığı", "Tehdit Tespiti"],
      link: "/hizmetler"
    },
    {
      id: 4,
      title: "Bulut Hizmetleri",
      description: "Altyapı Hizmeti (IaaS), Platform Hizmeti (PaaS) ve Yazılım Hizmeti (SaaS) sunan Bulut Hizmetlerimizle işletmenizi dönüştürün. Teknolojinin geleceğini benimseyin ve inovasyonu kolayca sürdürün!",
      image: "/new/9.png",
      icon: "☁️",
      features: ["IaaS", "PaaS", "SaaS", "Bulut Geçişi"],
      link: "/hizmetler"
    },
    {
      id: 5,
      title: "Yönetilen Hizmetler",
      description: "Kesintisiz bağlantı için Ağ Altyapı Hizmetleri, optimal performans için Sistem Altyapı Hizmetleri ve güçlü Sanallaştırma ve Yedekleme Çözümleri ile operasyonlarınızı yükseltin. Özel Ağ Güvenlik Hizmetlerimizle güvenliğinizi artırın.",
      image: "/new/2.png",
      icon: "⚙️",
      features: ["Ağ Altyapısı", "Sistem Yönetimi", "Sanallaştırma", "Yedekleme Çözümleri"],
      link: "/hizmetler"
    },
    {
      id: 6,
      title: "Dijital Dönüşüm",
      description: "Geleneksel iş süreçlerinizi dijital teknolojilerle dönüştürün. İş akışlarınızı otomatikleştirin, verimliliği artırın ve müşteri deneyimini iyileştirin. Geleceğin iş modelini bugün benimseyin!",
      image: "/new/3.png",
      icon: "🚀",
      features: ["Süreç Otomasyonu", "Dijital İş Akışları", "Müşteri Deneyimi", "İnovasyon Stratejisi"],
      link: "/hizmetler"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Neler Yapıyoruz?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modern teknoloji çözümleri ile işinizi dijital dünyada büyütün. 
            Profesyonel hizmetlerimizle geleceğe hazır olun.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col"
            >
              {/* Image - Now at the top */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} İllüstrasyonu`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group-hover:gap-3 mt-auto"
                >
                  <span>Daha Fazla Bilgi</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Projenizi Hayata Geçirelim
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Uzman ekibimizle teknoloji çözümlerinizi birlikte geliştirelim
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/iletisim" 
                className="bg-white text-primary font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Ücretsiz Danışmanlık
              </a>
              <a 
                href="/cozumler" 
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-primary transition-colors"
              >
                Çözümlerimizi İnceleyin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeDo
