import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TechnologySection = () => {
  const technologies = [
    {
      title: "AI-Powered Monitoring",
      description: "Advanced machine learning algorithms analyze crop health, predict optimal harvest times, and detect potential issues before they impact yield.",
      icon: "🤖",
      features: ["Real-time health analytics", "Predictive maintenance", "Yield optimization"]
    },
    {
      title: "Drone Surveillance",
      description: "Autonomous drones provide comprehensive aerial monitoring, mapping plantation boundaries, and identifying areas requiring attention.",
      icon: "🚁",
      features: ["Automated mapping", "Pest detection", "Irrigation monitoring"]
    },
    {
      title: "Smart Inventory System",
      description: "Every tree is digitally tagged and tracked through our proprietary inventory management system for complete traceability.",
      icon: "📊",
      features: ["Digital tree tracking", "Growth monitoring", "Harvest scheduling"]
    },
    {
      title: "Automated Refinery",
      description: "State-of-the-art processing facility transforms raw palm fruit into high-value refined products ready for market distribution.",
      icon: "🏭",
      features: ["Automated processing", "Quality control", "Packaging systems"]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-farm-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-farm-yellow">Agritech</span> Edge
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Beyond traditional farming, we're building an AI-powered ecosystem that 
            maximizes efficiency, minimizes waste, and scales beyond our own operations.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-spring">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <CardTitle className="text-2xl text-white">{tech.title}</CardTitle>
                </div>
                <p className="text-gray-100">{tech.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tech.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-farm-yellow rounded-full"></div>
                      <span className="text-sm text-gray-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Offering */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold mb-4">
            Technology as a <span className="text-farm-yellow">Service</span>
          </h3>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Our agritech platform isn't just for our farm – we're creating a scalable 
            ecosystem that other farms can adopt to revolutionize their operations.
          </p>
          <Button variant="secondary" size="lg" className="bg-farm-yellow text-farm-green hover:bg-farm-yellow-light">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;