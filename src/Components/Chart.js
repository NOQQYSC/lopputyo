import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import React, { useCallback, useState, useEffect, useRef, Component, PureComponent } from "react";
import { AgGridReact } from'ag-grid-react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

    class Example extends PureComponent {
        static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={1000}
            data={trainings}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="activity" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="duration" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
    }