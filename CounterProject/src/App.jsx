import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [Counter, SetCounter]  = useState(10)
  // let Counter = 10;
  const AddValue = () =>{
   console.log("value Added " , Counter);
    SetCounter(Counter+1)    
  }
  const RemoveValue = () =>{
    console.log("value remove" , Counter);
     SetCounter(Counter-1)
     
  }

  return (
    <>
       <h1>cahe and react</h1>
       <h2>Counter Value : {Counter} </h2>
       <button onClick={AddValue}>
        add value {Counter} </button>
       <br />
       <button onClick={RemoveValue}>
        remove value {Counter} </button>
    </>
  )
}

export default App
