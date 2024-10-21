import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderMenu from './HeaderMenu';
import LoginForm from './LoginForm';
import type { Category, Product } from '../../assets/@types';
import { useCallback, useEffect, useRef, useState } from 'react';

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

  const emailInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <header
      className={`bg-Main_high text-Main_Lowest p-4 sticky top-0 z-10 ${shadowScrollHeader ? ' shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)]' : ''}`}
    >
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <HeaderMenu
          cartProducts={cartProducts}
          displayLoginFormModal={displayLoginFormModal}
        />
      </div>
      <div className="mt-4">
        <HeaderForm items={items} products={products} />
      </div>
      <LoginForm
        displayLoginForm={displayLoginForm}
        emailInputRef={emailInputRef}
      />
    </header>
  );
}

export default Header;
