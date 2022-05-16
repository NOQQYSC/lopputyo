import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import React, { useCallback, useState, useEffect, useRef, Component, PureComponent } from "react";
import { AgGridReact } from'ag-grid-react'

export default function Chart() {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings',
        {method: 'GET'})
        
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
        
    }

    const data = [
        {trainings}
    ]

    return (
        <div></div>
      );
    }