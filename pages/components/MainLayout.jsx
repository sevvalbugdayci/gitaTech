import React from 'react'

const MainLayout = () => {
  return (
    <>
    <div className="bg-cover bg-no-repeat h-[600px] w-full bg-right md:block hidden" style={{backgroundImage: 'url(/mainlayout2.png)'}}></div>
    <div className="bg-cover bg-no-repeat h-[400px] w-full md:hidden block" style={{backgroundImage: 'url(/mobilson.png)'}}></div>
    </>
    
  )
}

export default MainLayout
