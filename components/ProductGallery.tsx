const ProductGallery = () => {
    // Array of all 20 product images
    const productImages = [
        "/images/product1.png",
        "/images/product2.png",
        "/images/product3.png",
        "/images/product4.png",
        "/images/product5.png",
        "/images/product6.png",
        "/images/product7.png",
        "/images/product8.png",
        "/images/product9.png",
        "/images/product10.png",
        "/images/product11.png",
        "/images/product12.png",
        "/images/product13.png",
        "/images/product14.png",
        "/images/product15.png",
        "/images/product16.png",
        "/images/product17.png",
        "/images/product18.png",
        "/images/product19.png",
        "/images/product20.png",
    ]

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
    )
}

export default ProductGallery
