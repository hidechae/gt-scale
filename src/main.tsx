import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import './analytics'

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`, {
      updateViaCache: 'none',
    }).catch(error => {
      console.error('Offline support could not be enabled:', error)
    })
  })
}
