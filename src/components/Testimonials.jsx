const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    text: "The cakes are absolutely amazing! So soft and delicious.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    text: "Beautifully decorated cakes and perfect for every occasion.",
  },
  {
    id: 3,
    name: "Priya Reddy",
    text: "Fast delivery, fresh cakes, and incredible taste!",
  },
];

function Testimonials() {
  return (
    <div className="bg-pink-50 py-12 mt-16">
      <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(item => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 animate-fadeIn"
          >
            <p className="text-gray-600 mb-4">"{item.text}"</p>
            <h4 className="font-semibold text-pink-700">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
