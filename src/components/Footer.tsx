const Footer = () => {
  return (
    <footer className="bg-farm-green text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4e05ac74-23e3-4e52-b875-7d33842d5061.png"
                alt="Nature's Gold Farm"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-xl font-bold">NATURE'S</div>
                <div className="text-sm font-medium">GOLD FARM</div>
              </div>
            </div>
            <p className="text-gray-200">
              Revolutionizing sustainable agriculture through innovation and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#vision" className="text-gray-200 hover:text-farm-yellow transition-smooth">Vision</a></li>
              <li><a href="#progress" className="text-gray-200 hover:text-farm-yellow transition-smooth">Progress</a></li>
              <li><a href="#technology" className="text-gray-200 hover:text-farm-yellow transition-smooth">Technology</a></li>
              <li><a href="#future" className="text-gray-200 hover:text-farm-yellow transition-smooth">Future</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li className="text-gray-200">Crude Palm Oil</li>
              <li className="text-gray-200">Refined Consumer Oils</li>
              <li className="text-gray-200">Groundnut Oil</li>
              <li className="text-gray-200">Palm Kernel Cake</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-200">
              <p>info@naturesgoldfarm.com</p>
              <p>+2347033262541</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-200">
          <p>&copy; 2024 Nature's Gold Farm. All rights reserved. Built with sustainable innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;