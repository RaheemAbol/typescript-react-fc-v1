import React, { useState } from 'react';
import List from "./components/List";
import './App.css';
import AddToList from './components/AddToList';


export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
}[]
}
function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Khabib Numgnamdov",
      url: "https://image-cdn.essentiallysports.com/wp-content/uploads/20200524094030/khabib-nurmagomedov-tony-ferguson-set-for-title-fight-at-ufc-pay-per-view-in-april-per-report-1.jpg",
      age: 32,
      note: "Send me location"
    }
  ])



  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
