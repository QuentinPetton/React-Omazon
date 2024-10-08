import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderMenu from './HeaderMenu';
import type { Category, Product } from '../../assets/@types';

type HeaderProps = {
  items: Category[];
  cartProducts: Product[];
};

function Header({ items, cartProducts }: HeaderProps) {
  return (
    <header className="bg-Main_high text-Main_Lowest p-4">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <HeaderMenu cartProducts={cartProducts} />
      </div>
      <div className="mt-4">
        <HeaderForm items={items} />
      </div>
    </header>
  );
}

export default Header;
