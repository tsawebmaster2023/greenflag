import React from 'react';
import greenPowerImage from '../greenpowerimage.jpg';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className="bg-emerald-100 flex flex-col my-4">
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 items-center mx-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Building a Greener Future</h1>
          <p className="md:text-lg lg:text-2xl">We equip homeowners with the resources you need to use green energy practices, earn
          tax credits, and make the world a cleaner place.</p>
          <Link to="detailSection" smooth={true} duration={500}>
            <button className="mt-4 bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded">
              See what we offer
            </button>
          </Link>
        </div>
        <img src={greenPowerImage} alt="Green Power" className="w-full sm:w-1/2 mt-4 mx-4 sm:mx-6 md:mx-8 lg:mx-12"/>
      </div>
      <div id="detailSection" className="p-8 w-1/12">
        <p>Detail goes here</p>
      </div>
    </div>
  );
}