import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target:'_blank'},
    'click me to vist google'
    
)



ReactDOM.createRoot(document.getElementById('root')).render(
 
  reactElement
  
);
