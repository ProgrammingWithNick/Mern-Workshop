// In your main.jsx or App.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './components/Product.jsx'
import uiImage from './assets/ui.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product image={uiImage} name="Sample Product" price="$19.99" />  
    <Product image={uiImage} name="Sample Product" price="$19.99" />  
    <Product image={uiImage} name="Sample Product" price="$19.99" />  
    <App />
  </StrictMode>,
)