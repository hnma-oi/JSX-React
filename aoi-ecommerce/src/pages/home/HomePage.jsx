import axios from 'axios'
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductGrid } from './ProductGrid';
// import { products } from '../assets/data/products';
import './HomePage.css';

export function HomePage( { cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
    setProducts(response.data);
    });
}, []);

    return (
    <>
      <title>E-commerce Project</title>
      <link rel="icon" type="image/svg+xml" href="anna.webp" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products}/>
      </div>
    </>
  );
}