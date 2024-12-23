import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppHabitacionUno from './AppHabitacionUno'
import './styles/habitacion-uno.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppHabitacionUno />
  </StrictMode>,
)
