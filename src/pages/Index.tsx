

const Index = () => {
  // Array of all 12 product images
  const productImages = [
    "/images'/product one.png",
    "/images'/product 2.png",
    "/images'/product  3.png",
    "/images'/product 4.png",
    "/images'/product  5.png",
    "/images'/product 6.png",
    "/images'/product 7.png",
    "/images'/product  8.png",
    "/images'/product  9.png",
    "/images'/product 10.png",
    "/images'/product  11.png",
    "/images'/product 12.png"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto bg-white shadow-2xl overflow-hidden">


        {/* Product Images - Each taking full section width */}
        <div className="space-y-6 p-4">
          {productImages.map((imagePath, index) => (
            <div
              key={index}
              className="w-full bg-gradient-to-br from-menu-bg-light to-menu-bg-dark rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={imagePath}
                alt={`Product ${index + 1}`}
                className="w-full h-196 object-cover"
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
