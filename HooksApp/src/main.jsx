import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// ======== useState ========== //
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'


// ======== useEffect ========== //
import { SimpleForm} from './02-useEffect/SimpleForm.jsx'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <FormWithCustomHook/>
  /* </StrictMode>, */
)
