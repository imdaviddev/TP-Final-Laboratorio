import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Router from './routes/index.tsx'

import '@fontsource/inter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router/>
  </StrictMode>,
)
