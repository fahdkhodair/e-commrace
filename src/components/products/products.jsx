import { useState } from "react"
const Products = () => {
    const offers=[
        {   
            id:1,
            title:"sweatshirt",
            description:"Acomfortable and stylish for every wear",
            price:"1190EGP",
            image:"https://dfcdn.defacto.com.tr/6/X7405AZ_25SP_BG735_02_02.jpg"
        },
     {
        id:2,
        title:"Blazer jacket",
        description:"Modern fit and comfortable",
        price:"1100EGP",
        image:"https://dfcdn.defacto.com.tr/6/C5988AX_24SP_GR468_02_01.jpg"
     },
     {
        id:3,
        title:"New T-shirt",
        description:"New Regular Fit Crew Neck T-Shirt",
        price:"1290EGP",
        image:"https://dfcdn.defacto.com.tr/6/V7699AZ_25SP_PN672_02_01.jpg"
     }
    ]
const[count,setcount]=useState(0)
const handlecart=()=>{
  setcount(count+1);
  alert('product added to cart')
}
  return (
    <div className="bg-gray-200 p-20 mt-40">
        <div className=" top-0">
        <h1 className="text-center top-2 text-3xl">
            products
        </h1>
        <p className="text-center top-2 text-3xl">check our lastest offers</p>
        <div className="flex  justify-center gap-5 p-6  cursor-pointer ">
            {offers.map((card) => (
                <div key={card.id} className="bg-white shadow-lg rounded-xl p-4 w-70 flex flex-col items-center 
          transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <img src={card.image} alt={card.title} className="w-full rounded-lg h-50" />
                    <h3 className="text-lg font-semibold mt-2 text-center">{card.title}</h3> 
                    <p className="text-lg font-semibold mt-2 text-center">{card.description}</p>
                    <p className="text-lg font-semibold mt-2 text-center">{card.price}</p>
                    <div className="flex justify-center mt-4 w-fulltransition delay-150 duration-300 ease-in-out ... ">
                    <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={handlecart}>
            shop Now
          </button><span className="text-lg font-semibold mt-5 ml-2">Cart Items: {count}</span>
          </div>
                </div>
            ))}
        </div>
</div>
    </div>
  )
}

export default Products;