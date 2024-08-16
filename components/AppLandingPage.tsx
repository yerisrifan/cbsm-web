import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">CBSM</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-green-400">
            Blog
          </a>
          <a href="#" className="hover:text-green-400">
            Contact
          </a>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Get the App
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              The Ultimate Canary Breeding Management Tool
            </h1>
            <p className="text-xl mb-6">
              Streamline your canary breeding process with our comprehensive
              management system.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★★★★★</span>
                <span>4.8</span>
              </div>
              <span>App Store</span>
              <span>|</span>
              <span>Google Play</span>
            </div>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600">
              Get the App
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-64 h-128 mx-auto">
              <img
                src="/api/placeholder/320/640"
                alt="CBSM App Interface"
                className="rounded-3xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8">
        <p>
          We are backed by a team of dedicated breeders who share our passion
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
