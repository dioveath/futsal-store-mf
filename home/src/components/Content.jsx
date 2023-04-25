import React from "react";
import ProductCard from "./ProductCard";
import coverImg from '../futsal_cover.jpg'

export default function Content() {
  return (
    <div className="bg-[#e2e7e6]">
      <div className="flex justify-center items-center h-[600px] relative ">
        <div className="absolute w-full h-full top-0 left-0">
          <img src={coverImg} alt="Futsal Store" className="w-full h-full object-cover" />
        </div>
        {/* <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#e2e7e6] to-90% w-full h-full">
        </div> */}

        <div className="text-center text-white flex flex-col gap-2 z-10">
          <h1 className="text-6xl font-bold">Futsal Store</h1>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <a href="products.html" className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
            Shop Now
          </a>
        </div>
      </div>

      <h3 className="font-bold text-lg px-10 my-10"> Trending </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 justify-items-center px-4 gap-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>

      <h3 className="font-bold text-lg px-10 my-10"> Essentials </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 justify-items-center px-4 gap-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
