import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4e05ac74-23e3-4e52-b875-7d33842d5061.png"
              alt="Nature's Gold Farm"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#vision" className="text-gray-700 hover:text-farm-green transition-smooth font-medium">Vision</a>
            <a href="#progress" className="text-gray-700 hover:text-farm-green transition-smooth font-medium">Progress</a>
            <a href="#technology" className="text-gray-700 hover:text-farm-green transition-smooth font-medium">Technology</a>
            <a href="#future" className="text-gray-700 hover:text-farm-green transition-smooth font-medium">Future</a>
          </div>

          {/* CTA Button */}
          <Button variant="farm" className="hidden sm:inline-flex">
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;