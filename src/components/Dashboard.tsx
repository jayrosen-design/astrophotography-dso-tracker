
import React from 'react';
import { DSOObject } from '../types/dso';

interface DashboardProps {
  allData: DSOObject[];
  capturedObjects: Set<string>;
}

const Dashboard: React.FC<DashboardProps> = ({ allData, capturedObjects }) => {
  const getCatalogStats = (prefix: string, catalogName: string) => {
    const catalogObjects = allData.filter(obj => obj.catalog.startsWith(prefix));
    const capturedCount = catalogObjects.filter(obj => capturedObjects.has(obj.id)).length;
    const totalCount = catalogObjects.length;
    
    return { catalogName, capturedCount, totalCount };
  };

  const stats = [
    getCatalogStats('M', 'Messier'),
    getCatalogStats('C', 'Caldwell'),
    getCatalogStats('B', 'Barnard'),
    getCatalogStats('Sh', 'Sharpless')
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map(({ catalogName, capturedCount, totalCount }) => (
        <div key={catalogName} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-gray-300 text-sm font-medium mb-2">
            {catalogName} Captured
          </h3>
          <div className="text-3xl font-bold">
            <span className="text-blue-400">{capturedCount}</span>
            <span className="text-gray-500"> / {totalCount}</span>
          </div>
          <div className="mt-2 bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${totalCount > 0 ? (capturedCount / totalCount) * 100 : 0}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
