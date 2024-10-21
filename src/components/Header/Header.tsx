import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderMenu from './HeaderMenu';
import LoginForm from './LoginForm';
import type { Category, Product } from '../../assets/@types';
import { useCallback, useEffect, useState } from 'react';

type HeaderProps = {
  items: Category[];
  cartProducts: Product[];
  products: Product[];
};

function Header({ items, cartProducts, products }: HeaderProps) {
  const [shadowScrollHeader, setShadowScrollHeader] = useState(false);
  const [olderScrollPosition, setOlderScrollPosition] = useState(0);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);

  //Gestion de l'ombre au scroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > olderScrollPosition) {
      setShadowScrollHeader(true);
    } else if (currentScrollY < olderScrollPosition) {
      setShadowScrollHeader(false);
    }
    setOlderScrollPosition(currentScrollY);
  }, [olderScrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  function displayLoginFormModal() {
    setDisplayLoginForm(!displayLoginForm);
  }

  return (
    <header
      className={`grid grid-cols-2 md:grid-cols-4 items-center bg-Main_high text-Main_Lowest p-4 sticky top-0 z-10 ${shadowScrollHeader ? ' shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)]' : ''}`}
    >
      <div className="col-span-1 order-1">
        <HeaderLogo />
      </div>

      <div className="col-span-2 md:col-span-2 order-3 md:order-2 mt-4 md:mt-0">
        <HeaderForm items={items} products={products} />
      </div>

      <div className="col-span-1 flex justify-end order-2 md:order-3">
        <HeaderMenu
          cartProducts={cartProducts}
          displayLoginFormModal={displayLoginFormModal}
        />
      </div>

      <LoginForm displayLoginForm={displayLoginForm} />
    </header>
  );
}

export default Header;
