import React from 'react'
import ReactDOM from 'react-dom/client'
// import CounterApp from './CounterApp.jsx'
import CounterWithCustomHook from './CounterWithCustomHook.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    <CounterWithCustomHook/>
  </React.StrictMode>,
)
