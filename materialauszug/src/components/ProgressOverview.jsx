import React from 'react';
import CompletionBalanceChart from './CompletionBalanceChart';
import ApartmentsOverTimeChart from './ApartmentsOverTimeChart';
import ChartSection from './ChartSection';

const ProgressOverview = () => (
  <div className="p-6 bg-bg">
    {/* Zeitverlauf der Materialmengen */}
    <h2 className="text-2xl font-bold mb-6">Materialmenge pro Gewerk</h2>
    
    <div className="grid grid-cols-12 gap-6 mb-10">
      {/* Material time chart */}
      <div className="col-span-12">
        <ChartSection />
      </div>
    </div>
    
    {/* Original content - now below the material section, without the heading */}
    <div className="grid grid-cols-12 gap-6 items-stretch">
      {/* Completion balance chart */}
      <div className="col-span-6 h-full">
        <CompletionBalanceChart />
      </div>
      
      {/* Apartments over time chart */}
      <div className="col-span-6 h-full">
        <ApartmentsOverTimeChart />
      </div>
    </div>
  </div>
);

export default ProgressOverview; 