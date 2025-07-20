interface MenuItem {
  name: string;
  price: string;
  image?: string;
}

interface MenuSectionProps {
  title?: string;
  items: MenuItem[];
  variant?: 'vintage' | 'dark';
  titleColor?: string;
}

const MenuSection = ({ title, items, variant = 'vintage', titleColor }: MenuSectionProps) => {
  const isVintage = variant === 'vintage';

  return (
    <div className={`relative overflow-hidden ${isVintage ? 'bg-menu-vintage' : 'bg-menu-black'}`}>
      {/* Vintage background texture */}
      {isVintage && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-menu-vintage-dark/20 to-menu-vintage-dark/40"></div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M20,20 Q50,5 80,20 Q95,50 80,80 Q50,95 20,80 Q5,50 20,20" fill="currentColor" className="text-menu-vintage-dark" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="20" cy="20" r="3" fill="currentColor" className="text-menu-vintage-dark" />
              <circle cx="40" cy="15" r="2" fill="currentColor" className="text-menu-vintage-dark" />
              <circle cx="60" cy="25" r="2.5" fill="currentColor" className="text-menu-vintage-dark" />
              <circle cx="80" cy="10" r="1.5" fill="currentColor" className="text-menu-vintage-dark" />
            </svg>
          </div>
        </div>
      )}

      <div className="relative z-10 p-6">
        {title && (
          <h3 className={`text-xl font-bold mb-6 ${titleColor || (isVintage ? 'text-red-600' : 'text-menu-gold')}`}>
            {title}
          </h3>
        )}

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Product Image */}
              {item.image && (
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Item Details */}
              <div className="flex-1 flex justify-between items-center">
                <span className={`font-medium ${isVintage ? 'text-menu-text-dark' : 'text-menu-text-light'}`}>
                  {item.name}
                </span>
                <div className="flex-1 mx-3 border-b border-dotted border-current opacity-40"></div>
                <span className={`font-bold ${isVintage ? 'text-menu-text-dark' : 'text-menu-text-light'}`}>
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements for vintage sections */}
      {isVintage && (
        <>
          <div className="absolute top-2 left-2 w-16 h-16 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10,50 Q30,20 50,30 Q70,10 90,30 Q80,50 70,70 Q50,90 30,70 Q10,70 10,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-menu-vintage-dark" />
            </svg>
          </div>
          <div className="absolute bottom-2 right-2 w-20 h-12 opacity-15">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M5,25 Q25,5 45,25 Q65,5 85,25 Q75,45 55,25 Q35,45 15,25 Q5,35 5,25" fill="currentColor" className="text-menu-vintage-dark" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuSection;