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

  //Gestion du nmbre article dans panier
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

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

        setProducts(data);
      })
      //Si erreur on console l'erreur
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (cartProducts.length <= 1) {
      document.title = `Omazon (panier ${cartProducts.length} produit)`;
    } else {
      document.title = `Omazon (panier ${cartProducts.length} produits)`;
    }
  }, [cartProducts.length]);

  function addProductToCart(product: Product) {
    //todo vérifier si produit pas déjà dans panier
    console.log('carte ok');
    setCartProducts([...cartProducts, product]);
  }
  //Ajout d'un nouveau produit via form
  function addRental(newproduct: Product) {
    //todo vérifier que le produit n'est pas déjà présent

    console.log('nouveau produit');
    //On ajoute le nouveau produit dans ma liste
    setProducts([...products, newproduct]);
  }

  function displayModalAddForm() {
    setDisplayModal(!displayModal);
  }

  return (
    <div>
      <Header
        items={categories}
        cartProducts={cartProducts}
        products={products}
      />
      <HomePage
        categories={categories}
        tags={tags}
        products={products}
        addProductToCart={addProductToCart}
        displayModal={displayModal}
        addRental={addRental}
        displayModalAddForm={displayModalAddForm}
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
