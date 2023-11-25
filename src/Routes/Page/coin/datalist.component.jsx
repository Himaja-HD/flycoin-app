// src/components/DataList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './coin.style.css';


const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    

    // Replace with your API endpoint
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/';

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }

  return (
    <div>
      <h1>Coin List</h1>
      
      <ul className='card-1'>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.image.large} alt="" width="50"/>
            <p> {item.id}</p>
            <p> $ {item.market_data.current_price.usd}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};     

export default DataList;
