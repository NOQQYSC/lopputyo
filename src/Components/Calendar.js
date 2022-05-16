import dayjs from 'dayjs'
import {  BrowserRouter,  Routes,  Route,  Link} from"react-router-dom";
import React, { useCallback, useState, useEffect, useRef, Component } from "react";
import { AgGridReact } from'ag-grid-react'
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { constant } from 'lodash';
import { Today } from '@mui/icons-material';

    
export default function Calendar(){

  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])
  
const fetchData = () => {
  fetch("https://customerrest.herokuapp.com/gettrainings",
  {method: 'GET'})
  .then(response => response.json())
  .then(setTrainings([]))
  .then(responseData => responseData.forEach(data => {
      const time = dayjs(data.date).add(data.duration, "minute").toDate();
      setTrainings(trainings => [...trainings, {title: data.activity, start: data.date, end: time}]);
  })
  )
  .catch(err => console.error(err))
}


    return(
      <div>
      <FullCalendar 
      plugins={[ dayGridPlugin, 
        timeGridPlugin ]}
      initialView="timeGridWeek"
      events={trainings}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      firstDay={1}
      slotMinTime={"06:00:00"}
      weekNumbers={true}
      weekNumberCalculation={"local"}
      navLinks={true}
      nowIndicator={true}
      eventColor={'sky-blue'}
      />
      </div>
    )
    ;
    }
  
