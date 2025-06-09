import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGreen text-gray-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primaryGreen transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-primaryGreen transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-primaryGreen transition-colors">Pricing</a></li>
            <li><a href="#blog" className="hover:text-primaryGreen transition-colors">Blog</a></li>
            <li><a href="#faq" className="hover:text-primaryGreen transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-primaryGreen transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Support & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support & Contact</h3>
          <ul className="space-y-2">
            <li><a href="mailto:support@zuro.com" className="hover:text-primaryGreen transition-colors">support@zuro.com</a></li>
            <li><a href="tel:+1234567890" className="hover:text-primaryGreen transition-colors">+1 (234) 567-890</a></li>
            <li><a href="#privacy" className="hover:text-primaryGreen transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-primaryGreen transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay connected</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-primaryGreen transition-colors">
              {/* Placeholder for social icon */}
              <img src="/path/to/twitter-icon.svg" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primaryGreen transition-colors">
              {/* Placeholder for social icon */}
              <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primaryGreen transition-colors">
              {/* Placeholder for social icon */}
              <img src="/path/to/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Zuro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;