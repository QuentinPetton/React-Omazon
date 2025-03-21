import './styles/reset.css';
import './styles/global.css';

import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import type { Category, Product, Tag } from './assets/@types';

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  //Gérer affichage modal
  const [displayModal, setDisplayModal] = useState(false);

  //Gestion du nmbre article dans panier
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://omazon-server.onrender.com/tags')
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
    fetch('https://omazon-server.onrender.com/categories')
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
    fetch('https://omazon-server.onrender.com/products')
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

  //Gestion affichage dans titre onglet head
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
      <Outlet
        context={{
          categories,
          tags,
          products,
          addProductToCart,
          displayModal,
          addRental,
          displayModalAddForm,
        }}
      />
      <Footer
        categories={categories}
        displayModalAddForm={displayModalAddForm}
      />
    </div>
  );
}

export default App;
