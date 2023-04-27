import React from "react";
import RelatedProducts from "./components/RelatedProducts";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MockProduct = {
  id: 1,
  images: [
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71NEmcsavDL._AC_UY575_.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71NEmcsavDL._AC_UY575_.jpg",
  ],
  description: "The football shoes are made of high-quality synthetic leather, which is soft and comfortable, and the upper is breathable and sweat-absorbent.",
  variants: [
    {
      id: 1,
      size: "2.5UK",
      color: "Black",
      price: 23.99,
      stock: 10,
      images: [
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71NEmcsavDL._AC_UY575_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71NEmcsavDL._AC_UY575_.jpg",
      ],
    },
    {
      id: 2,
      size: "3UK",
      color: "Black",
      price: 23.99,
      stock: 10,
      images: [
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71NEmcsavDL._AC_UY575_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71NEmcsavDL._AC_UY575_.jpg",
      ],
    },
  ],
};

export default function PDPContent() {
  const { id, images, description, variants } = MockProduct;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8 md:px-12 lg:px-40">
        <div className=" flex justify-center items-center">
          <Carousel width={"300px"} className="flex flex-col justify-center items-center px-6">
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="">
          <h1 className="font-bold text-xl">
            VTASQ Football Boots Men's High Top Football Shoes FG/AG Training Shoes Professional Athletics Sneakers Teenager Soccer Shoes Unisex 2.5UK-10UK{" "}
          </h1>
          <p> Price: &pound; 23.99 - &pound; 32.99 </p>

          <p>
            NOTE:PLEASE READ THE SIZE CHART carefully before you buy the soccer shoes for sizes can be different among different brands. If there is a problem with our shoes,please contact us
            when you are free.We will try our best to help you within 24 hours.
          </p>

          <select name="size" id="size" className="px-4 bg-gray-100 py-1">
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
            <option value="8"> 8 </option>
          </select>
          <label htmlFor="color"> Colour </label>
          <div className="flex gap-4">
            <button>
              <img src="https://m.media-amazon.com/images/I/71NEmcsavDL._AC_UY575_.jpg" alt="" width="30px" height="30px" />
            </button>
            <button>
              <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61nnDDnvdGL._AC_SY575._SX._UX._SY._UY_.jpg" alt="" width="30px" height="30px" />
            </button>
            <button>
              <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71G-B5-rqyL._AC_SY575._SX._UX._SY._UY_.jpg" alt="" width="30px" height="30px" />
            </button>
          </div>
          <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md"> Add to Cart </button>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-12 lg:px-40">
        <p className="font-bold"> Description: </p>
        <p> The football shoes are made of high-quality synthetic leather, which is soft and comfortable, and the upper is breathable and sweat-absorbent. </p>
        <ul className="list-disc text-sm">
          <li>Breathable:Interior made of breathable material. Comfortable and breathable without stuffy feet. Let your feel relaxed and comfortable while exercising.</li>
          <li>Antiskid: The football shoes sole are made of rubber material. Rubber material has the characteristics of non-slip shock absorption and strong grip</li>
          <li>Outer Material: Synthetic</li>
          <li>Inner Material: Mesh</li>
          <li>Sole: Rubber</li>
          <li>Closure: Lace-Up</li>
          <li>Heel Type: Flat</li>
          <li>Shoe Width: Normal</li>
          <li>
            Widely Used: The soccer boots are lightweight, breathable, comfortable, shock absorption and non-slip. It suitable for natural grassland, rubber playground and artificial
            grassland.
          </li>
        </ul>
      </div>

      <RelatedProducts />
    </>
  );
}
