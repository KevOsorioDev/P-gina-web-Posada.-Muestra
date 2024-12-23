import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppExploraParaty from './AppExploraParaty'
import './styles/explora-paraty.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppExploraParaty></AppExploraParaty>
  </StrictMode>,
)
