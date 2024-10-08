import Categories from './Categories';
import Product from './Products';
import type { Category } from '../../assets/@types';

type CategoriesListProps = {
  items: Category[];
};

function HomePage({ items }: CategoriesListProps) {
  return (
    <main>
      <Categories items={items} />
      <Product />
    </main>
  );
}

export default HomePage;
