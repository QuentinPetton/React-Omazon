import './styles/reset.css';
import './styles/global.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import type { Category, Product } from './assets/@types';

function App() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //Si on a la réponse, on l'affiche en console.log

        setCategories(data);
      })
      //Si erreur on console l'erreur
      .catch((error) => console.error(error));
  }, []);

  //Gérer affichage du nmbre article dans panier
  const [products, setProducts] = useState<Product[]>([]);
  //On récupère les données de data/products
  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //Si on a la réponse, on l'affiche en console.log
        console.log(data);
        setProducts(data);
      })
      //Si erreur on console l'erreur
      .catch((error) => console.error(error));
  }, []);

  //Gestion du nmbre article dans panier
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  function addProductToCart(product: Product) {
    console.log('carte ok');
    setCartProducts([...cartProducts, product]);
  }

  return (
    <div>
      <Header items={categories} cartProducts={cartProducts} />
      <HomePage
        categories={categories}
        products={products}
        addProductToCart={addProductToCart}
      />
      <Footer />
    </div>
  );
}

export default App;
