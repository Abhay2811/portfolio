import React from 'react';

import account from "../images/account.png";
import cinqio from "../images/cinqio.png";
import scifi from "../images/scifi.png";
import cellwork from "../images/cellwork.jpg";

function Projects() {
	return (
  	<div class=" py-16 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    	<div class="mb-12 space-y-2 text-center">
        	<h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">My Recent Works</h2>
        	<p class="lg:w-6/12 lg:mx-auto">Here are a few projects I've worked on recently.</p>
      	</div>
      	<div class="grid gap-12 lg:grid-cols-2">
        	<div class=" rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          		<img src={account} alt="art cover" loading="lazy" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg" />
          		<div class="sm:w-7/12 pl-0 p-5">
            		<div class="space-y-2">
              			<div class="">
                			<h4 class="text-2xl font-semibold text-cyan-900">Accountabilityindia</h4>
                			<p class="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
        
            				<p class="text-gray-600 pt-2">My Cntribution:</p>
            				<p class="text-gray-600">HTML, CSS, Javascript</p>
              			</div>
              			<a href="https://accountabilityindia.in/" class="block w-max text-cyan-600">Visit Site</a>
            		</div>
          		</div>
       		</div>
        	<div class=" rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          		<img src={cinqio} alt="art cover" loading="lazy" class="h-56 sm:h-full w-full sm:w-5/12  rounded-lg" />
          		<div class="sm:w-7/12 pl-0 p-5">
            		<div class="space-y-2">
              			<div class="">
                			<h4 class="text-2xl font-semibold text-cyan-900">Conqio Me</h4>
                			<p class="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
        
            				<p class="text-gray-600 pt-2">My Cntribution:</p>
            				<p class="text-gray-600">HTML, CSS, Javascript</p>
              			</div>
              			<a href="www.tailus.io" class="block w-max text-cyan-600">Visit Site</a>
            		</div>
          		</div>
       		</div>
       			<div class="rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          		<img src={scifi} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-6/12  rounded-lg transition duration-500 group-hover:rounded-xl" />
          		<div class="sm:w-7/12 pl-0 p-5">
            		<div class="">
              			<div class="">
                			<h4 class="text-2xl font-semibold text-cyan-900">Sci-Fi India</h4>
                			<p class="pt-3 text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              			    <p class=" pt-2 font-bold">My Cntribution:</p>
            				<p class="text-gray-600">HTML, CSS, Javascript</p>
              			</div>
              			<a href="www.tailus.io" class="block w-max text-cyan-600">Visit Site</a>
            		</div>
          		</div>
       		</div>
       			<div class="rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          		<img src={cellwork} alt="art cover" loading="lazy"  class="h-56 sm:h-full w-full sm:w-6/12  rounded-lg transition duration-500 group-hover:rounded-xl" />
          		<div class="sm:w-7/12 pl-0 p-5">
            		<div class="space-y-2">
              			<div class="">
                			<h4 class="text-2xl font-semibold text-cyan-900">Cellworks Life</h4>
                			<p class="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              			    <p class="text-gray-600 pt-2">My Cntribution:</p>
            				<p class="text-gray-600">HTML, CSS, Javascript</p>
              			</div>
              			<a href="www.tailus.io" class="block w-max text-cyan-600">Visit Site</a>
            		</div>
          		</div>
       		</div>
  		</div>
  	</div>
	);
}

export default Projects;