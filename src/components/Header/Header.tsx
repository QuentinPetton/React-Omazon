import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderMenu from './HeaderMenu';
import type { Category, Product } from '../../assets/@types';
import { useCallback, useEffect, useState } from 'react';

type HeaderProps = {
  items: Category[];
  cartProducts: Product[];
  products: Product[];
};

function Header({ items, cartProducts, products }: HeaderProps) {
  const [shadowScrollHeader, setShadowScrollHeader] = useState(false);

  // useEffect(() => {
  //   console.log("il faut mettre en place un écouteur d'événement scroll");
  // }, []);

  const handleScroll = useCallback(() => {
    console.log('scroll!');
    console.log(document.documentElement.scrollTop);
    setShadowScrollHeader(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // bonne pratique : enlever l'écouteur d'événement à la destruction du
    // composant App, avec une fonction de nettoyage
  }, [handleScroll]);

  return (
    <header className="bg-Main_high text-Main_Lowest p-4 ">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <HeaderMenu cartProducts={cartProducts} />
      </div>
      <div className="mt-4">
        <HeaderForm items={items} products={products} />
      </div>
    </header>
  );
}

export default Header;
