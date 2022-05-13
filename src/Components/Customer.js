import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import React, { useState, useEffect, Component } from "react";
import { AgGridReact } from'ag-grid-react'
import Button from "@mui/material/Button";
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css';
import Addcustomer from "./Addcustomer";
import Editcustomer from "./Editcustomer";
import Addtraining from "./Addtraining";

function Customer(props) {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Delete this customer?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        }

    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const columns = [
        {headerName: 'First Name', field: 'firstname', sortable: true, filter: true, floatingFilter: true},
        {headerName: 'Last Name', field: 'lastname', sortable: true, filter: true, floatingFilter: true},
        {headerName: 'Street Address', field: 'streetaddress', sortable: true, filter: true, floatingFilter: true},
         {headerName: 'Postcode', field: 'postcode', sortable: true, filter: true, floatingFilter: true},
         {headerName: 'City', field: 'city', sortable: true, filter: true, floatingFilter: true},
         {headerName: 'Email', field: 'email', sortable: true, filter: true, floatingFilter: true},
         {headerName: 'Phone', field: 'phone', sortable: true, filter: true, floatingFilter: true},
         {
            headerName: 'Add Training',
            sortable: false, filter: false, floatingFilter: false, width: 100,
            field: 'links.1.href',
             cellRenderer: row => <Addtraining link={row.value} />
            
         },
         {
            headerName: '',
            sortable: false, filter: false, floatingFilter: false, width: 100,
            cellRenderer: row => <Editcustomer customer={row.data} updateCustomer={updateCustomer} />
            
         },
         {
            sortable: false, filter: false, floatingFilter: false, width: 100,
            headerName: '',
             field: 'links.0.href',
             cellRenderer: row => <Button size="small" color="secondary" onClick={() => deleteCustomer(row.value)}>Delete</Button>
        },
    ]

  return (
    <div className="ag-theme-material"
                style={{height: '700px', width: '100%', margin: 'auto'}} >
      <h2>Customers</h2>
      <Addcustomer saveCustomer={saveCustomer} />
      <AgGridReact
            
            columnDefs={columns}
            rowData={customers}
            >
            </AgGridReact>
    </div>
  );
}

export default Customer;