import React from 'react'
import logo from './logo.svg'
import './App.css'
import CssBaseline from '@mui/material/CssBaseline'
import { Helmet } from 'react-helmet'
import HelloWorld from './components/helloWorld'

function App() {
  return (
    <div className='App'>
      <Helmet>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Helmet>
      <CssBaseline />
      <header className='App-header'>
        <HelloWorld />
      </header>
    </div>
  )
}

export default App
