// components/Features.tsx
const features = [
    { title: "High-Quality Materials", description: "We use only the best materials for durability and strength." },
    { title: "Experienced Professionals", description: "Our team consists of highly trained and experienced builders." },
    { title: "On-Time Project Delivery", description: "We meet deadlines without compromising on quality." },
  ];
  
  export default function Features() {
    return (
      <section className="w-full max-w-6xl py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  