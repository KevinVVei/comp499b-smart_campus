import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SearchIcon from '../assets/images/search-icon.svg';
import UpArrow from '../assets/images/up-arrow.svg';
import './Styles/Event.css';

function Event() {

  const [eventData, setEventData] = useState([]);
  const [eventId, setEventId] = useState();
  const [eventType, setEventType] = useState('-');
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState(false);

  {/*on first render this gets the data loaded from the api at the specified link and stores it into the eventData array*/}
  useEffect(() => {
    Axios.get('http://localhost:4000/api/eents')
    .then(response => {
      setEventData(response.data);
    })
    .catch(err=>{
      console.log(err);
      setError(true);
    });
  }, []); 

  {/*this functions called to display the overlay of the popup and disable scrolling*/}
  function on(element) {
    setEventId(element);
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add('disable-scroll');
  };

  {/*this function is called to hide the overlay of the popup and ebable scrolling*/}
  function off() {
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove('disable-scroll');
  };

  const filterEvents = (e) => {
    setEventType(e);
    setSearched(false);
    document.getElementById('search-input').value = '';
  }

  const searchEvent = () => {
    setSearched(true);
  }

  return (
    <div className='events-page'>
      <img src={require('../assets/images/banner.jpg')} alt='uwindsor banner' />

      <div className='event-filter'>
        <div className='dropdown'>
          <button className='filter-btn'>Filter</button>
          <div className="dropdown-content">
            <span onClick={()=> {filterEvents('-')}}>-</span>
            <span onClick={()=> {filterEvents('University')}}>University</span>
            <span onClick={()=> {filterEvents('Personal')}}>Personal</span>
          </div>
        </div>

        <div className='search-bar'>
          <input id='search-input' type='text' placeholder='Search events...' onChange={(e)=> {setSearchTerm(e.target.value)}} />
          <button type='button' onClick={()=> {searchEvent()}}><img src={SearchIcon} alt='search icon' /></button>
        </div>
      </div>

      {!error ?
        <span>
      {/*this div will start as hidden and then displayed to show the details of the event that was selected for details*/}
      <div id='overlay'>
        <div className='event-details'>
          {eventData.filter(event => event.event_id === eventId).map(filteredEvent => (
              <div>
                <img className='event-image' src={require('../assets/images/event.jpeg')} alt='event pic' />
                <button className='return-btn' onClick={() => off()}>&#x2715;</button><br/>
                <h1> {filteredEvent.event_name} </h1>
                <p> {filteredEvent.event_details} </p>
                <h3> {filteredEvent.event_date} at {filteredEvent.event_time} </h3>
                <h3> {filteredEvent.event_location} </h3>
              </div>
          ))}      
        </div>
      </div>

      {/*displays all events stored from the api*/}
      <div className='events'>
        { !searched ? 
          <>
            {eventData.filter(event => event.type === eventType || eventType === '-').map(filteredEvent => {
              return (
                <div className='event-container' key={filteredEvent.event_id}>   
                  <div >
                    <div className='white-back'>
                      <h2> {filteredEvent.event_name} </h2>
                      <h4> {filteredEvent.event_date} at {filteredEvent.event_time} </h4>
                      <h4> {filteredEvent.event_location} </h4>
                    </div><br/>
                    <button onClick={()=> {on(filteredEvent.event_id)}}>Details</button>
                  </div>
                </div>
              );
            })}
          </>
          :
          <>
            {eventData.filter(event => event.event_name.toLowerCase().includes(searchTerm.toLowerCase())).map(filteredEvent => {
                return (
                  <div className='event-container' key={filteredEvent.event_id}>   
                    <div>
                      <div className='white-back'>
                        <h2> {filteredEvent.event_name} </h2>
                        <h4> {filteredEvent.event_date} at {filteredEvent.event_time} </h4>
                        <h4> {filteredEvent.event_location} </h4>
                      </div><br/>
                      <button onClick={()=> {on(filteredEvent.event_id)}}>Details</button>
                    </div>
                  </div>
                );
              
            })}
          </>
        }
        <a href='#top'><img src={UpArrow} alt='arrow pointing up' /></a>
      </div>
      </span>
      :
        <h2>Uh Oh, something went wrong on our end!</h2>
      }
    </div>
  )
}

export default Event
