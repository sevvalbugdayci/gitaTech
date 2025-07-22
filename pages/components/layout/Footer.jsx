import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="bg-[#242a32] flex flex-col md:flex-row justify-evenly p-12 text-white mt-16">
      <div className="mb-4 md:mb-0">
        <h3 className="font-semibold mb-3">İletişim</h3>
        <p>Email: <a href="mailto:satis@gitateknoloji.com" className="text-white hover:underline font-normal">satis@gitateknoloji.com</a></p>
        <p>Email: <a href="mailto:info@gitateknoloji.com" className="text-white hover:underline font-normal">info@gitateknoloji.com</a></p>
      </div>
      <div className="mb-4 md:mb-0">
        <h3 className="font-semibold mb-3">Adres</h3>
        <p>Meridvenköy mah. Nur Sk. A Blok</p>
        <p>Kapı No:1 /1 Daire No:115</p>
        <p>Kadıköy/İstanbul</p>
        <p>Business33 Ofis İstanbul</p>
      </div>
      <div className="mb-4 md:mb-0">
        <h3 className="font-semibold mb-3">Innovactive Technology Solution</h3>
        <ul>
          <li>Software Development</li>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Cybersecurity</li>
          <li>Cloud Services</li>
          <li>Managed Services</li>
        </ul>
      </div>
    </div>
    <div className="text-center flex w-full justify-center p-6 text-white bg-[#242a32] items-center  border-t-[1px] border-t-white">
        <p className="text-sm font-normal">&copy; 2024 Gita Teknoloji. Tüm Hakları Saklıdır.</p>
      </div>
    </>
  )
}

export default Footer