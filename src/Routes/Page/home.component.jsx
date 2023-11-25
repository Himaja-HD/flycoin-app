import {React,  useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const Home = () => {
  const [data, setData] = useState([]);

  const handleEditCellChange = ({ id, field, props }) => {
    // Update the data with the edited value
    const updatedData = data.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: props.value };
      }
      return row;
    });
    setData(updatedData);
  };

  useEffect(() => {
    // Fetch data from an API endpoint using Axios
    axios.get('https://api.coingecko.com/api/v3/coins/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []); // Empty dependency array ensures that useEffect runs once after the initial render

  // Define columns for the DataGrid
  const columns = [
    { field: 'name', headerName: 'ID', width: 90, editable: false },
    { field: 'market_data.current_price.usd',
      
    headerName: 'price', width: 200 },
    { field: 'market_data.price_change_24h_in_currency.usd', headerName: 'change 24h', width: 150,editable: true  },
    
  ];

  return (
    <div style={{ height: 400, width: '50%'}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        editMode="cell"
        onEditCellChange={handleEditCellChange}
      />
    </div>
  );
};

export default Home;
