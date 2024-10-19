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
  console.log(searchCategory);

  // const finProductByCategoriesAndTitle = findProductByTitle.filter((product) =>
  //   product.categoryId.toLowerCase().includes(searchCategory.toLowerCase()),
  // );

  const finProductByCategoriesAndTitle = findProductByTitle.filter(
    (product) =>
      searchCategory === '' || product.categoryId === Number(searchCategory),
  );

  //todo avec mon produit, j'ai sa categorieId
  //todo je dois comparer si product.categorieId === categorie.id

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
            <option key={categorie.id} value={categorie.id.toString()}>
              {categorie.title}
            </option>
          ))}
        </select>
        <div className="relative w-full">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="rounded-l-md p-2 w-full text-Brand_grey md:rounded-l-none lg:rounded-l-none "
            type="text"
            placeholder="Rechercher Omazon"
          />

          {searchTerm.length > 0 &&
            finProductByCategoriesAndTitle.length > 0 && (
              <div className="absolute text-Main_highter bg-white w-full border rounded-b-md shadow-lg z-5 ">
                {finProductByCategoriesAndTitle.map((product) => (
                  <div key={product.id}>
                    <p className="truncate px-2">{product.title}</p>
                  </div>
                ))}
              </div>
            )}
        </div>
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
