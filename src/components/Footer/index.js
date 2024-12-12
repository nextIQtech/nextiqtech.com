const Footer = () => {
    return (
      <footer className="bg-white shadow-lg">
        <div className="px-6 mx-auto py-6 flex flex-wrap items-center justify-between">
          <div className="flex items-center text-left">
          <a href="/" style={{ textDecoration: "none" }}>
            <img src="./images/logo.svg" width={200} alt="Logo" />
            </a>
          </div>
  
          <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <li className="hover:text-purple-600 cursor-pointer"><a href="#services" style={{ textDecoration: "none" }}>SERVICES</a></li>
            <li className="hover:text-purple-600 cursor-pointer"><a href="#products" style={{ textDecoration: "none" }}>PRODUCTS</a></li>
            <li className="hover:text-purple-600 cursor-pointer"><a href="#about" style={{ textDecoration: "none" }}>ABOUT</a></li>
            <li className="hover:text-purple-600 cursor-pointer"><a href="/contact" style={{ textDecoration: "none" }}>CONTACT US</a></li>
          </ul>
  
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
              <li className="hover:text-purple-600 cursor-pointer"><a href="/terms-and-conditions" style={{ textDecoration: "none" }}>TERMS</a></li>
              <li className="hover:text-purple-600 cursor-pointer"><a href="/privacy-policy" style={{ textDecoration: "none" }}>PRIVACY</a></li>
            </ul>
            {/* <div className="flex space-x-4">
              <a href="/" className="hover:text-purple-600 text-gray-800">
                <img src="./images/facebook.svg" alt="fb"/>
              </a>
              <a href="/" className="hover:text-purple-600 text-gray-800">
              <img src="./images/dribal.svg" alt="dribal"/>
              </a>
              <a href="/" className="hover:text-purple-600 text-gray-800">
                <img src="./images/insta.svg" alt="insta"/>
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  