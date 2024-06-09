import React from 'react';
import abhay from "../images/Abhay_Resume.pdf";
import home from "../images/resume.svg"

function Resume() {
	return (
    <>
        <div class="container mx-auto px-4 flex justify-between items-center pt-20 md:pt-16">
            <div >
                <h1 class="text-4xl md:text-6xl lg:text-8xl font-light text-cyan-900">My <br />Resume</h1>
            </div>
            <div>
                <img src={home} alt="" class="p-6 h-60 md:h-64 lg:h-96 " />
            </div>  
        </div>
        <div class="container mx-auto px-4 flex justify-center">
            <a href={abhay} download> 
                <button class="bg-blue-500 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded">
                    DOWNLOAD Resume.pdf
                </button>
            </a>
        </div>
    </>
	);
}

export default Resume;