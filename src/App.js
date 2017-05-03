import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ParticipantForm from './ParticipantForm';

const App = () => {
  return (
    <div className="App">
    <h1>List of participants</h1>
      <ParticipantForm />
    </div>
  );
};

export default App;
