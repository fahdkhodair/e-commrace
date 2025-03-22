import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const[cart,setcart]=useState(0);
  const products = [
    {
      id: 1,
      title: "Men's T-shirt",
      description: "A comfortable and stylish choice for everyday wear",
      price: "1000 EGP",
      image: "https://www.lacoste.com.eg/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-lacoste-master-catalog/default/dwabc832df/images/TH2042_525_20.jpg?sw=1100&sh=1100"
    },
    {
      id: 2,
      title: "Fit Sweatshirt",
      description: "A comfortable and stylish sweatshirt for casual wear",
      price: "2000 EGP",
      image: "https://www.lacoste.com.eg/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-lacoste-master-catalog/default/dwc73b5121/images/SH2695_031_20.jpg?sw=1100&sh=1100"
    },
    {
      id: 3,
      title: "sports jacket",
      description: "Main fabric: 100% cotton for ultimate comfort",
      price: "3000 EGP",
      image: "https://www.lacoste.com.eg/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-lacoste-master-catalog/default/dwdd72ef30/images/BH1607_6VT_20.jpg?sw=1100&sh=1100"
    },
    {
      id: 4,
      title: "track sweatshirt",
      description: "Durable and comfortable shorts for sports and casual wear",
      price: "1109 EGP",
      image: "https://www.lacoste.com.eg/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-lacoste-master-catalog/default/dw875d9b55/images/SH2808_IBG_20.jpg?sw=1100&sh=1100"
    },
    {
      id: 5,
      title: "polo shirts",
      description: "Men's thick and cozy sweatpants for comfort",
      price: "1500 EGP",
      image: "https://www.lacoste.com.eg/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-lacoste-master-catalog/default/dw1cc83363/images/L1212_L94_20.jpg?sw=1100&sh=1100"
    }
  ];

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index < products.length - 1) {
      setIndex(index + 1);
    }
  };
 const handlecart=()=>{
  setcart(cart+1);
  alert('product added to cart');
 }
  return (
    <div className="bg-white p-10 mt-10 relative">
      <h2 className="text-center text-2xl font-bold">Featured Products</h2>
      <div className="bg-white rounded-lg shadow-lg p-4 mx-auto max-w-sm text-center">
        <img
          src={products[index].image}
          alt={products[index].title}
          className="w-full h-50 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-2">{products[index].title}</h3>
        <p className="text-gray-600 mt-1">{products[index].description}</p>
        <p className="text-gray-800 mt-1 font-bold">{products[index].price}</p>
        <button
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 m-auto"
         onClick={handlecart} >
          <ShoppingCart />
          Add to Cart
        </button><span className="text-lg font-semibold mt-5 ml-2">Cart Items: {cart}</span>
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 disabled:opacity-50"
        onClick={prev}
        disabled={index === 0}
      >
        <ChevronLeft size={30} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 disabled:opacity-50"
        onClick={next}
        disabled={index === products.length - 1}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default Featured;
