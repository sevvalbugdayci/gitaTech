import Logo from "../ui/Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/hizmetler' },
    { name: 'Çözümler', href: '/cozumler' },
    { name: 'Yazılımlar', href: '/yazilimlar' },
    { name: 'Çözüm Ortakları', href: '/cozum-ortaklari' },
    { name: 'Blog', href: '/blog' },
    { name: 'SSS', href: '/sss' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-16 h-16">
                  <Logo isScrolled={isScrolled} />
                </div>
                <p className={`font-bold text-xl transition-colors ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}>
                  Gita Teknoloji
                </p>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`relative font-medium transition-colors duration-300 text-sm ${
                        isScrolled ? 'text-black' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* CTA Button - Desktop */}
              <div className="hidden lg:block">
                <Link
                  href="/iletisim"
                  className={`border-2 font-semibold py-2 px-6 rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'border-black text-black hover:bg-black hover:text-white' 
                      : 'border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  Ücretsiz Danışmanlık
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu} 
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
              <div className="container mx-auto px-4 py-6">
                {/* Navigation Links */}
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Mobile */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/iletisim"
                    className="block w-full border-2 border-black text-black font-semibold py-3 px-6 rounded-lg text-center transition-colors hover:bg-black hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ücretsiz Danışmanlık
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
