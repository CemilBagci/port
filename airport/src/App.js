import React,  {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
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

const App = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [flights, setFlights] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try{
      const respnse = await axios.post ('http://localhost:8080/flight/search', 
      {source: source, destination : destination});
      setFlights(respnse.data);
    }catch (error) {
      setFlights(error.respnse);
    }
  };

  return (
    <Container style={{ background: 'sky-900' }}>
    <div>
    <Typography variant="h4" gutterBottom></Typography>
      <form onSubmit={handleSubmit}>
  
       
        <TextField  id="standard-basic" label="Kalkış" variant="standard"  type="text" value={source} onChange={(e)=>setSource(e.target.value)} />
        <p>-</p>
        <TextField  id="standard-basic" label="Varış" variant="standard"  type="text" value={destination} onChange={(e)=>setDestination(e.target.value)} />

        <Button variant="contained" color="primary" type="submit">Uçuş Ara</Button>
        {' '}<Button component={Link} to="/all" variant="contained" color="primary">Tüm Uçuşlar</Button>

      </form>
      {flights && 
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
}
    </div>
    </Container>
  )
};
export default App;