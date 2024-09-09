import React from 'react';
import './App.css';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {

  const [selectedDelete, setSelectedDelete] = React.useState(false);

  function handleDelete() {
    console.log('Delete button clicked');
    setSelectedDelete(true);
    console.log('selectedDelete:', selectedDelete);
  }

  function handleProceed() {
    console.log('Proceed button clicked');
    setSelectedDelete(false);
    console.log('selectedDelete:', selectedDelete);
  }

  let myalert = <div></div>

  if (selectedDelete) {
    myalert = (
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={()=>handleProceed()}>Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {myalert}
      <button onClick={()=>handleDelete()}>Delete</button>
    </div>    
  );
}

