import { Card, CardContent } from "@/components/ui/card";

const VisionSection = () => {
  const products = [
    {
      name: "Crude Palm Oil",
      description: "High-quality raw palm oil extracted using sustainable methods",
      icon: "🛢️"
    },
    {
      name: "Refined Consumer Oils",
      description: "Premium branded cooking oils ready for supermarket distribution", 
      icon: "🍳"
    },
    {
      name: "Groundnut Oil",
      description: "Nutritious groundnut oil processed to the highest standards",
      icon: "🥜"
    },
    {
      name: "Palm Kernel Cake (PKC)",
      description: "Valuable animal feed byproduct maximizing resource utilization",
      icon: "🌰"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vision Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-farm-green">Our</span>
            <span className="text-farm-yellow"> Vision</span>
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We are building a <strong className="text-farm-green">modern farm powered by innovation and sustainability</strong>. 
            Our primary focus is cultivating oil palm and refining it into high-value products.
          </p>
        </div>

        {/* Process Flow */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-farm-green">
            From Harvest to Market
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-farm-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h4 className="text-lg font-semibold text-gray-800">Sustainable Cultivation</h4>
              <p className="text-gray-600">Oil palm grown with environmental responsibility</p>
            </div>
            
            <div className="hidden md:block text-farm-green text-3xl">→</div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-farm-yellow rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h4 className="text-lg font-semibold text-gray-800">Automated Refinery</h4>
              <p className="text-gray-600">Fully automated processing and refinement</p>
            </div>
            
            <div className="hidden md:block text-farm-green text-3xl">→</div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-farm-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h4 className="text-lg font-semibold text-gray-800">Market Ready</h4>
              <p className="text-gray-600">Sealed, branded products for supermarket shelves</p>
            </div>
          </div>
        </div>

        {/* Product Portfolio */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-farm-green">
            Our Product Portfolio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-primary transition-spring border-2 border-gray-100 hover:border-farm-green/20">
                <CardContent className="space-y-4 p-0">
                  <div className="text-4xl">{product.icon}</div>
                  <h4 className="text-xl font-semibold text-farm-green">{product.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;