import React from "react";

function Menu() {
  const foods = [
    {
      image: "",
      title: "Club Snadwitch",
      para: "served with french fried",
      price: "30",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-6 py-14 md:px-20 md:py-20 lg:px-20 lg:py-20">
      <h2 className="text-3xl font-semibold">Menu</h2>
      <div className="grid grid-cols-3 justify-center items-center">
        <div>
          <img src="" alt="" />
          <span></span>
          <span></span>
          <span>$</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
