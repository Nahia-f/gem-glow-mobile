
export const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: "Eternal Elegance",
      description: "Timeless pieces for every occasion",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
      itemCount: 24
    },
    {
      id: 2,
      name: "Modern Minimalist",
      description: "Clean lines, contemporary design",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      itemCount: 18
    },
    {
      id: 3,
      name: "Vintage Romance",
      description: "Classic designs with a romantic touch",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
      itemCount: 32
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections, each designed to capture different moments and moods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{collection.name}</h3>
                  <p className="text-gray-200 text-sm mb-2">{collection.description}</p>
                  <p className="text-gray-300 text-xs">{collection.itemCount} pieces</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
