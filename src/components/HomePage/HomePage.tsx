import Categories from './Categories';
import Products from './Products';
import type { Category, Product } from '../../assets/@types';

type HomePageProps = {
  categories: Category[];
  products: Product[];
};

function HomePage({ categories, products }: HomePageProps) {
  return (
    <main>
      <Categories items={categories} />
      <Products items={products} />
    </main>
  );
}

export default HomePage;
