import type { Product } from '../../assets/@types';

type CartProductsProps = {
  cartProducts: Product[];
};

function HeaderMenu({ cartProducts }: CartProductsProps) {
  return (
    <div className="flex items-center gap-4">
      <img className="h-7" src="/icons/user.svg" alt="User account icon" />
      <div className="relative">
        <span className="text-Brand_primary font-bold absolute -top-2 right-1.5  h-5 w-5 flex items-center justify-center">
          {cartProducts.length}
        </span>
        <img className="h-7" src="/icons/cart.svg" alt="Cart icon" />
      </div>
    </div>
  );
}
export default HeaderMenu;
