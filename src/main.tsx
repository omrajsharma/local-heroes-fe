import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import UserContextProvider from './context/UserContext.tsx'

const theme = createTheme({
  direction: 'rtl',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
