[![DOI](https://zenodo.org/badge/1006117347.svg)](https://doi.org/10.5281/zenodo.15746482)

# Astrophotography DSO Tracker

A comprehensive web application for tracking Deep Sky Objects (DSOs) across multiple astronomical catalogs. Perfect for astrophotographers and astronomy enthusiasts who want to organize and track their celestial observations.

![Messier View](https://github.com/jayrosen-design/astrophotography-dso-tracker/blob/main/public/Screenshot%202025-06-26%20084205.png)

## Features

### 📊 Multi-Catalog Support
- **Messier Catalog**: 110 famous nebulae, star clusters, and galaxies
- **Caldwell Catalog**: 109 additional deep sky objects
- **Barnard Catalog**: Dark nebulae and dust clouds
- **Sharpless Catalog**: Emission regions and H-II regions

### 🎯 Object Tracking
- Mark objects as captured/observed with a simple click
- Visual progress tracking with animated progress bars
- Dashboard showing completion statistics for each catalog
- Persistent tracking across browser sessions

### 🔍 Advanced Filtering
- Search by object name or catalog designation
- Filter by season (Spring, Summer, Fall, Winter)
- Filter by object type (Galaxy, Nebula, Star Cluster, etc.)
- Filter by captured status (Captured, Not Captured, All)

![Filtered View](https://github.com/jayrosen-design/astrophotography-dso-tracker/blob/main/public/Screenshot%202025-06-26%20084230.png)

### 📁 Data Management
- **Import CSV**: Upload your existing observation data
- **Export CSV**: Download your progress for backup or analysis
- **Reset Function**: Clear all captured objects with confirmation

### 📱 Responsive Design
- Mobile-optimized interface
- Touch-friendly controls
- Adaptive layouts for all screen sizes

## Technical Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks with localStorage persistence

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/jayrosen-design/astrophotography-dso-tracker.git

# Navigate to project directory
cd astrophotography-dso-tracker

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

### Getting Started
1. **Browse Catalogs**: Use the tabs to switch between different DSO catalogs
2. **Track Objects**: Click the capture button (📷) next to any object to mark it as observed
3. **Monitor Progress**: View your completion statistics in the dashboard cards
4. **Filter & Search**: Use the control panel to find specific objects or types

### Data Import/Export
- **Import**: Click "Import CSV" to upload existing observation data
- **Export**: Click "Export CSV" to download your current progress
- **Reset**: Use "Reset All" to clear all captured objects (with confirmation)

### CSV Format
The application expects CSV files with these columns:
- `id`: Object identifier (e.g., "M1", "C14", "B33")
- `catalog`: Catalog name
- `name`: Object name
- `type`: Object type
- `season`: Observing season
- Additional columns are preserved during import/export

## Catalog Information

### Messier Catalog (M1-M110)
Charles Messier's catalog of 110 astronomical objects, including famous targets like:
- M1 (Crab Nebula)
- M31 (Andromeda Galaxy)
- M42 (Orion Nebula)
- M45 (Pleiades)

### Caldwell Catalog (C1-C109)
Patrick Moore's catalog of 109 deep sky objects not included in Messier's list, featuring:
- C14 (Double Cluster)
- C49 (Rosette Nebula)
- C92 (Cat's Eye Nebula)

### Barnard Catalog (B1-B366)
Edward Emerson Barnard's catalog of dark nebulae, including:
- B33 (Horsehead Nebula)
- B86 (Ink Spot Nebula)

### Sharpless Catalog (Sh2-1 to Sh2-313)
Stewart Sharpless's catalog of H-II regions and emission nebulae.

## Development

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Controls.tsx    # Filter and action controls
│   ├── Dashboard.tsx   # Progress statistics
│   ├── DsoTable.tsx    # Object data table
│   └── CatalogTabs.tsx # Catalog navigation
├── data/               # Static data files
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── types/              # TypeScript definitions
└── lib/                # Utility functions
```

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions, suggestions, or issues, please open an issue on the GitHub repository.

---

**Happy stargazing! 🌟**
