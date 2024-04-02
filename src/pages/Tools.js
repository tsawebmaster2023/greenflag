import React, { useState } from 'react';

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [budget, setBudget] = useState(500);

  const practices = [
    {
      name: 'Energy-Efficient lighting',
      cost: 240,
    },
    {
      name: 'Smart thermostat',
      cost: 240,
    },
    {
      name: 'EV charger',
      cost: 2230,
    },
    {
      name: 'Double-pane windows',
      cost: 1569,
    },
    {
      name: 'New insulation',
      cost: 9469,
    },
    {
      name: 'Rooftop solar panels',
      cost: 9640,
    },
  ]

  const handleClick = (tool) => {
    setSelectedTool(tool);
  };

  const affordablePractices = practices.filter(practice => practice.cost <= budget);

  const budgetSlider = (event) => {
    setBudget(Number(event.target.value));
  }

  return (
    <div className="w-full flex flex-col items-center justify-center my-6 bg-emerald-100">
      <h1 className="text-3xl font-bold text-center">Tools for Homeowners</h1>
      <div className="flex flex-row space-x-5 mx-4">
        <button 
          className={`mt-4 rounded-2xl border border-emerald-700 px-4 py-2 hover:bg-emerald-200 
          ${selectedTool === 'Rebate Information' ? 'bg-emerald-300' : ''}`} 
          onClick={() => handleClick('Rebate Information')}
        >
          Rebate Information
        </button>
        <button 
          className={`mt-4 rounded-2xl border border-emerald-700 px-4 py-2 hover:bg-emerald-200 
          ${selectedTool === 'Green Practices Costs' ? 'bg-emerald-300' : ''}`} 
          onClick={() => handleClick('Green Practices Costs')}
        >
          Green Practices Costs
        </button>
      </div>
      {selectedTool === 'Rebate Information' && (
        <div className="mt-4">
            <p>Rebate Information</p>
        </div>
      )}
      {selectedTool === 'Green Practices Costs' && (
        <div className="mt-4">
          <label className="flex flex-row space-x-2 mb-4">
            <span className="w-1/3">Home green energy practices budget: </span>
            <input type="range" min="500" max="20000" step="500" value={budget} onChange={budgetSlider} className="flex-grow"/>
            <span className="w-1/3">${budget === 500 ? '500-' : budget === 20000 ? '20000+' : budget}</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {affordablePractices.map((practice, index) => (
              <div key={index} className="border border-emerald-700 rounded-xl p-4">
                <h2>{practice.name}</h2>
                <p>Estimated cost: ${practice.cost}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}