import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-14 md:px-20 md:py-20 lg:px-20 lg:py-20">
      <h1 className="text-4xl font-bold text-center mb-6">About</h1>
      <p className="md:mx-32">
        Welcome to Fooddy, where we bring you the best in culinary delights.
        Whether you're an experienced chef or just someone who loves to enjoy
        great food, we have got something to inspire your next meal. <br />{" "}
        <br />
        From hearty comfort food to light, healthy options, our diverse recipes
        cater to every taste and occasion. We believe food is more than just
        fuel, it is an experience, a way to bring people together, and a chance
        to explore new flavors. Our goal is to make cooking simple, enjoyable,
        and accessible for everyone. <br />
        <br /> We source fresh, high-quality ingredients and offer
        easy-to-follow recipes that take the guesswork out of meal planning.
        Along with our recipes, we share tips, tricks, and product
        recommendations to help you make the most of your kitchen adventures.
        Whether you are cooking for a special occasion or just whipping up a
        quick weeknight dinner, we are here to make sure every meal is a
        memorable one. Join our community of food lovers and let explore the
        wonderful world of flavors together!
      </p>
    </div>
  );
}

export default About;
