 import React, {useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

function NavBar() {
	const [nav, setNav] = useState(false);
	function handleClick() {
		return (
			setNav(!nav)
		);
	} 
  return (
   <header>
   <nav class= "pt-6 ">
		<div class="flex justify-between w-full  items-center text-cyan-900  container mx-auto px-4">
			<div>
				<Link to="/"><img
            class="md:h-[50px] md:w-[50px] h-[30px] w-[30px] rounded-full sm:flex "
            src={logo}
            alt=""
          /></Link>
			</div>

			<ul class="hidden md:flex text-[18px]">
				<Link to="/"><li class="hover:text-white ">Home</li></Link>
				<Link to="/about"><li class="hover:text-white">About</li> </Link>
				<Link to="/projects"><li class="hover:text-white">Projects</li></Link>
				<Link to="/resume"><li class="hover:text-white">Resume</li></Link>
				<Link to="/contact"><li class="hover:text-white">Contact</li> </Link>

			</ul>
            <div onClick={handleClick} class="md:hidden z-10">
     		{!nav ? <FaBars /> : <FaTimes />}
     	</div>
      
			<ul onClick={() => setNav(!nav)} class={!nav ? 'hidden' : "absolute bg-[#0a192f] text-white top-0 left-0 w-full h-screen flex flex-col items-center justify-center"}>
				<Link to="/"  ><li class="py-6 text-3xl">Home</li></Link>
				<Link to="/about"><li class="py-6 text-3xl">About</li></Link>
				<Link to="/projects"><li class="py-6 text-3xl">Projects</li></Link>
				<Link to="/resume"><li class="py-6 text-3xl">Resume</li></Link>
				<Link to="/contact"><li class="py-6 text-3xl">Contact</li></Link>
			</ul>
		</div>
		</nav>
		</header>
  );
}


export default NavBar;