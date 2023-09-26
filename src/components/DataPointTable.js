// src/components/DataPointTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function DataPointTable({ userId }) {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    if (userId !== '') {
      axios.get(`/getDataPoints/${userId}`)
        .then((response) => {
          setDataPoints(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Consent Info</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataPoints.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.userId}</TableCell>
              <TableCell>{entry.consentInfo}</TableCell>
              <TableCell>{new Date(entry.timestamp * 1000).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataPointTable;
