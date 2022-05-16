
import './App.css';
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import { render } from '@testing-library/react';
import Customer from './Components/Customer';
import Chart from './Components/Chart'
import Calendar from './Components/Calendar';
import Training from './Components/Training';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LayoutCssClasses } from 'ag-grid-community';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Personal Training
        </Typography>
      </Toolbar>
      </AppBar>
      
      <BrowserRouter>
      <Link to="/">Customer</Link>{' '}
      <Link to="/training">Training</Link>{' '} 
      <Link to="/calendar">Calendar</Link>{' '}
      <Link to="/chart">Chart</Link>{' '}

      <Routes>
      <Route path="/" element={<Customer />} />
      <Route path="/training" element={<Training />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/chart" element={<Chart />} />
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
