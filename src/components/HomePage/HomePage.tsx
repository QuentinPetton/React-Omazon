import Categories from './Categories';
import Products from './Products';
import type { Category, Product, Tag } from '../../assets/@types';

type HomePageProps = {
  categories: Category[];
  products: Product[];
  tags: Tag[];
  addProductToCart: (product: Product) => void;
};

function HomePage({
  categories,
  products,
  tags,
  addProductToCart,
}: HomePageProps) {
  return (
    <main>
      <Categories categories={categories} />
      <Products
        products={products}
        tags={tags}
        addProductToCart={addProductToCart}
        categories={categories}
      />
    </main>
  );
}

export default HomePage;
