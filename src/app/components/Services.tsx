export default function Services() {
  const services = [
    {
      title: "Civil Engineering Construction",
      description: "Innovative engineering solutions tailored for urban and industrial development.",
      icon: "🏗️",
    },
    {
      title: "Repair & Maintenance",
      description: "Proactive maintenance and high-quality repairs for durability and safety.",
      icon: "🛠️",
    },
    {
      title: "Power Supply Solutions",
      description: "Reliable energy solutions ensuring uninterrupted power supply.",
      icon: "⚡",
    },
    {
      title: "Consultancy Services",
      description: "Expert advisory services for project planning, execution, and compliance.",
      icon: "📊",
    },
    {
      title: "Equipment Supply",
      description: "Top-tier construction equipment and materials for optimal project execution.",
      icon: "🚜",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
        Our <span className="text-blue-600">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-8 bg-white shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
          >
            <div className="text-5xl mb-6 text-blue-500 transition-transform duration-300 group-hover:rotate-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">{service.description}</p>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
