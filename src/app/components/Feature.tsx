const features = [
  { title: "High-Quality Materials", description: "We use only the best materials for durability and strength." },
  { title: "Experienced Professionals", description: "Our team consists of highly trained and experienced builders." },
  { title: "On-Time Project Delivery", description: "We meet deadlines without compromising on quality." },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow hover:shadow-lg transition duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
