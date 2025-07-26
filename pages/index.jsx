
import Head from "next/head";
import { NextSeo } from 'next-seo';
import Home from "./home";
import Header from "./components/layout/Header";
import SchemaMarkup from "./components/SchemaMarkup";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Gita Teknoloji - Teknolojiyi Basitleştiriyoruz | Kurumsal Çözümler"
        description="Gita Teknoloji ile işinizi dijital dünyada büyütün. Proxmox, Veeam, Zabbix, Linux, Xcitium ve network çözümleri. 20+ yıllık deneyimle güvenilir teknoloji ortağınız."
        canonical="https://gitatech.com"
        openGraph={{
          title: 'Gita Teknoloji - Teknolojiyi Basitleştiriyoruz',
          description: 'Gita Teknoloji ile işinizi dijital dünyada büyütün. Proxmox, Veeam, Zabbix, Linux ve network çözümleri',
          url: 'https://gitatech.com',
          siteName: 'Gita Teknoloji',
          locale: 'tr_TR',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'proxmox, veeam, zabbix, linux, xcitium, network, switch, cctv, yazılım, yapısal kablolama, şifre sıfırlama, sanallaştırma, gita teknoloji, teknoloji çözümleri, istanbul',
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
        ]}
      />
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="website" />
      <PerformanceOptimizer />
      <div className="font-poppins">
        <Header />
        <Home />
      </div>
    </>
  );
}
