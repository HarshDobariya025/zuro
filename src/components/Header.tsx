import { CreditCard } from 'lucide-react';

function Header() {
  return (
    <header className="flex justify-between items-center py-7 px-9 md:px-16 bg-lightBg z-10 position: sticky top-0">
      <div className="flex items-center space-x-2 bg-white rounded-full py-2 px-6">
        <img
          src="zuro-icon.png" 
          alt="Zuro Icon"
          className="h-6 w-6"
        />
        <span className="text-darkText text-2xl font-bold pb-1">zuro</span>
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-8 bg-white rounded-full py-3 px-8">
          <li>
            <a href="#features" className="text-darkText text-base font-medium hover:text-primaryGreen transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-darkText text-base font-medium hover:text-primaryGreen transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#blog" className="text-darkText text-base font-medium hover:text-primaryGreen transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a href="#faq" className="text-darkText text-base font-medium hover:text-primaryGreen transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" className="text-darkText text-base font-medium hover:text-primaryGreen transition-colors">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <button className="flex items-center space-x-2 bg-white rounded-full py-3 px-6 shadow-xl hover:bg-gray-50 transition-colors">
        <span className="text-darkText text-base font-medium">Get Template</span>
        <CreditCard />
      </button>
    </header>
  );
};

export default Header;