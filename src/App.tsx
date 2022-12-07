import './App.css'
import CssBaseline from '@mui/material/CssBaseline'
import { Helmet } from 'react-helmet'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className='App'>
      <Helmet>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Helmet>
      <CssBaseline />
      <header className='App-header'>
        <Homepage />
      </header>
    </div>
  )
}

export default App
