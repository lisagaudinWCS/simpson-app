import axios from 'axios';
import React,{useState} from 'react';

import DisplaySimpson from './Components/DisplaySimpson';

import './App.css';

const sampleSimpson = {
  character: '',
  quote: '',
  image: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

function App() {
  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpson(data[0]);
      });
  };

  const [simpson, setSimpson] = useState(sampleSimpson);
  
  return (
    <div className="App">
      <DisplaySimpson simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get simpson</button>
    </div>
  );
}

export default App;
