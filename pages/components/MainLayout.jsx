import React, { useEffect, useState } from 'react'

const MainLayout = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Hero Section */}
      <div className="bg-cover bg-no-repeat h-screen w-full bg-center lg:block hidden relative overflow-hidden" style={{backgroundImage: 'url(/new/1.png)'}}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-primary/15 rounded-full blur-xl animate-float-medium"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Main Heading with Enhanced Animation */}
              <h1 className={`text-6xl md:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'}`}>
                Teknolojiyi
                <span className="block text-white animate-text-glow">Basitleştiriyoruz</span>
              </h1>
              
              {/* Subtitle with Typewriter Effect */}
              <p className={`text-2xl md:text-3xl text-white/90 mb-6 font-light transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'}`}>
                Teknoloji, Basit Hale Getirildi
              </p>
              
              {/* Description with Fade In */}
              <p className={`text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                20 yılı aşkın deneyimle kurumların teknoloji ihtiyaçlarını karşılayan güvenilir çözüm ortağınız
              </p>
              
              {/* CTA Buttons with Enhanced Hover Effects */}
              <div className={`flex flex-wrap gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <a 
                  href="/cozumler" 
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-white/20 animate-button-pulse"
                >
                  <span className="flex items-center gap-2">
                    Çözümlerimizi Keşfedin
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/iletisim" 
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-white/20 animate-button-pulse delay-200"
                >
                  <span className="flex items-center gap-2">
                    İletişime Geçin
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </a>
              </div>
              
              {/* Stats with Counter Animation */}
              <div className={`flex gap-8 mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">20+</div>
                  <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">Yıllık Deneyim</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">500+</div>
                  <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">Başarılı Proje</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">100%</div>
                  <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </div>
      
      {/* Tablet Hero Section */}
      <div className="bg-cover bg-no-repeat h-screen w-full bg-center md:block lg:hidden hidden relative overflow-hidden" style={{backgroundImage: 'url(/new/1.png)'}}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              {/* Main Heading */}
              <h1 className={`text-5xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-20'}`}>
                Teknolojiyi
                <span className="block text-white animate-text-glow">Basitleştiriyoruz</span>
              </h1>
              
              {/* Subtitle */}
              <p className={`text-2xl text-white/90 mb-6 font-light transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'}`}>
                Teknoloji, Basit Hale Getirildi
              </p>
              
              {/* Description */}
              <p className={`text-lg text-white/80 mb-10 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                20 yılı aşkın deneyimle kurumların teknoloji ihtiyaçlarını karşılayan güvenilir çözüm ortağınız
              </p>
              
              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-4 mb-10 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <a 
                  href="/cozumler" 
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-white/20 animate-button-pulse"
                >
                  <span className="flex items-center gap-2">
                    Çözümlerimizi Keşfedin
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/iletisim" 
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-white/20 animate-button-pulse delay-200"
                >
                  <span className="flex items-center gap-2">
                    İletişime Geçin
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </a>
              </div>
              
              {/* Stats */}
              <div className={`flex gap-6 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">20+</div>
                  <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">Yıllık Deneyim</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">500+</div>
                  <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">Başarılı Proje</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">100%</div>
                  <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero Section */}
      <div className="bg-cover bg-no-repeat h-screen w-full bg-center md:hidden block relative overflow-hidden" style={{backgroundImage: 'url(/new/1.png)'}}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="text-center">
              {/* Main Heading */}
              <h1 className={`text-4xl font-bold text-white mb-4 leading-tight transition-all duration-1000 ${isVisible ? 'animate-slide-in-top' : 'opacity-0 -translate-y-20'}`}>
                Teknolojiyi
                <span className="block text-white animate-text-glow">Basitleştiriyoruz</span>
              </h1>
              
              {/* Subtitle */}
              <p className={`text-xl text-white/90 mb-4 font-light transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-20'}`}>
                Teknoloji, Basit Hale Getirildi
              </p>
              
              {/* Description */}
              <p className={`text-base text-white/80 mb-8 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                20 yılı aşkın deneyimle güvenilir çözüm ortağınız
              </p>
              
              {/* CTA Buttons */}
              <div className={`flex flex-col gap-4 mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <a 
                  href="/cozumler" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Çözümlerimizi Keşfedin
                </a>
                <a 
                  href="/iletisim" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  İletişime Geçin
                </a>
              </div>
              
              {/* Stats */}
              <div className={`grid grid-cols-3 gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">20+</div>
                  <div className="text-white/70 text-xs group-hover:text-white transition-colors duration-300">Yıllık Deneyim</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">500+</div>
                  <div className="text-white/70 text-xs group-hover:text-white transition-colors duration-300">Başarılı Proje</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">100%</div>
                  <div className="text-white/70 text-xs group-hover:text-white transition-colors duration-300">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-top {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-bottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 30px rgba(255,255,255,0.8); }
        }
        
        @keyframes button-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
        }
        
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }
        
        .animate-slide-in-top {
          animation: slide-in-top 1s ease-out forwards;
        }
        
        .animate-slide-in-bottom {
          animation: slide-in-bottom 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 7s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-button-pulse {
          animation: button-pulse 2s infinite;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  )
}

export default MainLayout
