import { useEffect, useState } from "react";
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
  Filler,
} from "chart.js";
import { fetchPrediction } from "../utils"; // Import the fetchPrediction function

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
  Filler
);

const Results = () => {
  const [activeTab, setActiveTab] = useState("Annual");
  const [predictionData, setPredictionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const features = {
        // Define input features based on the form data or static values
        monthlyElectricUse: 500, // Replace with actual values
        solarPanelSize: 350, // Replace with actual values
      };
      const data = await fetchPrediction(features);
      setPredictionData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const chartData = predictionData
    ? {
        labels: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ],
        datasets: [
          {
            label: "Electric Usage",
            data: predictionData.electricUsage,
            backgroundColor: "rgba(128, 128, 128, 0.3)",
            borderColor: "#6b7280",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Solar Production",
            data: predictionData.solarProduction,
            backgroundColor: "rgba(59, 130, 246, 0.3)",
            borderColor: "#1e3a8a",
            fill: true,
            tension: 0.4,
          },
        ],
      }
    : null;

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

  const barChartData = predictionData
    ? {
        labels: ["Before Solar", "After Solar"],
        datasets: [
          {
            label: "Electric Bill",
            data: predictionData.electricBill,
            backgroundColor: ["#007bff", "#007bff"],
          },
        ],
      }
    : null;

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader border-t-4 border-blue-600 border-solid rounded-full w-10 h-10 animate-spin"></div>
      </div>
    );
  }

  if (!predictionData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600">Error fetching prediction data.</p>
      </div>
    );
  }

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
            <p className="text-lg font-bold text-blue-600">
              {predictionData.annualElectricUse} kWh
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-700">Energy Production from Solar System</p>
            <p className="text-lg font-bold text-blue-600">
              {predictionData.solarEnergyProduction} kWh
            </p>
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
          {chartData && <Line data={chartData} options={chartOptions} />}
        </div>
      </div>

      {/* System and Savings Details Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">System and Savings Details</h2>
        <ul className="mb-6">
          <li>Number of solar panels needed: {predictionData.panelsNeeded}</li>
          <li>Recommended system size: {predictionData.recommendedSystemSize}</li>
          <li>Payback period: {predictionData.paybackPeriod}</li>
          <li>25 year net savings: {predictionData.netSavings25Years}</li>
          <li>Residential Clean Energy Tax Credit: {predictionData.taxCredit}</li>
        </ul>
        {barChartData && <Bar data={barChartData} options={barChartOptions} />}
      </div>
    </div>
  );
};

export default Results;
