
import React, { useState, useMemo } from 'react';
import { DSOObject } from '../types/dso';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface DsoTableProps {
  data: DSOObject[];
  capturedObjects: Set<string>;
  onToggleCapture: (id: string) => void;
}

type SortField = 'catalog' | 'commonName' | 'objectType' | 'constellation' | 'bestSeason';
type SortDirection = 'asc' | 'desc';

const DsoTable: React.FC<DsoTableProps> = ({ data, capturedObjects, onToggleCapture }) => {
  const [sortField, setSortField] = useState<SortField>('catalog');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];
      
      // Handle numeric catalog sorting
      if (sortField === 'catalog') {
        const aNum = parseInt(aValue.replace(/[^\d]/g, '')) || 0;
        const bNum = parseInt(bValue.replace(/[^\d]/g, '')) || 0;
        aValue = aNum.toString().padStart(4, '0');
        bValue = bNum.toString().padStart(4, '0');
      }
      
      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }, [data, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? 
      <ChevronUp className="h-4 w-4" /> : 
      <ChevronDown className="h-4 w-4" />;
  };

  if (data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        No objects found matching the current filters.
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-20">
                Photographed
              </th>
              <th 
                className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => handleSort('catalog')}
              >
                <div className="flex items-center space-x-1">
                  <span>Catalog</span>
                  <SortIcon field="catalog" />
                </div>
              </th>
              <th 
                className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => handleSort('commonName')}
              >
                <div className="flex items-center space-x-1">
                  <span>Common Name</span>
                  <SortIcon field="commonName" />
                </div>
              </th>
              <th 
                className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-800 transition-colors hidden md:table-cell"
                onClick={() => handleSort('objectType')}
              >
                <div className="flex items-center space-x-1">
                  <span>Object Type</span>
                  <SortIcon field="objectType" />
                </div>
              </th>
              <th 
                className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-800 transition-colors hidden md:table-cell"
                onClick={() => handleSort('constellation')}
              >
                <div className="flex items-center space-x-1">
                  <span>Constellation</span>
                  <SortIcon field="constellation" />
                </div>
              </th>
              <th 
                className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => handleSort('bestSeason')}
              >
                <div className="flex items-center space-x-1">
                  <span>Best Season</span>
                  <SortIcon field="bestSeason" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {sortedData.map((object) => (
              <tr key={object.id} className="hover:bg-gray-750 transition-colors">
                <td className="px-3 py-4 whitespace-nowrap">
                  <Checkbox
                    checked={capturedObjects.has(object.id)}
                    onCheckedChange={() => onToggleCapture(object.id)}
                    className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {object.catalog}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300">
                  {object.commonName}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">
                  {object.objectType}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">
                  {object.constellation}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-300">
                  {object.bestSeason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DsoTable;
