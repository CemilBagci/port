import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleTimeString(undefined, options)
  }

const Main = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/flight');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Uçuş Kodu</TableCell>
          <TableCell align="right">Kalkış Yeri</TableCell>
          <TableCell align="right">Varış Yeri</TableCell>
          <TableCell align="right">Kalkış Port</TableCell>
          <TableCell align="right">Varış Port</TableCell>
          <TableCell align="right">Kalkış Saati</TableCell>
          <TableCell align="right">Varış Saati</TableCell>
          <TableCell align="right">Uçuş Süresi</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {flights.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.originAirport.city.name}</TableCell>
            <TableCell align="right">{row.destinationAirport.city.name}</TableCell>
            <TableCell align="right">{row.originAirport.code}</TableCell>
            <TableCell align="right">{row.destinationAirport.code}</TableCell>
            <TableCell align="right">{formatDate(row.departureDateTime)}</TableCell>
            <TableCell align="right">{formatDate(row.arrivalDateTime)}</TableCell>
            <TableCell align="right">{row.flightDuration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default Main;