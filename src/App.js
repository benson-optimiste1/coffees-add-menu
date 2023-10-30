import { useState } from 'react';
import './App.css';
import AddCoffee from './Components/AddCoffee';
import Hero from './Components/Hero';

function App() {
  const [coffees, setCoffees] = useState()
  return (
    <>
    <Hero/>
    <AddCoffee/>
    <AddCoffee setCoffees={setCoffees}/>
    </>
  )
}

export default App;
