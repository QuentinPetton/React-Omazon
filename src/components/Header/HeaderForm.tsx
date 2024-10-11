import { useState } from 'react';
import type { Category, Product } from '../../assets/@types';

type CategoriesListProps = {
  items: Category[];
  products: Product[];
};

function HeaderForm({ items, products }: CategoriesListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const findProductByTitle = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const [searchCategory, setsearchCategory] = useState('');
  // console.log(searchCategory);
  //todo lier les deux finds pour afficher contenu
  const finProductByCategories = findProductByTitle.filter((product) =>
    product.category.title.toLowerCase().includes(searchCategory.toLowerCase()),
  );
  console.log(finProductByCategories);

  return (
    <div>
      <form className="flex justify-center w-full" action="">
        <select
          value={searchCategory}
          onChange={(event) => setsearchCategory(event.target.value)}
          name="Toutes nos catégories"
          id="categories-select"
          className="hidden rounded-l-md p-2 text-Brand_grey border-r border-Brand_grey md:block  lg:block"
        >
          <option value="">Toutes nos catégories</option>
          {items.map((categorie) => (
            <option key={categorie.id} value={categorie.title}>
              {categorie.title}
            </option>
          ))}
        </select>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
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
