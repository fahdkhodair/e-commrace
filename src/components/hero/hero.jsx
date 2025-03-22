import { useNavigate } from "react-router-dom";
import circle from '../../assets/stroke-round-geometric-shape-vector.png'
import img from '../../assets/full-length-portrait-smiling-bearded-guy.png'
const Hero = () => {
  const nav1=useNavigate()
  const nav2=useNavigate()
  return (
    <section className="p-20 ml-20">
      <div className="text-left mt-20">
        <h1 className="text-5xl text-black font-bold">New Collection</h1>
        <p className="text-3xl text-black mt-5">Discover a lot of fashion</p>
            <button
              className="rounded-3xl bg-violet-500 text-white px-6 py-3 transition duration-150 ease-in-out hover:bg-violet-600 hover:text-white m-3"
              type="button" onClick={()=>nav1("/men")}
            >
              Shop Men
            </button>
        <button
              className="rounded-3xl bg-violet-500 text-white px-6 py-3 transition duration-150 ease-in-out hover:bg-violet-600 hover:text-white m-3"
              type="button" onClick={()=>nav2("/women")}
            >
              Shop women
            </button>
      </div>
      <div className="flex justify-end ml-50">
       <img src={circle}  className="top-10 absolute ml-60" width={700} height={700} alt=""/>
       <img src={img} className="top-20 absolute mr-40" width={400} height={400} alt=""/>
      </div>
    </section>
  );
};

export default Hero;



