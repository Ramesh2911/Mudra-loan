import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#16191e] text-white px-6 pt-10 pb-5">
      <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-2">

        {/* Purpose Section */}
        <div className="flex items-start space-x-4">
          <img
            src="https://www.mudraloanindia.org.in/public/front/img/favicon.png" // Replace with your actual image path
            alt="Mudra Logo"
            className="object-contain w-20 h-20"
          />
          <div>
            <h2 className="mb-2 text-lg font-semibold text-yellow-400">
              THE PURPOSE OF MUDRA LOAN
            </h2>
            <p className="text-sm leading-6 text-white/80">
              Mudra Yojna is extended for a variety of purposes which provides income generation and
              employment creation in Manufacturing, Services, Retail and Agri. Allied Activities.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-yellow-400">CONTACT US</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <span className="w-24 font-semibold text-white">Helpline:</span>
              <a href="tel:+919800136437" className="text-blue-400 hover:underline">
                +91 9134254602
              </a>
            </div>
            <div className="flex items-center">
              <span className="w-24 font-semibold text-white">CIN:</span>
              <span className="text-yellow-400">U65100MH2015PLC274695</span>
            </div>
            <div className="flex items-start">
              <span className="w-24 font-semibold text-white">Address:</span>
              <span>
                SWAVALAMBAN BHAVAN, C-11, G-BLOCK,<br />
                BANDRA KURLA COMPLEX, BANDRA EAST,<br />
                MUMBAI – 400 051
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-24 font-semibold text-white">Email Id:</span>
              <a href="Info@mudraloan.in" className="text-white/90 hover:underline">
                Info@mudraloan.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-4 mt-8 text-sm text-center border-t border-white/20 text-white/60">
        Mudra Loan India
      </div>
    </footer>
  );
};

export default Footer;
