import { Link } from "react-router-dom";
import logo from "../../assets/hood.png";
import ShoppingIcon from "../shoppingcarticon/shoppingicon";
const Nav = () => {
  return (
    <div className=" bg-red-500 mr-auto">
      <div className="flex justify-left items-center text-xl ml-5">
        <img src={logo} alt="" className="h-10 w-10 mr-2 mt-5"/>
        <h2 className="text-2xl font-bold mt-5">gold-men</h2>
      </div>
      <div className="flex justify-center items-center font nounderline list-none gap-10 top-10 p-2">
        <nav className="absolute top-8">
          <ul className="flex space-x-6" >
            <li><Link to="/Home" className="text-black text-xl hover:text-blue-500 transition duration-500 ">Home</Link></li>
            <li><Link to="/men" className="text-black text-xl hover:text-blue-500 transition duration-500 ">Men</Link></li>
            <li><Link to="/women" className="text-black text-xl hover:text-blue-500 transition duration-500 ">Women</Link></li>
            <li><Link to="/contact" className="text-black text-xl hover:text-blue-500 transition duration-500 ">contact-us</Link></li> 
          </ul>
        </nav>
        <Link to="/shoppingicon" className="absolute top-9 right-4 cursor-pointer">
        <ShoppingIcon/>
        </Link>
      </div>
      </div>
  )
}

export default Nav;