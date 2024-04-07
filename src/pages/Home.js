import React from 'react';
import greenPowerImage from '../greenpowerimage.jpg';
import { Link as ScrollLink, Element } from 'react-scroll';

export default function Home() {
  return (
    <div className="bg-emerald-100 flex flex-col my-4">
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 items-center mx-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Building a Greener Future</h1>
          <p className="md:text-lg lg:text-2xl">We equip homeowners with the resources you need to use green energy practices, earn tax credits, and make the world a cleaner place.</p>
          <ScrollLink to="benefitsSection" smooth={true} duration={500}>
          </ScrollLink>
        </div>
        <img src={greenPowerImage} alt="Green Power" className="w-full sm:w-1/2 mt-4 mx-4 sm:mx-6 md:mx-8 lg:mx-12"/>
      </div>
      <Element name="benefitsSection" className="p-8 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Blog</h3>
              <p>An informative and enriching blog about the benefits of environemental-friendliness for homewoners and businessowners alike.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Green Energy Costs</h3>
              <p>Locate green energy practices that fit your needs and financial constraints.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Tax Credits</h3>
              <p>Accurately find taxes tailored to your budget.</p>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}
