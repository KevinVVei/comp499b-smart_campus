import React from 'react';
import { Link } from 'react-router-dom';
import './Event_Details.css';

function Event_Details() {
  return (
    <div className='event-details'>
        <div>
            <img src={require('../assets/images/event.jpeg')} alt='event pic' />

            <div>
            <h1>Freshman Welcome week</h1>

            <p>New students join us to learn about
                the university and meet new fellow students.

                It is a long established fact that a reader 
                will be distracted by the readable content 
                of a page when looking at its layout. The 
                point of using Lorem Ipsum is that it has a 
                more-or-less normal distribution of letters, 
                as opposed to using 'Content here, content 
                here', making it look like readable English. 
                Many desktop publishing packages and web page 
                editors now use Lorem Ipsum as their default 
                model text, and a search for 'lorem ipsum' 
                will uncover many web sites still in their 
                infancy. Various versions have evolved over 
                the years, sometimes by accident, sometimes 
                on purpose (injected humour and the like).
            </p>

            <h3>Thursday September 6<br/>Toldo centre</h3>

            <Link to='/Event'>
                <button>Back</button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Event_Details