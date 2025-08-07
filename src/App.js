import React from 'react';
import './App.css';

function TeacherCard(props) {
  return (
    <div className="teacher-card">
      <h2>{props.name}</h2>
      <p><strong>Subject:</strong> {props.subject}</p>
      <p><strong>Experience:</strong> {props.experience} years</p>
      <p><strong>Institute:</strong> {props.school}</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Teacher Directory</h1>
      <div className="card-container">
        <TeacherCard name="Sir Ali Raza" subject="Urdu" experience={12} school="Beaconhouse School System" />
        <TeacherCard name="Madam Ayesha Khan" subject="Biology" experience={9} school="The City School" />
        <TeacherCard name="Sir Bilal Ahmed" subject="Islamiat" experience={15} school="Roots International" />
        <TeacherCard name="Madam Fariha Yousaf" subject="Pak Studies" experience={7} school="Frobel's International" />
        <TeacherCard name="Sir Usman Zafar" subject="Mathematics" experience={10} school="APS (Army Public School)" />
        <TeacherCard name="Madam Zara Fatima" subject="Computer Science" experience={5} school="NUST College" />
      </div>
    </div>
  );
}

export default App;
