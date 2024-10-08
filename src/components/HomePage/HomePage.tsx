import Categories from './Categories';
import Products from './Products';
import type { Category, Product } from '../../assets/@types';

type HomePageProps = {
  categories: Category[];
  products: Product[];
  addProductToCart: (product: Product) => void;
};

function HomePage({ categories, products, addProductToCart }: HomePageProps) {
  return (
    <main>
      <Categories categories={categories} />
      <Products
        products={products}
        addProductToCart={addProductToCart}
        categories={categories}
      />
    </main>
  );
}

export default HomePage;
