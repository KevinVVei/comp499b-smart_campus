import React, { useState } from 'react';
import './Styles/Profile.css';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [bio, setBio] = useState();
  const [profilePicture, setProfilePicture] = useState();

  // handle the form submission and send the data to the server
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInfo = { name, age, bio, profilePicture };
    try {
      await axios.post('/api/users-info', userInfo);
      alert('User information saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Error saving user information');
    }
  };

  // add a form to allow users to update their profile information
  // need work to POST the data to the server
  // also need a database to store the data
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
        </label>
        <br />
        <label>
          Bio:
          <textarea value={bio} onChange={(event) => setBio(event.target.value)} />
        </label>
        <br />
        <label>
          Profile Picture URL:
          <input type="text" value={profilePicture} onChange={(event) => setProfilePicture(event.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
