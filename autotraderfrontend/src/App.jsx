// App.js
import React, { useState } from 'react';
import './App.css';
import GetAllCars from './components/GetAllCars';

function App() {
  const [refreshCars, setRefreshCars] = useState(false);

  const handleCarAdded = () => {
    setRefreshCars(!refreshCars); // Toggle to trigger refresh in GetAllCars
  };

  const handleCarDeleted = () => {
    setRefreshCars(!refreshCars); // Toggle to trigger refresh in GetAllCars
  };

  const handleCarUpdated = () => {
    setRefreshCars(!refreshCars); // Toggle to trigger refresh in GetAllCars
  };

  return (
    <div className="container">
      <GetAllCars
        refresh={refreshCars}
        onCarAdded={handleCarAdded}
        onCarDeleted={handleCarDeleted}
        onCarUpdated={handleCarUpdated}
      />
    </div>
  );
}

export default App;