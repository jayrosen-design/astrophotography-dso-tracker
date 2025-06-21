
import { DSOObject } from '../types/dso';

export const dsoData: DSOObject[] = [
  // Messier Objects
  { id: 'M1', catalog: 'M1', commonName: 'Crab Nebula', objectType: 'Supernova Remnant', constellation: 'Taurus', bestSeason: 'Winter' },
  { id: 'M2', catalog: 'M2', commonName: 'NGC 7089', objectType: 'Globular Cluster', constellation: 'Aquarius', bestSeason: 'Autumn' },
  { id: 'M3', catalog: 'M3', commonName: 'NGC 5272', objectType: 'Globular Cluster', constellation: 'Canes Venatici', bestSeason: 'Spring' },
  { id: 'M4', catalog: 'M4', commonName: 'NGC 6121', objectType: 'Globular Cluster', constellation: 'Scorpius', bestSeason: 'Summer' },
  { id: 'M5', catalog: 'M5', commonName: 'NGC 5904', objectType: 'Globular Cluster', constellation: 'Serpens', bestSeason: 'Summer' },
  { id: 'M6', catalog: 'M6', commonName: 'Butterfly Cluster', objectType: 'Open Cluster', constellation: 'Scorpius', bestSeason: 'Summer' },
  { id: 'M7', catalog: 'M7', commonName: 'Ptolemy Cluster', objectType: 'Open Cluster', constellation: 'Scorpius', bestSeason: 'Summer' },
  { id: 'M8', catalog: 'M8', commonName: 'Lagoon Nebula', objectType: 'Emission Nebula', constellation: 'Sagittarius', bestSeason: 'Summer' },
  { id: 'M9', catalog: 'M9', commonName: 'NGC 6333', objectType: 'Globular Cluster', constellation: 'Ophiuchus', bestSeason: 'Summer' },
  { id: 'M10', catalog: 'M10', commonName: 'NGC 6254', objectType: 'Globular Cluster', constellation: 'Ophiuchus', bestSeason: 'Summer' },
  
  // Caldwell Objects
  { id: 'C1', catalog: 'C1', commonName: 'NGC 188', objectType: 'Open Cluster', constellation: 'Cepheus', bestSeason: 'Autumn' },
  { id: 'C2', catalog: 'C2', commonName: 'NGC 40', objectType: 'Planetary Nebula', constellation: 'Cepheus', bestSeason: 'Autumn' },
  { id: 'C3', catalog: 'C3', commonName: 'NGC 4236', objectType: 'Galaxy', constellation: 'Draco', bestSeason: 'Spring' },
  { id: 'C4', catalog: 'C4', commonName: 'NGC 7023', objectType: 'Reflection Nebula', constellation: 'Cepheus', bestSeason: 'Autumn' },
  { id: 'C5', catalog: 'C5', commonName: 'IC 342', objectType: 'Galaxy', constellation: 'Camelopardalis', bestSeason: 'Winter' },
  { id: 'C6', catalog: 'C6', commonName: 'NGC 6543', objectType: 'Planetary Nebula', constellation: 'Draco', bestSeason: 'Summer' },
  { id: 'C7', catalog: 'C7', commonName: 'NGC 2403', objectType: 'Galaxy', constellation: 'Camelopardalis', bestSeason: 'Winter' },
  { id: 'C8', catalog: 'C8', commonName: 'NGC 559', objectType: 'Open Cluster', constellation: 'Cassiopeia', bestSeason: 'Autumn' },
  { id: 'C9', catalog: 'C9', commonName: 'Sh2-155', objectType: 'Emission Nebula', constellation: 'Cepheus', bestSeason: 'Autumn' },
  
  // Barnard Objects
  { id: 'B1', catalog: 'B1', commonName: 'Barnard 1', objectType: 'Dark Nebula', constellation: 'Cassiopeia', bestSeason: 'Autumn' },
  { id: 'B33', catalog: 'B33', commonName: 'Horsehead Nebula', objectType: 'Dark Nebula', constellation: 'Orion', bestSeason: 'Winter' },
  { id: 'B72', catalog: 'B72', commonName: 'Snake Nebula', objectType: 'Dark Nebula', constellation: 'Ophiuchus', bestSeason: 'Summer' },
  { id: 'B86', catalog: 'B86', commonName: 'Ink Spot Nebula', objectType: 'Dark Nebula', constellation: 'Sagittarius', bestSeason: 'Summer' },
  { id: 'B92', catalog: 'B92', commonName: 'Barnard 92', objectType: 'Dark Nebula', constellation: 'Sagittarius', bestSeason: 'Summer' },
  { id: 'B103', catalog: 'B103', commonName: 'Barnard 103', objectType: 'Dark Nebula', constellation: 'Serpens', bestSeason: 'Summer' },
  { id: 'B142', catalog: 'B142', commonName: 'E Nebula', objectType: 'Dark Nebula', constellation: 'Aquila', bestSeason: 'Summer' },
  { id: 'B143', catalog: 'B143', commonName: 'Barnard 143', objectType: 'Dark Nebula', constellation: 'Aquila', bestSeason: 'Summer' },
  
  // Sharpless Objects
  { id: 'Sh2-1', catalog: 'Sh2-1', commonName: 'Sharpless 1', objectType: 'Emission Nebula', constellation: 'Cassiopeia', bestSeason: 'Autumn' },
  { id: 'Sh2-2', catalog: 'Sh2-2', commonName: 'NGC 7635', objectType: 'Emission Nebula', constellation: 'Cassiopeia', bestSeason: 'Autumn' },
  { id: 'Sh2-101', catalog: 'Sh2-101', commonName: 'Tulip Nebula', objectType: 'Emission Nebula', constellation: 'Cygnus', bestSeason: 'Summer' },
  { id: 'Sh2-155', catalog: 'Sh2-155', commonName: 'Cave Nebula', objectType: 'Emission Nebula', constellation: 'Cepheus', bestSeason: 'Autumn' },
  { id: 'Sh2-171', catalog: 'Sh2-171', commonName: 'NGC 7822', objectType: 'Emission Nebula', constellation: 'Cepheus', bestSeason: 'Autumn' },
  { id: 'Sh2-185', catalog: 'Sh2-185', commonName: 'Sharpless 185', objectType: 'Emission Nebula', constellation: 'Cassiopeia', bestSeason: 'Autumn' },
  { id: 'Sh2-276', catalog: 'Sh2-276', commonName: 'Barnards Loop', objectType: 'Emission Nebula', constellation: 'Orion', bestSeason: 'Winter' },
  { id: 'Sh2-308', catalog: 'Sh2-308', commonName: 'Dolphin Nebula', objectType: 'Emission Nebula', constellation: 'Canis Major', bestSeason: 'Winter' }
];

export const getCatalogData = (catalogType: string) => {
  const prefix = catalogType.charAt(0).toUpperCase();
  return dsoData.filter(obj => obj.catalog.startsWith(prefix));
};

export const getAllSeasons = () => {
  return [...new Set(dsoData.map(obj => obj.bestSeason))].sort();
};

export const getAllObjectTypes = () => {
  return [...new Set(dsoData.map(obj => obj.objectType))].sort();
};
