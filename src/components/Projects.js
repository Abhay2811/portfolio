import React from 'react';

import account from "../images/account.png";
import cinqio from "../images/cinqio.png";
import scifi from "../images/scifi.png";
import cellwork from "../images/cellwork.jpg";
import weather from "../images/weather.png";

function Projects() {
	return (
	<div class=" py-16 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
  	<div class="mb-12 space-y-2 text-center">
      	<h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">My Recent Works</h2>
      	<p class="lg:w-6/12 lg:mx-auto">Here are projects I've worked on.</p>
    	</div>
    	<div class="grid gap-12 lg:grid-cols-2">
      	<div class=" rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={account} alt="art cover" loading="lazy" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h4 class="text-2xl font-semibold text-cyan-900">Accountabilityindia</h4>
              			<p class="text-gray-600 pt-3">Accountability Initiative is a research group which works on strengthening 
              			   transparency and accountability in governance. This research also works with CPR india.
              			</p>
      
          				<p class="text-gray-600 pt-2">My Cntribution:</p>
          				<p class="text-gray-600">HTML, CSS, Javascript</p>
            			</div>
            			<a href="https://accountabilityindia.in/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
      	<div class=" rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={cinqio} alt="art cover" loading="lazy" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h4 class="text-2xl font-semibold text-cyan-900">Cinqio-Me</h4>
              			<p class="pt-3 text-gray-600">a diversified business group,  The diversity of the group allows us to be active in 
              				a wide range of industries, servicing some of the largest projects in the region.
              			</p>
      
          				<p class="text-gray-600 pt-2">My Cntribution:</p>
          				<p class="text-gray-600">HTML, CSS, Javascript</p>
            			</div>
            			<a href="http://dev-cinqo.gailabs.com/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
     			<div class="rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={scifi} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg transition duration-500 group-hover:rounded-xl" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h4 class="text-2xl font-semibold text-cyan-900">Sci-Fi India</h4>
              			<p class="pt-3 text-gray-600">This project(SCI-FI) & cprindia program aims to better understand ‘the governance scale’ 
              				in Indian cities in tandem with ‘sector-specific socio-economic scales.
              			</p>
            			    <p class=" pt-2 font-bold">My Cntribution:</p>
          				<p class="text-gray-600">HTML, CSS, Javascript</p>
            			</div>
            			<a href="https://scifi.cprindia.org/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
     			<div class="rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={cellwork} alt="art cover" loading="lazy"  class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg transition duration-500 group-hover:rounded-xl" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h4 class="text-2xl font-semibold text-cyan-900">Cellworks Life</h4>
              			<p class="pt-3 text-gray-600">Cellworks predicts response to FDA-approved cancer therapies, 
              				& provides personalized cancer therapy recommendations.
              			</p>
            			    <p class="text-gray-600 pt-2">My Cntribution:</p>
          				<p class="text-gray-600">HTML, CSS, Javascript</p>
            			</div>
            			<a href="https://cellworks.life/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
		</div>

		<div class=" pt-16 pb-8 text-center">
		<h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">My Work</h2>
		<p class="lg:w-6/12 lg:mx-auto pt-2">Here is project I've made.</p>
		</div>

		<div class="lg:w-6/12 m-auto">
      	<div class=" rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={weather} alt="art cover" loading="lazy" class="h-auto w-full sm:w-5/12  rounded-lg" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h4 class="text-2xl font-semibold text-cyan-900">Wather App</h4>
              			<p class="text-gray-600 pt-3">Wather App is created by using (openweathermap api) Real-Time Weather Data.
              			I've created this app with pure html and js, 
              			The functionaity added in this app is user can
              			check the current and next 24 hour's weather update by using city name or Location.</p>
                
            			</div>
            			<a href="https://weather-status-app.netlify.app/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
		</div>
	</div>
	);
}

export default Projects;