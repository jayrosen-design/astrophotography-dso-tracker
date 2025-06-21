import React, { useState, useMemo } from 'react';
import { Telescope } from 'lucide-react';
import Dashboard from '../components/Dashboard';
import Controls from '../components/Controls';
import CatalogTabs from '../components/CatalogTabs';
import DsoTable from '../components/DsoTable';
import { dsoData, getCatalogData, getAllSeasons, getAllObjectTypes } from '../data/dsoData';
import { CatalogType, FilterState } from '../types/dso';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState<CatalogType>('Messier');
  const [capturedObjects, setCapturedObjects] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    season: 'all',
    objectType: 'all',
    capturedStatus: 'all'
  });

  const seasons = getAllSeasons();
  const objectTypes = getAllObjectTypes();

  const filteredData = useMemo(() => {
    let data = getCatalogData(activeTab);
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      data = data.filter(obj => 
        obj.catalog.toLowerCase().includes(searchTerm) ||
        obj.commonName.toLowerCase().includes(searchTerm) ||
        obj.constellation.toLowerCase().includes(searchTerm)
      );
    }
    
    if (filters.season && filters.season !== 'all') {
      data = data.filter(obj => obj.bestSeason === filters.season);
    }
    
    if (filters.objectType && filters.objectType !== 'all') {
      data = data.filter(obj => obj.objectType === filters.objectType);
    }
    
    if (filters.capturedStatus && filters.capturedStatus !== 'all') {
      if (filters.capturedStatus === 'captured') {
        data = data.filter(obj => capturedObjects.has(obj.id));
      } else if (filters.capturedStatus === 'not-captured') {
        data = data.filter(obj => !capturedObjects.has(obj.id));
      }
    }
    
    return data;
  }, [activeTab, filters, capturedObjects]);

  const capturedCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    ['Messier', 'Caldwell', 'Barnard', 'Sharpless'].forEach(catalog => {
      const catalogData = getCatalogData(catalog);
      counts[catalog] = catalogData.filter(obj => capturedObjects.has(obj.id)).length;
    });
    return counts;
  }, [capturedObjects]);

  const totalCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    ['Messier', 'Caldwell', 'Barnard', 'Sharpless'].forEach(catalog => {
      counts[catalog] = getCatalogData(catalog).length;
    });
    return counts;
  }, []);

  const handleToggleCapture = (id: string) => {
    setCapturedObjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleImportCSV = async (file: File) => {
    try {
      const text = await file.text();
      const lines = text.split('\n').map(line => line.trim()).filter(line => line);
      
      if (lines.length < 2) {
        toast({
          title: "Error",
          description: "CSV file must contain at least a header row and one data row.",
          variant: "destructive"
        });
        return;
      }

      const catalogIds = lines.slice(1); // Skip header
      const validIds = catalogIds.filter(id => dsoData.some(obj => obj.catalog === id));
      
      setCapturedObjects(new Set(validIds));
      
      toast({
        title: "Import Successful",
        description: `Imported ${validIds.length} captured objects from CSV.`
      });
    } catch (error) {
      toast({
        title: "Import Failed",
        description: "Could not read CSV file. Please check the file format.",
        variant: "destructive"
      });
    }
  };

  const handleExportCSV = () => {
    const capturedIds = Array.from(capturedObjects).sort();
    const csvContent = 'Catalog ID\n' + capturedIds.join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dso_captured_objects.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Export Successful",
      description: `Exported ${capturedIds.length} captured objects to CSV.`
    });
  };

  const handleReset = () => {
    setCapturedObjects(new Set());
    toast({
      title: "Reset Complete",
      description: "All captured objects have been cleared."
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Telescope className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Astrophotography DSO Tracker
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Your progress on the Messier, Caldwell, Barnard, and Sharpless catalogs.
          </p>
        </header>

        <Dashboard allData={dsoData} capturedObjects={capturedObjects} />

        <Controls
          filters={filters}
          onFiltersChange={setFilters}
          onImportCSV={handleImportCSV}
          onExportCSV={handleExportCSV}
          onReset={handleReset}
          seasons={seasons}
          objectTypes={objectTypes}
        />

        <CatalogTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          capturedCounts={capturedCounts}
          totalCounts={totalCounts}
        />

        <DsoTable
          data={filteredData}
          capturedObjects={capturedObjects}
          onToggleCapture={handleToggleCapture}
        />
      </div>
    </div>
  );
};

export default Index;
