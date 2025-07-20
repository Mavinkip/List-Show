import MenuHeader from "@/components/MenuHeader";
import MenuSection from "@/components/MenuSection";

const Index = () => {
  const coffeeItems = [
    { name: "DOUBLE ESPRESSO", price: "150/-" },
    { name: "HOUSE WHITE COFFEE", price: "210/-" },
    { name: "AMERICAN/HOT OR DOUBLE AMERICANA", price: "190/-" },
    { name: "SINGLE CAPPUCCINO", price: "230/-" },
    { name: "DOUBLE CAPPUCCINO", price: "250/-" },
    { name: "REGULAR COFFEE", price: "360/-" },
    { name: "FLAVOURED COFFEE", price: "360/-" },
    { name: "COFFEE MOCHA", price: "280/-" },
    { name: "HOT CHOCOLATE", price: "250/-" },
  ];

  const teaItems = [
    { name: "BLACK TEA", price: "130/-" },
    { name: "BANIYAS TEA", price: "150/-" },
    { name: "HOT MILK", price: "160/-" },
    { name: "MASALA TEA", price: "170/-" },
    { name: "HERB TEA", price: "180/-" },
    { name: "LEMON TEA WITH HONEY", price: "200/-" },
    { name: "DAWA", price: "250/-" },
  ];

  const mbuziItems = [
    { name: "MBUZI CHOMA 1KG", price: "1200/-" },
    { name: "MBUZI CHOMA 3/4", price: "900/-" },
    { name: "MBUZI CHOMA 1/2", price: "600/-" },
    { name: "MBUZI FRY 1KG", price: "1200/-" },
    { name: "MBUZI FRY 3/4", price: "900/-" },
    { name: "MBUZI FRY1/2", price: "700/-" },
    { name: "MBUZI FRY1/4", price: "350/-" },
    { name: "TUMBUKIZA/BOIL 1KG", price: "1450" },
    { name: "TUMBUKIZA/BOIL 3/4", price: "1250/-" },
    { name: "TUMBUKIZA/BOIL 1/2", price: "950/-" },
    { name: "MATUMBO FRY", price: "350/-" },
  ];

  const beefItems = [
    { name: "WET FRIED BEEF 1KG", price: "1200/-" },
    { name: "WET FRIED BEEF 3/4", price: "900/-" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <MenuHeader />
        
        {/* Coffee Section */}
        <MenuSection items={coffeeItems} />
        
        {/* Tea Section */}
        <MenuSection 
          title="TEA HEAVEN" 
          items={teaItems} 
          titleColor="text-red-600"
        />
        
        {/* Mbuzi Section */}
        <MenuSection 
          title="MBUZI" 
          items={mbuziItems} 
          variant="dark"
        />
        
        {/* Beef Section */}
        <MenuSection 
          title="BEEF" 
          items={beefItems} 
          variant="dark"
        />
      </div>
    </div>
  );
};

export default Index;
