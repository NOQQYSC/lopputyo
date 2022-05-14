import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import React, { useState, useEffect, Component } from "react";
import { AgGridReact } from'ag-grid-react'
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from "@mui/material/Button";
import { format, formatDistance, formatRelative, getDate, subDays } from 'date-fns'
import Addtraining from "./Addtraining";
import Customer from "./Customer";
import Calendar from "./Calendar";




function Training() {

    const [trainings, setTrainings] = useState([]);

    //format(, 'dd/MM/yyyy')
    
    
    useEffect(() => fetchData(), []);

    

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings',
        {method: 'GET'})
        
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
        
    }

    const deleteTraining = (id) => {
        if (window.confirm('Delete this training?')) {
        fetch(id, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        }
    }
    


    const columns = [
        {headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true,
        //cellRenderer: row => format(row.field, 'dd/MM/yyyy')
        
    },
        {headerName: 'Duration in minutes', field: 'duration', sortable: true, filter: true, floatingFilter: true},
        {headerName: 'Activity', field: 'activity', sortable: true, filter: true, floatingFilter: true},
        {headerName: 'Customer', field: 'customer.firstname', sortable: true, filter: true, floatingFilter: true},
        {
            sortable: false, filter: false, floatingFilter: false, width: 100,
            headerName: '',
             field: 'id',
             cellRenderer: row => <Button size="small" color="secondary" onClick={() =>  deleteTraining('https://customerrest.herokuapp.com/api/trainings/' + row.value)}>Delete</Button>
        },
    ]

  return (
    <div className="ag-theme-material"
    style={{height: '700px', width: '100%', margin: 'auto'}} >
      <h2>Trainings</h2>
      
      <AgGridReact
            
            columnDefs={columns}
            rowData={trainings}
            
            
            >
            </AgGridReact>
    </div>
  );
}

export default Training;