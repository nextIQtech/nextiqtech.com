const Footer = () => {
    return (
      <footer className="bg-white shadow-lg">
        <div className="container mx-auto py-6 flex flex-wrap items-center justify-between">
          <div className="flex items-center text-left">
            <img src="next-iq/images/logo.svg" alt="Logo" />
          </div>
  
          <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <li className="hover:text-purple-600 cursor-pointer">SERVICES</li>
            <li className="hover:text-purple-600 cursor-pointer">PRODUCTS</li>
            <li className="hover:text-purple-600 cursor-pointer">ABOUT</li>
            <li className="hover:text-purple-600 cursor-pointer">CONTACT US</li>
          </ul>
  
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
              <li className="hover:text-purple-600 cursor-pointer">TERMS</li>
              <li className="hover:text-purple-600 cursor-pointer">PRIVACY</li>
            </ul>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-purple-600 text-gray-800">
                <img src="next-iq/images/facebook.svg" alt="fb"/>
              </a>
              <a href="/" className="hover:text-purple-600 text-gray-800">
              <img src="next-iq/images/dribal.svg" alt="dribal"/>
              </a>
              <a href="/" className="hover:text-purple-600 text-gray-800">
                <img src="next-iq/images/insta.svg" alt="insta"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  