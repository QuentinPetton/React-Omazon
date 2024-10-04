import { useEffect, useState } from 'react';
import type { Product } from '../../assets/@types';

function Products() {
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

  return (
    <div>
      <h1 className="px-4 pt-10 font-bold text-3xl">Tous nos produits</h1>
      //todo boucler sur le tableau de products .map
      {products.map((product) => (
        <article key={product.id} className="m-4 border-Main_low ">
          <div className="relative pb-6">
            <span className=" rounded-tl-lg top-0 left-0 pl-4 pr-10 py-1  bg-Brand_primary text-sm text-Main_Lowest [clip-path:polygon(0%_0%,_100%_0%,_81%_100%,_0%_100%)]">
              N°1 des ventes
            </span>
            <img
              className="w-1/2 object-cover mx-auto mt-6 "
              src="../src/assets/products/frisbee.webp"
              alt="Frisbee"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.04)] " />
          </div>

          <div className="border-r border-b border-l border-Main_low p-4">
            <p>
              Trixie Frisbee Caoutchouc Naturel 22cm pour chien, Coloris
              aléatoire
            </p>
            <div className="flex items-center gap-1 mt-10 mb-4">
              <span className="font-bold text-3xl">8</span>
              <sup className="font-normal text-xs  ">99 €</sup>
            </div>

            <button
              className="p-2 px-4 bg-Brand_primary rounded-3xl text-xs
        "
              type="button"
            >
              Ajouter au panier
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Products;
