import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Homepage'
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx'
import { OrdersPage } from './pages/Orders.jsx'
import { TrackingPage } from './pages/Tracking.jsx'
import { NotFound } from './pages/NotFound.jsx'
import './App.css'

function App() {
  return (
    <Routes> 
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
