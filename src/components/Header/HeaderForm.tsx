import { useEffect, useState } from 'react';
import type { Category } from '../../assets/@types';

function HeaderForm() {
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
      <form className="flex justify-center w-full" action="">
        <select
          name="Toutes nos catégories"
          id="categories-select"
          className="hidden rounded-l-md p-2 text-Brand_grey border-r border-Brand_grey md:block  lg:block"
        >
          <option value="">Toutes nos catégories</option>
          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.title}>
              {categorie.title}
            </option>
          ))}
        </select>
        <input
          className="rounded-l-md p-2 w-full text-Brand_grey md:rounded-l-none lg:rounded-l-none"
          type="text"
          placeholder="Rechercher Omazon"
        />
        <button
          type="button"
          className="p-2 px-4 bg-Brand_primary rounded-r-md"
        >
          <img src="/icons/search.svg" alt="Search icon" />
        </button>
      </form>
    </div>
  );
}
export default HeaderForm;
