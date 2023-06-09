import React from 'react';
import home from "../images/contact.svg";

function Contact() {
	return (
    	<div class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
            <div class="flex flex-col justify-between">
                <div class="space-y-2">
                    <h2 class="text-4xl font-bold text-cyan-900 leading-tight lg:text-5xl">Let's talk!</h2>
                </div>
                <img src={home} alt="" class="p-6 h-52 md:h-64" />
            </div>
            <form class="space-y-3" action="https://getform.io/f/aaf072fa-bd1a-465e-a94d-c9c172429fe8" method="POST" novalidate="" Name="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" >Full name</label>
                    <input id="name" name="name" type="text" required className="w-full p-3 rounded"/>
                </div>
                <div>
                    <label for="email" >Email</label>
                    <input id="email" name="email" type="email" required className="w-full p-3 rounded" />
                </div>
                <div>
                    <label for="message" >Message</label>
                    <textarea id="message" name="message" rows="3" required class="w-full p-3 rounded"></textarea>
                </div>
                <button type="submit" class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-cyan-900 text-white">Send Message</button>
            </form>
        </div>
	);
}

export default Contact;