import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css'

function Event() {
  return (
    <div className='events-page'>
      <img src={require('../assets/images/banner.jpg')} alt='uwindsor banner' />

      <div className='events'>
        <div className='event'>
          <img src={require('../assets/images/event.jpeg')} alt='event pic' />
          <h1>Freshman Welcome week</h1>
          <p>New students join us to learn about
            the university and meet new fellow students.
          </p>
          <h3>Thursday September 6<br/>Toldo centre</h3>
          <Link to='/Event_Details'>
            <button>Details</button>
          </Link>
        </div>
        
        <div className='event'>
          <img src={require('../assets/images/event.jpeg')} alt='event pic' />
          <h1>Freshman Welcome week</h1>
          <p>New students join us to learn about
            the university and meet new fellow students.
          </p>
          <h3>Thursday September 6<br/>Toldo centre</h3>
          <Link to='/Event_Details'>
            <button>Details</button>
          </Link>
        </div>

        <div className='event'>
          <img src={require('../assets/images/event.jpeg')} alt='event pic' />
          <h1>Freshman Welcome week</h1>
          <p>New students join us to learn about
            the university and meet new fellow students.
          </p>
          <h3>Thursday September 6<br/>Toldo centre</h3>
          <Link to='/Event_Details'>
            <button>Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Event