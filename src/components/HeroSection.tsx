
export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
              Exquisite
              <span className="block text-yellow-600">Jewellery</span>
              Collection
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Discover our handcrafted luxury pieces, each telling a unique story of elegance and sophistication.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Explore Collection
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:border-gray-400 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80" 
                alt="Luxury jewellery piece" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="absolute top-4 right-4 w-72 h-72 bg-yellow-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 left-4 w-48 h-48 bg-gray-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
