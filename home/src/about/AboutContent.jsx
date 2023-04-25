import React from "react";
import coverImg from "../futsal_cover.jpg";

export default function AboutContent() {
  return (
    <div>
      <div className="flex justify-center items-center h-[600px] relative ">
        <div className="absolute w-full h-full top-0 left-0">
          <img src={coverImg} alt="Futsal Store" className="w-full h-full object-cover" />
        </div>
        {/* <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#e2e7e6] to-90% w-full h-full">
        </div> */}

        <div className="text-center text-white flex flex-col gap-2 z-10 w-[90%] md:w-[600px]">
          <h1 className="text-6xl font-bold"> About </h1>
          <p className="text-xl">
            Welcome to our Futsal Store, your one-stop-shop for all your futsal needs! We are passionate about futsal, and we want to share our love for this exciting sport with you. Our store
            is dedicated to providing the best futsal gear and equipment for players of all levels, from beginners to professionals.
          </p>
          <a href="products.html" className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
            Contact
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 px-8 md:px-12 lg:px-40 my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114089.08928425524!2d87.3841597!3d26.6713968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef656f3b6d2f2b%3A0x9eaa66908a699711!2sPlanet%20Futsal%20Biratchwk!5e0!3m2!1sen!2suk!4v1682437936590!5m2!1sen!2suk"
          width="600"
          height="450"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg"> Contact Us </h3>
          <p className="text-sm"> Planet Futsal Biratnagar </p>
          <p className="text-sm"> Biratnagar, Morang </p>
          <p className="text-sm"> Phone: 984-000-0000 </p>

          <form action="" className="flex flex-col gap-2 ">
            <input type="text" placeholder="Name" className="border-2 border-gray-300 p-2 my-2 rounded-md" />
            <input type="email" placeholder="Email" className="border-2 border-gray-300 p-2 my-2 rounded-md" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="border-2 border-gray-300 p-2 my-2 rounded-md"></textarea>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"> Send </button>
          </form>
        </div>
      </div>
    </div>
  );
}
