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
  const [olderScrollPosition, setOlderScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    // console.log('scroll!');
    // console.log(document.documentElement.scrollTop);
    //permet de gérer le scroll axe Y
    console.log(window.scrollY);
    const currentScrollY = window.scrollY;

    if (currentScrollY > olderScrollPosition) {
      console.log('au dessus');
      setShadowScrollHeader(true);
    } else if (currentScrollY < olderScrollPosition) {
      setShadowScrollHeader(false);
    }

    //todo savoir si mon scroll est vers le haut ou le bas
    //todo récupérer valeur scroll à instant T
    //todo le comparer à nouvelle valeur scroll
    //todo suivant résultat, ajouter ou non l'ombre portée

    setOlderScrollPosition(currentScrollY);
  }, [olderScrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`bg-Main_high text-Main_Lowest p-4 sticky top-0 ${shadowScrollHeader ? 'text-cyan-900 w-11' : ''}`}
    >
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
