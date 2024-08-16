import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import {Create} from './pages/Create'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Create />
  </StrictMode>
)
