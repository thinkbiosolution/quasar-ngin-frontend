# SETUP

Set up Frontend React App to view Ethereum Consent information

## Create a React app

```
npx create-react-app ethereum-frontend
cd ethereum-frontend
npm install axios @mui/material @mui/icons-material
```

## Create React components 
Create components to make requests to the API, get user IDs, and display data points.

```js
// src/components/UserDropdown.js

...

function UserDropdown({ onUserSelected }) {
...
  };

  return (
   ...
}

export default UserDropdown;
```

```js
// src/components/DataPointTable.js
...

function DataPointTable({ userId }) {
...
  }, [userId]);

  return (
...
}

export default DataPointTable;

```

## Running the Frontend

```bash
# Start the frontend (React)
cd ethereum-frontend
npm start
```

