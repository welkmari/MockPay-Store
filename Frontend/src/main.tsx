import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home'
import CarouselSize from './Components/CarouselSize'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <CarouselSize />
  </StrictMode>
)
