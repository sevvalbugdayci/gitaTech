import React from "react";

const WeDo = () => {
  return (
    <div className="m-1 sm:m-9">
      <h1 className="text-secondary sm:text-52px text-4xl my-12 text-center">What We Do ?</h1>
      <div className="flex items-center flex-wrap w-full gap-20">
        <div className="flex flex-row justify-evenly items-center">
            <img src="/software.png"  className="w-1/3"/>
            <div className="flex flex-col my-2.5 w-1/2 gap-5 text-secondary">
              <h1 className="text-28px">Software Development</h1>
              <p>
                Elevate your business with our custom software, mobile app, and
                web development solutions. Harness the power of cloud-based
                technology to drive innovation and growth!
              </p>
            </div>
        </div>

        <div className="flex flex-row justify-evenly items-center text-secondary">
          <div className="flex flex-col my-2.5 w-1/2 gap-5">
            <h1 className="text-28px">Artificial Intelligence and Machine Learning</h1>
            <div>
            Harness the power of Artificial Intelligence and Machine Learning to transform your business! From AI applications that enhance efficiency to cutting-edge machine learning models and Natural Language Processing that understand human communication, we empower you to innovate like never before. 
            </div>
          </div>
          <img src="/Intelligence.png" className=" w-1/3" />
        </div>

         <div className="flex flex-row justify-evenly items-center text-secondary">
            <img src="/cyber.png"  className="w-1/3"/>
            <div className="flex flex-col my-2.5 w-1/2 gap-5">
              <h1 className="text-28px">Cybersecurity</h1>
              <p>
              Fortify your digital landscape with our comprehensive security solutions, including robust network security and database protection. Trust our expert security consulting to safeguard your assets and ensure peace of mind in an ever-evolving cyber threat landscape.
              </p>
            </div>
        </div> 
        

        <div className="flex flex-row justify-evenly items-center text-secondary">
          <div className="flex flex-col my-2.5 w-1/2 gap-5">
            <h1 className="text-28px">Cloud Services</h1>
            <div>
            Transform your business with our Cloud Services, offering Infrastructure as a Service (IaaS) for scalable resources, Platform as a Service (PaaS) for seamless development, and Software as a Service (SaaS) for instant access to powerful applications. Embrace the future of technology and drive innovation effortlessly!
            </div>
          </div>
          <img src="/presentation.png" className=" w-1/3" />
        </div>

        <div className="flex flex-row justify-evenly items-center text-secondary">
            <img src="/test.png"  className="w-1/3"/>
            <div className="flex flex-col my-2.5 w-1/2 gap-5">
              <h1 className="text-28px">Managed Services</h1>
              <p>
              Elevate your operations with our comprehensive services, including Network Infrastructure Services for seamless connectivity, System Infrastructure Services for optimal performance, and robust Virtualization and Backup Solutions. Enhance your security with our tailored Network Security Services, ensuring your digital assets are always protected.
              </p>
            </div>
        </div> 
        
      </div>
    </div>
  );
};

export default WeDo;
