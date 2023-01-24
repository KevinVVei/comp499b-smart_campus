import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Styles/Event.css';

function Event() {

  const [eventData, setEventData] = useState([]);
  const [eventId, setEventId] = useState();

  useEffect(() => {
    Axios.get('http://localhost:4000/api/events').then(response => {
      setEventData(response.data);
    });
  }, []); 

  function on(element) {
    setEventId(element);
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add('disable-scroll');
  };

  function off() {
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove('disable-scroll');
  };

  return (
    <div class='events-page'>
      <img src={require('../assets/images/banner.jpg')} alt='uwindsor banner' />

      <div id='overlay'>
            <div className='event-details'>
              <div>
                  <img src={require('../assets/images/event.jpeg')} alt='event pic' />
              
                  {eventData.filter(event => event.event_id === eventId).map(filteredEvent => (
                      <div>
                        <h1> {filteredEvent.event_name} </h1>
                        <p> {filteredEvent.event_details} </p>
                        <h3> {filteredEvent.event_date} at {filteredEvent.event_time} </h3>
                        <h3> {filteredEvent.event_location} </h3>
                      </div>
                  ))}      
              </div>
              <button onClick={() => off()}>Back</button>
            </div>
      </div>

      <div className='events'>
        {eventData.map((val) => {
          return (
            <div className='event-container' key={val.event_id}>   
              <div >
                <div className='white-back'>
                <h1> {val.event_name} </h1>
                
                <h3> {val.event_date} at {val.event_time} </h3>
                <h3> {val.event_location} </h3>
                </div><br/><br/>
                <button onClick={() => on(val.event_id)} >Details</button>
              </div>
            </div>
          );
        })}
      </div>
      
          
    </div>
  )
}

export default Event