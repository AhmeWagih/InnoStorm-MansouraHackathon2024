import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,   // <-- Add this import
} from "chart.js";

// Register necessary components, including Filler plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler  // <-- Register Filler plugin
);

const Results = () => {
  const [activeTab, setActiveTab] = useState("Annual");
  const chartData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Electric Usage",
        data: [500, 600, 800, 900, 1000, 1100, 1200, 1000, 900, 700, 600, 500],
        backgroundColor: "rgba(128, 128, 128, 0.3)",
        borderColor: "#6b7280",
        fill: true,   // <-- Fill option
        tension: 0.4,
      },
      {
        label: "Solar Production",
        data: [300, 500, 700, 800, 1000, 1200, 1100, 1000, 900, 700, 600, 400],
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        borderColor: "#1e3a8a",
        fill: true,   // <-- Fill option
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 20,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Energy (kWh)",
        },
        beginAtZero: true,
      },
    },
  };

  const barChartData = {
    labels: ["Before Solar", "After Solar"],
    datasets: [
      {
        label: "Electric Bill",
        data: [250, 20], // Replace with exact values
        backgroundColor: ["#007bff", "#007bff"],
      },
    ],
  };

  const barChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Electric Bill ($)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Monthly Electric Bill Comparison",
        },
      },
    },
  };

  const systemDetails = {
    panelsNeeded: 14,
    recommendedSystemSize: "5.6 kW",
    paybackPeriod: "3 years 11 months",
    netSavings25Years: "$76,276",
    taxCredit: "$4,464",
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Solar Generation and Usage Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-8 flex items-center mt-20">
          <span role="img" aria-label="bulb" className="mr-2">💡</span>
          Solar Generation and Usage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <div>
            <p className="text-sm text-gray-700">Your current Annual Electric Use</p>
            <p className="text-lg font-bold text-blue-600">9,417 kWh</p>
          </div>
          <div>
            <p className="text-sm text-gray-700">Energy Production from Solar System</p>
            <p className="text-lg font-bold text-blue-600">9,461 kWh</p>
          </div>
        </div>
        <div className="border-b border-gray-200 mb-4">
          <nav className="flex">
            {["Annual", "Summer Weekday", "Winter Weekday"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`py-2 px-4 text-sm font-medium ${activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* System and Savings Details Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">System and Savings Details</h2>
        <ul className="mb-6">
          <li>Number of solar panels needed: {systemDetails.panelsNeeded}</li>
          <li>Recommended system size: {systemDetails.recommendedSystemSize}</li>
          <li>Payback period: {systemDetails.paybackPeriod}</li>
          <li>25 year net savings: {systemDetails.netSavings25Years}</li>
          <li>Residential Clean Energy Tax Credit: {systemDetails.taxCredit}</li>
        </ul>
        <Bar data={barChartData} options={barChartOptions} />
      </div>
    </div>
  );
};

export default Results;
