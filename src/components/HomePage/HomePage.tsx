import Categories from './Categories';
import Products from './Products';
import type { Category, Product, Tag } from '../../assets/@types';

type HomePageProps = {
  categories: Category[];
  products: Product[];
  tags: Tag[];
  addProductToCart: (product: Product) => void;
  displayModal: boolean;
};

function HomePage({
  categories,
  products,
  tags,
  addProductToCart,
  displayModal,
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
      />
    </main>
  );
}

export default HomePage;
