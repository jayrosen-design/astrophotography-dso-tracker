
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilterState } from '../types/dso';
import { Search, Upload, Download, RotateCcw } from 'lucide-react';

interface ControlsProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onImportCSV: (file: File) => void;
  onExportCSV: () => void;
  onReset: () => void;
  seasons: string[];
  objectTypes: string[];
}

const Controls: React.FC<ControlsProps> = ({
  filters,
  onFiltersChange,
  onImportCSV,
  onExportCSV,
  onReset,
  seasons,
  objectTypes
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImportCSV(file);
      event.target.value = '';
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all captured objects? This action cannot be undone.')) {
      onReset();
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search..."
            value={filters.search}
            onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
            className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <Select value={filters.season} onValueChange={(value) => onFiltersChange({ ...filters, season: value })}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="All Seasons" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600">
            <SelectItem value="">All Seasons</SelectItem>
            {seasons.map(season => (
              <SelectItem key={season} value={season}>{season}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.objectType} onValueChange={(value) => onFiltersChange({ ...filters, objectType: value })}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="All Object Types" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600">
            <SelectItem value="">All Object Types</SelectItem>
            {objectTypes.map(type => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.capturedStatus} onValueChange={(value) => onFiltersChange({ ...filters, capturedStatus: value })}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="All Captured Status" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600">
            <SelectItem value="">All Captured Status</SelectItem>
            <SelectItem value="captured">Captured</SelectItem>
            <SelectItem value="not-captured">Not Captured</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => document.getElementById('csv-input')?.click()}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Upload className="mr-2 h-4 w-4" />
          Import CSV
        </Button>
        
        <Button
          onClick={onExportCSV}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
        
        <Button
          onClick={handleReset}
          variant="destructive"
          className="bg-red-600 hover:bg-red-700"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset All
        </Button>
        
        <input
          id="csv-input"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Controls;
