import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="w-60 shadow-xl bg-green-500 text-white rounded-md hover:scale-105 transition-all">
      <Link to={"/product/1"}>
        <img
          src="https://imgs.search.brave.com/z5NShfxARu0LuCWZjP5uAPSKUoZndnnCyf1fVGjEJtA/rs:fit:1200:1200:1/g:ce/aHR0cDovL3B1bWFl/Y29tLnNjZW5lNy5j/b20vaXMvaW1hZ2Uv/UFVNQUVDT00vMTAz/Nzc3XzAxXzAyX0VF/QT90PTE0ODk1NTIw/OTI"
          alt="product"
          className="object-cover"
        />
      </Link>

      <div className="p-4 text-sm">
        <Link to={'/product/1'}>
          <h4 className="font-bold">Product Name</h4>
        </Link>

        <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p className="font-bold">Rp. 100.000</p>
      </div>
    </div>
  );
}
