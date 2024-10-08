import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderMenu from './HeaderMenu';
import type { Category } from '../../assets/@types';

type CategoriesProps = {
  items: Category[];
};

function Header({ items }: CategoriesProps) {
  return (
    <header className="bg-Main_high text-Main_Lowest p-4">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <HeaderMenu />
      </div>
      <div className="mt-4">
        <HeaderForm items={items} />
      </div>
    </header>
  );
}

export default Header;
