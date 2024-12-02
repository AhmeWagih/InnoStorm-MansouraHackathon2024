import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const Calculator = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleCalculate = () => {
    setLoading(true); // Show loading spinner
    setTimeout(() => {
      setLoading(false); // Hide spinner after delay
      navigate("/results"); // Navigate to Results page
    }, 2000); // Simulate processing delay (2 seconds)
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 mt-16 text-center">Solar Calculator</h1>

      {/* Solar Calculator Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Solar Calculator</h2>
        <p className="text-gray-600 mb-6">
          Use this calculator to estimate your solar panel requirements and energy production.
        </p>

        {loading ? (
          // Loading Spinner
          <div className="flex justify-center items-center h-32">
            <div className="loader border-t-4 border-blue-600 border-solid rounded-full w-10 h-10 animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Electric Use Input */}
            <div>
              <label
                htmlFor="electricUse"
                className="block text-sm font-medium text-gray-700"
              >
                Monthly Electric Use (kWh)
              </label>
              <input
                type="number"
                id="electricUse"
                placeholder="Enter your electric use"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Solar Panel Size Input */}
            <div>
              <label
                htmlFor="solarPanelSize"
                className="block text-sm font-medium text-gray-700"
              >
                Solar Panel Size (Watts)
              </label>
              <input
                type="number"
                id="solarPanelSize"
                placeholder="Enter panel size"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className="block w-full bg-blue-600 text-white py-2 px-4 text-center rounded-md hover:bg-blue-700"
            >
              Calculate
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
