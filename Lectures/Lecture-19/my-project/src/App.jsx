import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  var val = 5;
 if(val < 10){
  var text = 'Hello Students'
 }
  return(
    <div>
      <Header />
      <h2>Hello {5+5} Studetns</h2>
      <p>Geeta {(val) < 5 ?'Hello students':'Geeta University'} University</p>
      <h3>{text} Good Afternoon </h3>
      <Footer />
    </div>
    
  )

 
}

export default App
