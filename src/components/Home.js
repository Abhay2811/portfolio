import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import home from "../images/homepage.svg";


function Home() {
	return (
    	<section class=" w-full">
    		<div class="flex items-center flex-col md:flex-row justify-around pt-20 md:pt-12 container mx-auto px-4">
				<div class="text-cyan-900">
					<h2 class="md:text-4xl text-3xl">Hii, There! <span class="wave">👋🏻</span></h2>
					<h2 class="md:text-4xl text-3xl pt-3">I'M Abhay Sharma</h2>
					<h2 class="md:text-4xl text-3xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-white">Front End Developer</h2>
					<div class="pt-4">
						<p class="text-2xl md:text-3xl">Find Me On</p>
						<ul class="flex pt-3">
							<li class=""><Link to="https://www.linkedin.com/in/abhay-sharma-77a756260/" class="text-4xl hover:text-white"><FaLinkedin /></Link></li>
							<li><Link to="https://github.com/Abhay2811" class="text-4xl hover:text-white"><FaGithub /></Link></li>
							<li><Link to="https://www.instagram.com/_abhaysharma__/" class="text-4xl hover:text-white"><FaInstagram /></Link></li>
						</ul>
					</div>
				</div>
				<div>
					 <img src={home} className="object-contain mt-5 h-96" alt="" />
				</div>
    		</div>
    	</section>
	);
}

export default Home;