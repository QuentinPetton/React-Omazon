import Categories from './Categories';
import Products from './Products';
import type { Category, Product, Tag } from '../../assets/@types';

type HomePageProps = {
  categories: Category[];
  products: Product[];
  tags: Tag[];
  addProductToCart: (product: Product) => void;
  displayModal: boolean;
  addRental: (newproduct: Product) => void;
  displayModalAddForm: () => void;
};

function HomePage({
  categories,
  products,
  tags,
  addProductToCart,
  displayModal,
  addRental,
  displayModalAddForm,
}: HomePageProps) {
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
