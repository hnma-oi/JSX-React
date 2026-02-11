import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Homepage'
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx'
import { OrdersPage } from './pages/Orders.jsx'
import { TrackingPage } from './pages/Tracking.jsx'
import { NotFound } from './pages/NotFound.jsx'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data)
      });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={ cart } />} />
      <Route path="checkout" element={<CheckoutPage cart={ cart } />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
