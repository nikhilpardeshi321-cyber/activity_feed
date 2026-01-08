import React, { useState } from 'react';
import './App.css';
import ActivityFeed from './components/ActivityFeed';

function App() {
  const [tenantId, setTenantId] = useState('1');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Activity Feed</h1>
        <div className="tenant-selector">
          <label htmlFor="tenantId">Tenant ID: </label>
          <input
            id="tenantId"
            type="text"
            value={tenantId}
            onChange={(e) => setTenantId(e.target.value)}
            placeholder="Enter tenant ID"
          />
        </div>
      </header>
      <main>
        <ActivityFeed tenantId={tenantId} />
      </main>
    </div>
  );
}

export default App;

