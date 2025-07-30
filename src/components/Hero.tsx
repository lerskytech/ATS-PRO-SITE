import { FaChevronRight } from 'react-icons/fa';
import DigitalTree from './DigitalTree';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_background.png"
          alt="Digital Tree Growth"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animation Layer */}
      <DigitalTree />

      {/* Content */}
      <div className="relative z-20 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shadow-lg">Transforming Legacies into Landmarks</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Elite Web Innovation for Businesses That Refuse to Settle</p>
        <button 
          className="mt-8 group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-in-out rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 group-hover:-translate-y-1"
        >
          <span className="absolute inset-0 w-full h-full border-2 border-transparent rounded-lg group-hover:border-blue-500/50 transition-all duration-300 ease-in-out group-hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.5)]"></span>
          <span>Start Your Ascent</span>
          <FaChevronRight className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
