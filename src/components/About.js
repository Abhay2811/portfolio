import React from 'react';
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import home from "../images/dev.svg";
import bootstrap from "../images/bootstrap.png";
import git from "../images/git.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.svg";
import sass from "../images/sass.png";
import jquery from "../images/jquery.png";
import reactjs from "../images/act.png";
import { FaHandPointRight } from "react-icons/fa";

function About() {
	return (
  	<section>
      <div class="flex flex-col md:flex-row justify-around pt-12 container shadow-lg rounded-lg mx-auto px-4">
        <div class="mt-5">
          <h2 class="text-3xl pb-6 font-bold text-cyan-900">About Me</h2>
          <p class="text-lg text-gray-600">I am Abhay Sharma from Himachal Pradesh, India.
            I have a Bachelor's and
            Master's <br />degree in Computer Applications.
          </p>
          <p class="text-lg text-gray-600">Junior Front-End Developer with expertise in cross-platform development
            using Javascript.<br />Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. 
          </p>
          <p class="text-[22px] text-cyan-900 font-bold pt-10">Apart from coding, some other activities that I love to do!</p>
          <ul >
            <li class="text-gray-600"><FaHandPointRight class="inline mr-3 text-gray-600"/>Playing Mobile Games</li>
            <li class="text-gray-600"><FaHandPointRight class="inline mr-3 text-gray-600"/>Travelling</li>
            <li class="text-gray-600"><FaHandPointRight class="inline mr-3 text-gray-600"/>Playing Cricket</li>
          </ul>
          <h4 class="pt-12 font-bold text-cyan-900 text-[22px]">Professional Skills</h4>
          <div class="flex flex-wrap gap-8 md:gap-16">
           <img src={html} class=" object-contain mt-5 w-[60px] h-[60px] shadow-xl rounded-lg" alt="" />
           <img src={css} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
           <img src={javascript} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
           <img src={reactjs} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
           <img src={jquery} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
           <img src={tailwind} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
           <img src={bootstrap} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
           <img src={sass} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
           <img src={github} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
           <img src={git} class=" object-contain mt-5 w-[60px] h-[60px] shadow-lg rounded-lg" alt="" />
          </div>
        </div>
        <div class="md:pt-0 pt-6">
          <img src={home} class=" object-contain mt-5 h-96" alt="" />
        </div>
      </div>
    </section>
	);
}

export default About;