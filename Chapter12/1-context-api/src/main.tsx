import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyComponent from './MyComponent.tsx'
import { ThemeProvider } from './ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  </StrictMode>
)
