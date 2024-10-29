import Categories from './Categories';
import Products from './Products';
import { useOutletContext } from 'react-router-dom';

import type { Category, Product, Tag } from '../../assets/@types';

type HomePageContext = {
  categories: Category[];
  tags: Tag[];
  products: Product[];
  addProductToCart: (product: Product) => void;
  displayModal: boolean;
  addRental: (newProduct: Product) => void;
  displayModalAddForm: () => void;
};

function HomePage() {
  const {
    categories,
    tags,
    products,
    addProductToCart,
    displayModal,
    addRental,
    displayModalAddForm,
  } = useOutletContext<HomePageContext>();
  return (
    <main>
      <Categories categories={categories} />
      <Products
        products={products}
        tags={tags}
        addProductToCart={addProductToCart}
        categories={categories}
        displayModal={displayModal}
        addRental={addRental}
        displayModalAddForm={displayModalAddForm}
      />
    </main>
  );
}

export default HomePage;
