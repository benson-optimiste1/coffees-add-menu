import { useState } from 'react';
import './App.css';
import AddCoffee from './Components/AddCoffee';
import Hero from './Components/Hero';
import CoffeeList from './Components/CoffeeList';

export default function App () {
  const [coffees, setCoffees] = useState()
  return (
    <>
    <Hero/>
    <AddCoffee setCoffees={setCoffees}/>
    <CoffeeList coffees={coffees}/>
    </>
  )
}


