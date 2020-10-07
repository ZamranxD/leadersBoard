import React from 'react';
import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <h1 className="leadersboard">Leadersboard</h1>
      <Student name="Mohammad Zamran" university="VU Pakistan" score={350} />
      <Student name="Matt Murdock" university="LUMS" score={343} />
      <Student name="John Doe" university="NUST" score={338} />
    </div>
  );
}

export default App;
