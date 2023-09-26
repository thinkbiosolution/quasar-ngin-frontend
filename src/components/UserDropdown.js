// src/components/UserDropdown.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function UserDropdown({ onUserSelected }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    axios.get('/getUsers') // Create an endpoint to retrieve user IDs
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
    onUserSelected(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel>User ID</InputLabel>
      <Select value={selectedUser} onChange={handleUserChange}>
        {users.map((user) => (
          <MenuItem key={user} value={user}>
            {user}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default UserDropdown;
