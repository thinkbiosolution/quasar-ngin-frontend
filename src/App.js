// src/App.js
import React, { useState } from 'react';
import UserDropdown from './components/UserDropdown';
import DataPointTable from './components/DataPointTable';

function App() {
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserSelected = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div className="App">
      <h1>Ethereum Consent Data</h1>
      <UserDropdown onUserSelected={handleUserSelected} />
      <DataPointTable userId={selectedUser} />
    </div>
  );
}

export default App;