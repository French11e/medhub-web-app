import logo from "../assets/logo.png"; // Update with your logo path

const Footer = () => {
  return (
    <footer className="py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Medical Diagnostic Center"
            className="w-24 h-24"
          />
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-gray-600 font-medium mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-800 hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-gray-800 hover:text-blue-500">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 hover:text-blue-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-gray-600 font-medium mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#privacy" className="text-gray-800 hover:text-blue-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-gray-800 hover:text-blue-500">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#cookies" className="text-gray-800 hover:text-blue-500">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-gray-600 font-medium mb-4">Social Media</h3>
          <p className="text-gray-800 hover:text-blue-500">
            <a
              href="https://www.facebook.com/medhubdiagnostic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
