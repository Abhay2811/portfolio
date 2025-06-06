import React from 'react';

import account from "../images/account.png";
import cinqio from "../images/cinqio.png";
import scifi from "../images/scifi.png";
import cellwork from "../images/cellwork.jpg";
import weather from "../images/weather.png";
import portfolio from "../images/portfolio.png";
import timeless from "../images/timeless.png";
import prowess from "../images/prowess.png";
import brains from "../images/brainsmedia.png";


function Projects() {
	return (
	<div class=" py-16 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
  	<div class="mb-12 space-y-2 text-center">
      	<h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">My Recent Works</h2>
      	<p class="lg:w-6/12 lg:mx-auto"> Here are projects I've worked on.</p>
    	</div>
    	<div class="grid gap-12 lg:grid-cols-2">

        <div class="project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
    		<img src={timeless} alt="art cover" loading="lazy" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg" />
    		<div class="sm:w-7/12 pl-0 p-5">
      		<div class="space-y-2">
    			<div class="">
      			<h3 class="text-2xl font-semibold text-cyan-900">Timeless Golden Love</h3>
      			<p class="text-gray-600 pt-3">Timeless Golden Love is an online jewelry store 
      			 specializing in vermeil gold jewelry. The website features various collections offering a range of earrings, necklaces, rings, and bracelets.
      			</p>

  				<p class=" pt-2 font-bold">Tech Stack:</p>
  				<p class="text-gray-600">HTML, CSS, Jquery, Woocommerce and Wordpress</p>
    			</div>
    			<a href="https://timelessgoldenlove.com/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
      		</div>
    		</div>
     	</div>

     	<div class="project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
    		<img src={prowess} alt="art cover" loading="lazy" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg" />
    		<div class="sm:w-7/12 pl-0 p-5">
      		<div class="space-y-2">
    			<div class="">
      			<h3 class="text-2xl font-semibold text-cyan-900">Prowess Advisors</h3>
      			<p class="text-gray-600 pt-3">
      			Prowess Advisors offers specialized Investment Banking and Consulting services 
      			focused on the food and agriculture sectors.
      			</p>

  				 <p class=" pt-2 font-bold">Tech Stack:</p>
  				<p class="text-gray-600">HTML, CSS, Jquery and Wordpress</p>
    			</div>
    			<a href="https://prowessadvisors.com/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
      		</div>
    		</div>
     	</div>

      	<div class="project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={account} alt="art cover" loading="lazy" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h3 class="text-2xl font-semibold text-cyan-900">Accountabilityindia</h3>
              			<p class="text-gray-600 pt-3">Accountability Initiative is a research group which works on strengthening 
              			   transparency and accountability in governance. This research also works with CPR india.
              			</p>
      
          				<p class=" pt-2 font-bold">Tech Stack:</p>
          				<p class="text-gray-600">HTML, CSS, Javascript and Wordpress</p>
            			</div>
            			<a href="https://accountabilityindia.in/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
     	     			<div class=" project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={scifi} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg transition duration-500 group-hover:rounded-xl" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h3 class="text-2xl font-semibold text-cyan-900">Sci-Fi India</h3>
              			<p class="pt-3 text-gray-600">This project(SCI-FI) & cprindia program aims to better understand ‘the governance scale’ 
              				in Indian cities in tandem with ‘sector-specific socio-economic scales.
              			</p>
            			    <p class=" pt-2 font-bold">Tech Stack:</p>
          				<p class="text-gray-600">HTML, CSS, Javascript and Drupal </p>
            			</div>
            			<a href="https://scifi.cprindia.org/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
     			<div class=" project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={cellwork} alt="art cover" loading="lazy"  class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg transition duration-500 group-hover:rounded-xl" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h3 class="text-2xl font-semibold text-cyan-900">Cellworks Life</h3>
              			<p class="pt-3 text-gray-600">Cellworks predicts response to FDA-approved cancer therapies, 
              				& provides personalized cancer therapy recommendations.
              			</p>
						<p class=" pt-2 font-bold">Tech Stack:</p>
          				<p class="text-gray-600">HTML, CSS, Javascript and Drupal</p>
            			</div>
            			<a href="https://cellworks.life/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
      	<div class="project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={cinqio} alt="art cover" loading="lazy" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h3 class="text-2xl font-semibold text-cyan-900">Cinqio-Me</h3>
              			<p class="pt-3 text-gray-600">a diversified business group,  The diversity of the group allows us to be active in 
              				a wide range of industries, servicing some of the largest projects in the region.
              			</p>
      
          				<p class=" pt-2 font-bold">Tech Stack:</p>
          				<p class="text-gray-600">HTML, CSS, Javascript and Wordpress</p>
            			</div>
            			<a href="http://dev-cinqo.gailabs.com/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>

		</div>

		<div class=" pt-16 pb-8 text-center">
		<h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">My Work</h2>
		<p class="lg:w-6/12 lg:mx-auto pt-2">Here are project's I've made.</p>
		</div>

		<div class="grid gap-12 lg:grid-cols-2">
      	<div class="project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={portfolio} alt="art cover" loading="lazy" class="h-auto w-full sm:w-5/12  rounded-lg" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h3 class="text-2xl font-semibold text-cyan-900">Portfolio</h3>
              			<p class="text-gray-600 pt-3">This portfolio project is created by using React js and tailwind css.
              			For form submission data i have used getform.io plateform in contact page.</p>
                
            			</div>
            			<a href="https://abhayshowcase.netlify.app/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
     		<div class="project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={weather} alt="art cover" loading="lazy" class="h-auto w-full sm:w-5/12  rounded-lg" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h3 class="text-2xl font-semibold text-cyan-900">Wather App</h3>
              			<p class="text-gray-600 pt-3">Weather App is built using WeatherAPI for real-time weather data.
              			It is created with pure HTML and JavaScript. Users can check the current weather, 
              			the next 24-hour forecast, and a 2-day weather update by entering a city name or using their location.</p>
                
            			</div>
            			<a href="https://cloudwatcher.netlify.app/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>

     		<div class="project-img rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        		<img src={brains} alt="art cover" loading="lazy" class="h-auto w-full sm:w-5/12  rounded-lg" />
        		<div class="sm:w-7/12 pl-0 p-5">
          		<div class="space-y-2">
            			<div class="">
              			<h3 class="text-2xl font-semibold text-cyan-900">Brains Media</h3>
              			<p class="text-gray-600 pt-3">Brains Media is a website built using WordPress and Elementor, 
              			 offering media-related content and services.</p>
                
            			</div>
            			<p class=" pt-2 font-bold">Tech Stack:</p>
          				<p class="text-gray-600">HTML, CSS, Js and WP</p>
            			<a href="https://brainsnet.netlify.app/" target="_blank" rel="noreferrer" class="block w-max text-cyan-600">Visit Site</a>
          		</div>
        		</div>
     		</div>
		</div>
	</div>
	);
}

export default Projects;