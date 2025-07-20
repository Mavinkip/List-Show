import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const MenuHeader = () => {
  return (
    <div className="bg-menu-black text-menu-gold relative overflow-hidden min-h-[300px] flex flex-col items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-menu-gold/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_24px,rgba(255,204,0,0.1)_25px,rgba(255,204,0,0.1)_26px,transparent_27px,transparent_74px,rgba(255,204,0,0.1)_75px,rgba(255,204,0,0.1)_76px,transparent_77px),linear-gradient(-45deg,transparent_24px,rgba(255,204,0,0.1)_25px,rgba(255,204,0,0.1)_26px,transparent_27px,transparent_74px,rgba(255,204,0,0.1)_75px,rgba(255,204,0,0.1)_76px,transparent_77px)] bg-[50px_50px]"></div>
      </div>
      
      {/* Share button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 text-menu-gold hover:bg-menu-gold/20 border border-menu-gold/30 rounded-full w-10 h-10 p-0"
      >
        <Share2 className="h-4 w-4" />
      </Button>

      {/* Logo */}
      <div className="relative z-10 text-center">
        <div className="border-2 border-menu-gold p-6 mb-4 transform rotate-45 w-24 h-24 flex items-center justify-center">
          <span className="text-4xl font-bold transform -rotate-45">B</span>
        </div>
        <h1 className="text-2xl font-bold tracking-wide">BANIYAS</h1>
        <h2 className="text-lg tracking-wider">SQUARE</h2>
        
        <div className="mt-8 text-sm">
          <p className="text-menu-text-light/70">Powered by :</p>
          <p className="text-blue-400 font-medium">Harley Systems</p>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;