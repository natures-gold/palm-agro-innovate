import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FutureSection = () => {
  const milestones = [
    {
      year: "2025",
      title: "Expansion Phase",
      goals: ["50,000 trees planted", "Advanced AI deployment", "First major harvest"],
      status: "In Progress"
    },
    {
      year: "2027",
      title: "Market Leadership",
      goals: ["Full refinery operations", "Brand development", "Regional distribution"],
      status: "Planned"
    },
    {
      year: "2030",
      title: "Agritech Ecosystem",
      goals: ["100k+ trees", "Technology licensing", "Industry transformation"],
      status: "Vision"
    }
  ];

  return (
    <section id="future" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-farm-green">The</span>
            <span className="text-farm-yellow"> Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            By combining large-scale farming with cutting-edge technology, we aim to become 
            a leader in sustainable agriculture and drive industry transformation across Nigeria.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="w-5/12">
                  <Card className="p-6 shadow-primary border-2 border-farm-green/20 hover:border-farm-green/40 transition-spring">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-farm-green">{milestone.year}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          milestone.status === 'In Progress' ? 'bg-farm-yellow text-white' :
                          milestone.status === 'Planned' ? 'bg-farm-green text-white' :
                          'bg-gray-200 text-gray-700'
                        }`}>
                          {milestone.status}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">{milestone.title}</h4>
                      <ul className="space-y-2">
                        {milestone.goals.map((goal, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-farm-green rounded-full"></div>
                            <span className="text-gray-600">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-farm-yellow rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 text-white shadow-elegant">
          <h3 className="text-3xl font-bold mb-4">Join Our Journey</h3>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Partner with us to revolutionize agriculture in Nigeria. Together, we can build 
            a sustainable future powered by innovation and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-farm-green hover:bg-gray-100">
              Investment Opportunities
            </Button>
            <Button variant="secondary" size="lg" className="bg-white text-farm-green hover:bg-gray-100">
              Technology Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;