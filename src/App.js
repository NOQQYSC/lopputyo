
import './App.css';
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import { render } from '@testing-library/react';
import Customer from './Components/Customer';
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
      <h1>Welcome to React router</h1>
      <BrowserRouter>
      <Link to="/">Customer</Link>{' '}
      <Link to="/training">Training</Link>{' '} 
      
      <Routes>
      <Route path="/" element={<Customer />} />
      <Route path="/training" element={<Training />} />
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
