import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern sustainable palm oil farm with advanced technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-farm-green/80 via-farm-green/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                The Future of
                <span className="block text-transparent bg-gradient-accent bg-clip-text">
                  Sustainable
                </span>
                Agriculture
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed">
                Combining large-scale palm oil farming with cutting-edge AI technology 
                to revolutionize agriculture in Nigeria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-farm-green">
                Our Technology
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-farm-yellow">1,500</div>
                <div className="text-sm text-gray-200">Trees Planted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-farm-yellow">150</div>
                <div className="text-sm text-gray-200">Acres Under Cultivation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-farm-yellow">₦300M</div>
                <div className="text-sm text-gray-200">Projected Annual Revenue</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-elegant">
              <img 
                src="/lovable-uploads/4e05ac74-23e3-4e52-b875-7d33842d5061.png"
                alt="Nature's Gold Farm Logo"
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-farm-yellow rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-farm-yellow rounded-full animate-float animation-delay-2000 opacity-40"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white rounded-full animate-float animation-delay-4000 opacity-30"></div>
    </section>
  );
};

export default Hero;