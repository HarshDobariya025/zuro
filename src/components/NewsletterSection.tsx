import {
  ArrowRight,
  PieChart,
  Calendar,
  BarChart3,
  Grid3X3,
  Twitter,
  Instagram,
  Dribbble,
  Mail,
} from "lucide-react";

function NewsletterSection() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="bg-[#0F4037] max-w-7xl mx-auto p-4 rounded-4xl">
        <div className="relative bg-[#b8ff8d] rounded-3xl p-12 py-28 mb-0 shadow-2xl overflow-hidden">
          <div className="absolute top-16 right-20 opacity-30">
            <PieChart className="h-8 w-8 text-gray-800" />
          </div>
          <div className="absolute top-32 right-32 opacity-20">
            <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
          </div>
          <div className="absolute top-48 right-16 opacity-25">
            <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
          </div>
          <div className="absolute bottom-32 right-24 opacity-30">
            <Grid3X3 className="h-6 w-6 text-gray-800" />
          </div>
          <div className="absolute bottom-16 right-12 opacity-30">
            <BarChart3 className="h-8 w-8 text-gray-800" />
          </div>
          <div className="absolute top-20 right-8 opacity-25">
            <Calendar className="h-6 w-6 text-gray-800" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-7xl font-semibold text-gray-900 mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Sign up for our newsletter to get product updates, tips, and
              industry insights delivered right to your inbox.
            </p>
            <button className="bg-[#0F4037] cursor-pointer text-white rounded-full py-4 px-8 flex items-center font-semibold">
              <span>Get this Template</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>

        <div className="rounded-b-3xl px-12 py-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-white text-xl font-medium mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Faq
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl font-medium mb-6">
                Support & Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Email Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Phone Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl font-medium mb-6">
                Stay connected
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  <Dribbble className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-5">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <img
                  src="/zuro-icon-footer.png"
                  alt="Zuro Logo"
                  className="h-10 mr-3 mt-3"
                />
                <span className="text-white text-5xl font-medium">zuro</span>
              </div>
              <p className="text-gray-300 text-medium max-w-md leading-relaxed">
                At Zuro, we believe in empowering teams of all sizes with
                intuitive tools for automation and seamless collaboration.
              </p>
            </div>
            <div className="text-gray-400 text-base">
              © 2025 Zuro. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsletterSection;
