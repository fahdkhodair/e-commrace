import { useState } from "react";
const Women = () => {
    const[cart,setcart]=useState(0);
    const products = [
        { id: 1, name: 'pullvoer', price: '1400EGP', image: 'https://s.alicdn.com/@sc04/kf/H9e1259a6eafb4801bc63127a391d2775q.png_720x720q50.png', description: 'Comfortable and high quality for best prices.' },
        { id: 2, name: 'Denim Jacket', price: '2000EGP', image: 'https://cdn.media.amplience.net/i/gapprod/SP258101_Denim_img_MOB', description: 'orginac cotton denim jacket.' },
        { id: 3, name: 'Formal Shirt', price: '1300EGP', image: 'https://www.willsoor.co.uk/images/produkty/thumb/12912img_2848_4.jpg', description: 'Perfect for formal events and meetings.' },
        { id: 4, name: 'sweatshirt', price: '2100EGP', image: 'https://rapanuiclothing.com/cdn/shop/files/womens-oversized-sweatshirt-935581.jpg?v=1730809878', description: 'stylish and comfortable high quality' },
        { id: 5, name: 'Sport jacket', price: '1300EGP', image: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/a83e25771a2f4c5995a60e5cd3c90801_9366/IM1886_HM1.jpg', description: 'Sport jacket for women.' },
        { id: 6, name: 'jacketBlazer', price: '1200EGP', image: 'https://img.joomcdn.net/e1c36de099dc04d1a806cdb4a77ccced19e76bf2_original.jpeg', description: 'Comfortable and stylish for women.' },
        { id: 7, name: 'track suit', price: '1200EGP', image: 'https://img.joomcdn.net/913cf431f1e10977b5ce71573176d7a242d08607_original.jpeg', description: 'Classic track suit belt to complete your outfit.' },
        {id:8,name:'woman hjab suit',price:'2000EGP',image:'https://img.joomcdn.net/53e8bed071a885054c2c44df1dc1bc9c57f655c8_1024_1024.jpeg',description:'comfortable and stylish'}
      ];
const handlecart=()=>{
    setcart(cart+1);
}
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
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

export default Women;