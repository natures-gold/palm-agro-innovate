import { Card, CardContent } from "@/components/ui/card";

const ProgressSection = () => {
  const stats = [
    {
      number: "1,500",
      label: "Palm Trees Planted",
      description: "Healthy, mature trees ready for harvest",
      icon: "🌴"
    },
    {
      number: "5,000",
      label: "Seedlings in Nursery",
      description: "Next generation preparing for planting",
      icon: "🌱"
    },
    {
      number: "150",
      label: "Acres Under Cultivation",
      description: "Expanding our sustainable farming footprint",
      icon: "🌾"
    },
    {
      number: "₦250M - ₦300M",
      label: "Projected Annual Revenue",
      description: "Conservative estimates for current operations",
      icon: "💰"
    }
  ];

  const futureGoals = [
    {
      metric: "100,000",
      label: "Trees (10-year goal)",
      revenue: "₦3.2B - ₦4.3B annually"
    }
  ];

  return (
    <section id="progress" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-farm-green">Our Current</span>
            <span className="text-farm-yellow"> Progress</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From seed to success – tracking our journey toward becoming Nigeria's 
            leading sustainable agriculture enterprise.
          </p>
        </div>

        {/* Current Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-primary transition-spring border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-4 p-0">
                <div className="text-4xl">{stat.icon}</div>
                <div className="text-3xl font-bold text-farm-green">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-primary rounded-3xl p-8 text-white text-center shadow-elegant">
          <h3 className="text-2xl font-bold mb-4">10-Year Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-4xl font-bold text-farm-yellow">100,000</div>
              <div className="text-lg">Trees</div>
            </div>
            <div className="text-2xl font-light">→</div>
            <div>
              <div className="text-3xl font-bold text-farm-yellow">₦3.2B - ₦4.3B</div>
              <div className="text-lg">Annual Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;