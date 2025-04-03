import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the E-commerce Project!</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
