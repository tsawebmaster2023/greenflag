import React, { useState } from 'react';

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [budget, setBudget] = useState(500);
  const [newOrUsed, setNewOrUsed] = useState('new');
  const [showQualifications, setShowQualifications] = useState(false);

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
      name: 'Double-pane windows',
      cost: 1569,
    },
    {
      name: 'EV charger',
      cost: 2230,
    },
    {
      name: 'Heat pump water heaters',
      cost: 5280,
    },
    {
      name: 'New insulation',
      cost: 9469,
    },
    {
      name: 'Rooftop solar panels',
      cost: 9640,
    },
    {
      name: 'Heat pumps',
      cost: 16600,
    },
    {
      name: 'Using all practices',
      cost: 23000,
    }
  ]

  const handleClick = (tool) => {
    setSelectedTool(tool);
  };

  const affordablePractices = budget >= 20000 
    ? practices 
    : practices.filter(practice => practice.cost <= budget);

  const budgetSlider = (event) => {
    setBudget(Number(event.target.value));
  }

  return (
    <div className="w-full flex flex-col items-center justify-center my-6 bg-emerald-100">
      <h1 className="text-3xl font-bold text-center">Tools for Homeowners</h1>
      <div className="flex flex-row space-x-5 mx-4">
        <button 
          className={`mt-4 rounded-2xl border border-emerald-700 px-4 py-2 hover:bg-emerald-200 
          ${selectedTool === 'EV Tax Credit' ? 'bg-emerald-300' : ''}`} 
          onClick={() => handleClick('EV Tax Credit')}
        >
          EV Tax Credit
        </button>
        <button 
          className={`mt-4 rounded-2xl border border-emerald-700 px-4 py-2 hover:bg-emerald-200 
          ${selectedTool === 'Green Practices Costs' ? 'bg-emerald-300' : ''}`} 
          onClick={() => handleClick('Green Practices Costs')}
        >
          Green Practices Costs
        </button>
      </div>
      {selectedTool === 'EV Tax Credit' && (
        <div className="mt-4 text-center">
            <h2 className="font-bold mb-2">Electric Vehicle Tax Credit</h2>
            <label>
            Is the electric vehicle new or used?
            <select value={newOrUsed} onChange={(choice) => setNewOrUsed(choice.target.value)} className="ml-2">
                <option value="new">New</option>
                <option value="used">Used</option>
            </select>
            </label>
            {newOrUsed === 'new' && (
            <>
                <div className="mt-4 flex justify-center">
                <button onClick={() => setShowQualifications(!showQualifications)} 
                    className="border border-emerald-700 hover:bg-emerald-300 px-4 py-2 rounded-xl">
                    {showQualifications ? 'Hide requirements' : 'See requirements'}
                </button>
                </div>
                {showQualifications && (
                <div className="mt-4 flex justify-center p-4 mb-4">
                    <div className="mx-2 text-sm md:text-base lg:text-base">
                        <ul className="list-disc list-inside">
                            <li>Vehicle must be for your own use</li>
                            <li>You use it primarily in the United States</li>
                            <li className="mt-2">
                            Your adjusted gross income cannot exceed:
                            <ul>
                                <li>$300,000 for married couples filing jointly</li>
                                <li>$225,000 for heads of households</li>
                                <li>$150,000 for all other filers</li>
                            </ul>
                            </li>
                            <li className="mt-2">
                                See if your vehicle qualifies by visiting {''}
                                <a href="https://fueleconomy.gov/feg/tax2023.shtml" target="_blank" rel="noopener noreferrer" className="text-blue-700"> 
                                    this website
                                </a>.
                            </li>
                        </ul>
                    </div>
                </div>
                )}
                <p className="mt-4 mx-4">
                    Assuming you meet the requirements above, you can receive a tax credit of $7,500.
                </p>
            </>
            )}
            {newOrUsed === 'used' && (
            <>
                <div className="mt-4 flex justify-center">
                <button onClick={() => setShowQualifications(!showQualifications)} 
                    className="border border-emerald-700 hover:bg-emerald-300 px-4 py-2 rounded-xl">
                    {showQualifications ? 'Hide requirements' : 'See requirements'}
                </button>
                </div>
                {showQualifications && (
                <div className="mt-4 flex justify-center p-4 mb-4">
                    <div className="mx-2 text-sm md:text-base lg:text-base">
                        <ul className="list-disc list-inside">
                            <li>Vehicle is for your own use</li>
                            <li>You are not the original owner</li>
                            <li>You have not been claimed as a dependent on another person's tax return</li>
                            <li>You have not claimed another used clean vehicle credit in the 3 years before the purchase date</li>
                            <li className="mt-2">
                            Your adjusted gross income cannot exceed:
                            <ul>
                                <li>$150,000 for married couples filing jointly or a surviving spouse</li>
                                <li>$112,500 for heads of households</li>
                                <li>$75,000 for all other filers</li>
                            </ul>
                            </li>
                            <li className="mt-2">
                                See if your vehicle qualifies by visiting {''}
                                <a href="https://www.fueleconomy.gov/feg/taxused.shtml" target="_blank" rel="noopener noreferrer" className="text-blue-700"> 
                                    this website
                                </a>.
                            </li>
                        </ul>
                    </div>
                </div>
                )}
                <p className="mt-4 mx-4">
                    Assuming you meet the requirements above, you can receive a tax credit of 30% of the sale price, up to $4,000.
                </p>
            </>
            )}
        </div>
      )}

      {selectedTool === 'Green Practices Costs' && (
        <div className="mt-4">
          <label className="flex flex-row space-x-2 mb-4">
            <span className="w-1/3">Home green energy practices budget: </span>
            <input type="range" min="500" max="20000" step="500" value={budget} onChange={budgetSlider} className="flex-grow"/>
            <span className="w-1/3">${budget === 500 ? '500-' : budget === 20000 ? '20000+' : budget}</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
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