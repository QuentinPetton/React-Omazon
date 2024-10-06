import { useEffect, useState } from 'react';
import type { Category } from '../../assets/@types';

function Categories() {
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

  return (
    <div>
      <h2 className="px-4 pt-10 font-bold text-3xl">Catégories à l'honneur</h2>
      <article className="">
        <div className="relative w-40 h-40 text-center">
          <img
            src="../src/assets/categories/animalerie.webp"
            alt=""
            className="object-contain w-full h-full rounded-full "
          />
          <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 rounded-full" />
          <span>Animalerie</span>
        </div>
      </article>
    </div>
  );
}

export default Categories;
