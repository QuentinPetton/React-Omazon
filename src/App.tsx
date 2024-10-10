import './styles/reset.css';
import './styles/global.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import type { Category, Product, Tag } from './assets/@types';

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  //Gérer affichage du nmbre article dans panier
  const [products, setProducts] = useState<Product[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  //Gérer affichage modal
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    fetch('/data/tags.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //Si on a la réponse, on l'affiche en console.log

        setTags(data);
      })
      //Si erreur on console l'erreur
      .catch((error) => console.error(error));
  }, []);

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

  function displayModalAddForm() {
    setDisplayModal(true);
  }

  return (
    <div>
      <Header items={categories} cartProducts={cartProducts} />
      <HomePage
        categories={categories}
        tags={tags}
        products={products}
        addProductToCart={addProductToCart}
        displayModal={displayModal}
      />
      <Footer
        categories={categories}
        products={products}
        displayModalAddForm={displayModalAddForm}
      />
    </div>
  );
}

export default App;
