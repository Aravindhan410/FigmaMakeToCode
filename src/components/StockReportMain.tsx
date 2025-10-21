import { useState } from 'react';
import StockReportMainView from '../imports/StockReport';
import StockReportNavigationView from '../imports/StockReport-4008-7407';

export default function StockReportMain() {
  const [activeTab, setActiveTab] = useState<'main' | 'navigation'>('main');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        {/* Tabs Header */}
        <div className="bg-white rounded-t-lg border-b border-gray-200 shadow-sm">
          <div className="flex">
            <button
              onClick={() => setActiveTab('main')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'main'
                  ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Main Report
            </button>
            <button
              onClick={() => setActiveTab('navigation')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'navigation'
                  ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Navigation Panel
            </button>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
          {activeTab === 'main' ? (
            <StockReportMainView />
          ) : (
            <StockReportNavigationView />
          )}
        </div>
      </div>
    </div>
  );
}
