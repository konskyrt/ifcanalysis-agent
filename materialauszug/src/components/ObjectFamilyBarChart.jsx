import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const families = [
  'Runder Luftkanal', 'Rechteckiger Luftkanal', 'Abzweig runder Luftkanal',
  'Rohrtypen', 'Formstück rechteckiger Luftkanal', 'Zuluftgitter'
];
const counts = [950, 820, 610, 480, 350, 290];
const colors = ['#064E3B','#2563EB','#22C55E','#A3E635','#EC4899','#A78BFA'];

const data = { 
  labels: families, 
  datasets:[{ 
    data: counts, 
    backgroundColor: colors, 
    barThickness: 16 
  }] 
};

const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.raw.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        callback: (v) => `${v / 1000}K`,
      },
    },
    y: {
      ticks: {
        font: { size: 12 },
      },
    },
  },
};

const ObjectFamilyBarChart = () => (
  <div className="bg-white shadow rounded-lg p-4">
    <h3 className="text-lg font-medium mb-4">Top-Elementfamilien</h3>
    <div className="h-64 w-full">
      <Bar data={data} options={options} />
    </div>
  </div>
);

export default ObjectFamilyBarChart; 