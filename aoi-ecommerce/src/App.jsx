import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Homepage'
import './App.css'

function App() {
  return (
    <Routes> 
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>Checkout Page Test</div>}></Route>
    </Routes>
  )
}

export default App
