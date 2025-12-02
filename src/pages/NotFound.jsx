import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div className="min-h-screen bg-[#080B1F] flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-6xl font-alatsi mb-4 text-[#E29D42]">Error 404!</h1>
        <p className="text-xl mb-6 font-alata text-white">
          Oops! We can’t seem to find the page you’re looking for.
        </p>

        <a
          href="/"
          className="border border-white text-white font-alata px-6 py-2 rounded-md hover:bg-white hover:text-[#080B1F] cursor-pointer transition">
            
          Go To Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;



