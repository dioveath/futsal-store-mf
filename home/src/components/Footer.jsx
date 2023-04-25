import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      <div className="w-full flex justify-center items-center py-2 bg-green-600 text-white">
        <a href="#" className=""> Back to Top </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-10 lg:px-20">
        <ul className="col-span-1">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="col-span-3">
          <div> Logo </div>
          <div>
            <p className="text-xs"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. </p>
          </div>
          <div>
            <h3 className="font-semibold">Social Media </h3>
            <ul className="flex flex-col gap-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 bg-green-900">
        <p className="text-gray-100">Futsal Store &copy; 2023</p>
      </div>
    </footer>
  );
}
