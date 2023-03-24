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
  const [loggedIn, setLoggedIn] = useState(false);

  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState("");
  const [newEvent, setNewEvent] = useState(false);

  /*on first render this gets the data loaded from the api at the specified link and stores it into the eventData array*/
  useEffect(() => {
    Axios.get('http://localhost:4000/api/events')
    .then(response => {
      setEventData(response.data);
    })
    .catch(err=>{
      console.log(err);
      setError(true);
    });
  }, []); 

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  /*this functions called to display the overlay of the popup and disable scrolling*/
  function on(element) {
      setEventId(element);
      document.getElementById("overlay").style.display = "block";
      document.body.classList.add('disable-scroll');
  };

  /*this function is called to hide the overlay of the popup and ebable scrolling*/
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

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:4000/api/newEvent', {
      name: name,
      details: details,
      date: date,
      time: time,
      location: location,
      type: type
    })
    .then(response => {
      if(response.data.message){
        alert(response.data.message);
        setNewEvent(false);
        setName('');
        setDate('');
        setTime('');
        setLocation('');
        setDetails('');
        setType('');
        document.body.classList.remove('disable-scroll');
      }
    })
    .catch(err=> {
      console.log(err)
    });
  };

  return (
    <div className='events-page'>
      <img src={require('../assets/images/banner.jpg')} alt='uwindsor banner' />

      <div className='event-search'>
        <div className='dropdown'>
          <button className='filter-btn'>Filter</button>
          <div className="dropdown-content">
            <span onClick={()=> {filterEvents('-')}}>-</span>
            <span onClick={()=> {filterEvents('University')}}>University</span>
            <span onClick={()=> {filterEvents('Personal')}}>Personal</span>
          </div>
        </div>

        <input id='search-input' type='text' placeholder='Search events...' autoComplete='off' onChange={(e)=> {setSearchTerm(e.target.value)}} onKeyDown={(e) => {if (e.key === 'Enter') {searchEvent()}}}/>
        <button id='search-btn' type='button' onClick={()=> {searchEvent()}}><img src={SearchIcon} alt='search icon' /></button>

        {loggedIn ?
          <button className='add-event-btn' onClick={() => {setNewEvent(true); document.body.classList.add('disable-scroll');}}>+</button>
          :
          <button className='empty-btn'></button>
        }
      </div>

      {!error ?
        <span>

        {newEvent ?
          <div id='overlay2'>
            <div className='new-event-form'>
              <form onSubmit={handleSubmit}>
                <label>Name: </label><br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/><br />
                <label>Date/Time: </label><br/>
                <div id='date-input'>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
                  <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required/><br />
                </div>
                <label>Location: </label><br/>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required/><br/>
                <label>Event Type: </label><br/>
                <select name="event-type" value={type} onChange={(e) => setType(e.target.value)}><br/>
                  <option value="University" selected="selected">University</option>
                  <option value="Personal">Personal</option>
                </select><br/><br/>
                <label>Details: </label><br/>
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} required/><br /><br/>
                <div id='option-btns'>
                  <button type="submit">Submit</button>&emsp;
                  <button type="button" onClick={() => {setNewEvent(false); document.body.classList.remove('disable-scroll');}}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
          :
          <></>
        }

      {/*this div will start as hidden and then displayed to show the details of the event that was selected for details*/}
      <div id='overlay'>
          <div className='event-details'>
            {eventData.filter(event => event.event_id === eventId).map(filteredEvent => (
                <div>
                  <h1> {filteredEvent.event_name} </h1>
                  <p> {filteredEvent.event_details} </p>
                  <h3> {filteredEvent.event_date} at {filteredEvent.event_time.slice(0, -3)} </h3>
                  <h3> {filteredEvent.event_location} </h3>
                  <button onClick={() => off()} >Back</button>
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
                  <h2> {filteredEvent.event_name} </h2>
                  <h4> {filteredEvent.event_date} at {filteredEvent.event_time.slice(0, -3)} </h4>
                  <h4> {filteredEvent.event_location} </h4><br/>
                  <button onClick={()=> {on(filteredEvent.event_id)}}>Details</button>
                </div>
              );
            })}
          </>
          :
          <>
            {eventData.filter(event => event.event_name.toLowerCase().includes(searchTerm.toLowerCase())).map(filteredEvent => {
                return (
                  <div className='event-container' key={filteredEvent.event_id}>   
                    <h2> {filteredEvent.event_name} </h2>
                    <h4> {filteredEvent.event_date} at {filteredEvent.event_time.slice(0, -3)} </h4>
                    <h4> {filteredEvent.event_location} </h4><br/>
                    <button onClick={()=> {on(filteredEvent.event_id)}}>Details</button>
                  </div>
                );
              
            })}
          </>
        }

        <a href='#top' id='back-to-top'><img src={UpArrow} alt='arrow pointing up' /></a>
      </div>
      </span>
      :
        <h2>Uh Oh, something went wrong on our end!</h2>
      }
    </div>
  )
}

export default Event
