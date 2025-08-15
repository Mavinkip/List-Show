import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500); // Wait for fade out animation
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping animation-delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping animation-delay-700"></div>
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Main logo */}
        <div className="relative mb-8">
          <div className="w-48 h-48 flex items-center justify-center animate-scale-in">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full h-full object-contain animate-logo-glow filter drop-shadow-2xl"
            />
          </div>

          {/* Rotating ring around logo */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin origin-center"></div>
        </div>

        {/* Text */}
        <div className="text-center animate-fade-in animation-delay-500">
          <h1 className="text-3xl font-bold tracking-wide text-white mb-2">BANIYAS</h1>
          <h2 className="text-xl tracking-wider text-white/80 mb-6">SQUARE</h2>

          <div className="animate-fade-in animation-delay-1000">
            <p className="text-white/60 text-sm mb-1">Powered by</p>
            <p className="text-blue-400 font-medium">Harley Systems</p>
          </div>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex space-x-1 animate-fade-in animation-delay-1500">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
