
import React from 'react';
import { CatalogType } from '../types/dso';

interface CatalogTabsProps {
  activeTab: CatalogType;
  onTabChange: (tab: CatalogType) => void;
  capturedCounts: { [key: string]: number };
  totalCounts: { [key: string]: number };
}

const CatalogTabs: React.FC<CatalogTabsProps> = ({ 
  activeTab, 
  onTabChange, 
  capturedCounts, 
  totalCounts 
}) => {
  const tabs: CatalogType[] = ['Messier', 'Caldwell', 'Barnard', 'Sharpless'];

  return (
    <div className="border-b border-gray-700 mb-6">
      <nav className="-mb-px flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
            }`}
          >
            {tab}
            <span className="ml-2 text-xs">
              ({capturedCounts[tab] || 0}/{totalCounts[tab] || 0})
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CatalogTabs;
