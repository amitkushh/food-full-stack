import React from "react";

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center bg-green-400 px-6 py-14 md:px-20 md:py-20 lg:px-20 lg:py-20'>
      <div>
        <h1 className="text-4xl font-bold text-center mb-6 leading-12">
          Where Every Bite <span className="text-white">Tells</span> a Story
        </h1>
        <p className="text-center mb-12 md:max-w-[700px]">
          we bring you tasty, fresh food that everyone will love. From quick
          bites to full feasts. Enjoy great food made easy—one delicious bite at
          a time!
        </p>

        <div className="text-center">
          <a href="/sign-up">
            <button className="bg-green-300 py-3 px-6 rounded-full shadow-sm shadow-white hover:bg-green-400 cursor-pointer text-white text-lg font-medium">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
