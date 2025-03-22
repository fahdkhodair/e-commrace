import { useState } from "react";
const Men = () => {
  const products = [
    { id: 1, name: 'Classic T-Shirt', price: '1400EGP', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1OB9RaI_dlx6aJEuzytJoWNbLsTV_bXv1lF25mhG29MIWQUFhazf1d4sBwROg6cDon4&usqp=CAU/150', description: 'Comfortable and stylish classic t-shirt.' },
    { id: 2, name: 'Denim Jacket', price: '2000EGP', image: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/145518/1.jpg?6468/150', description: 'Trendy denim jacket for all occasions.' },
    { id: 3, name: 'Formal Shirt', price: '1300EGP', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxKyrHLy4bqoqzjwmTb0SRKw4SsCghFKxpQ&s/150', description: 'Perfect for formal events and meetings.' },
    { id: 4, name: 'Casual Hoodie', price: '2100EGP', image: 'https://contents.mediadecathlon.com/p2848593/sq/k$e2fc10317944b57cc72d27d0b34ab56d/unisex-casual-hoodie-blue-decathlon-8926835.jpg?f=480x480&format=auto/150', description: 'Stay cozy with this casual hoodie.' },
    { id: 5, name: 'Slim Fit Jeans', price: '1300EGP', image: 'https://www.kojofit.com/cdn/shop/products/active-tapered-slim-fit-jeans-blackactive-jeanskojo-fit-859286.jpg?v=1691939002/150', description: 'Stylish slim-fit jeans with a modern look.' },
    { id: 6, name: 'Sweatpants', price: '1200EGP', image: 'https://www.lacoste.com.eg/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-lacoste-master-catalog/default/dw588dfde6/images/XH1412_166_20.jpg?sw=1100&sh=1100/150', description: 'Comfortable sweatpants for daily wear.' },
    { id: 7, name: 'Leather Belt', price: '1200EGP', image: 'https://www.lacoste.com.eg/dw/image/v2/BDCL_PRD/on/demandware.static/-/Sites-lacoste-master-catalog/default/dw4d7b07c2/images/RC4005_L32_24.jpg?sw=1100&sh=1100/150', description: 'Classic leather belt to complete your outfit.' },
    {id:8,name:'water proof jacket',price:'2000EGP',image:'https://contents.mediadecathlon.com/p2583814/k$0a23d89071ca7ac5930a69e12ca600ef/picture.jpg/150',description:'comfortable and stylish all ossasion jacket'}
  ];
  const [cart, setCart] = useState(0);

  const handlecart = () => {
    setCart(cart + 1);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-3 ">
    {products.map((product) => (
      <div key={product.id} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
        <img src={product.image} alt={product.name} className="w-full h-50 object-cover rounded-t-2xl mb-4" />
        <h2 className="text-xl font-bold mb-2 text-center">{product.name}</h2>
        <p className="text-gray-600 mb-2 text-center">{product.description}</p>
        <p className="text-lg font-semibold mb-4 text-center">{product.price}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition m-auto flex items-center" onClick={handlecart}>
          Add to Cart
        </button>
        <span className="text-lg font-semibold mt-5 ml-2">Cart Items: {cart}</span>
      </div>
    ))}
  </div>
  )
}

export default Men;