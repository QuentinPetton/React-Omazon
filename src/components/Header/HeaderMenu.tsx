import type { Product } from '../../assets/@types';

type CartProductsProps = {
  cartProducts: Product[];
  displayLoginFormModal: () => void;
};

function HeaderMenu({
  cartProducts,
  displayLoginFormModal,
}: CartProductsProps) {
  return (
    <div className="flex items-center gap-4 md:text-[12px] lg:text-lg">
      <button type="button" onClick={displayLoginFormModal}>
        <img
          className="h-7 md:hidden lg:hidden"
          src="/icons/user.svg"
          alt="User account icon"
        />
      </button>
      <div className="hidden md:flex md:flex-col whitespace-nowrap">
        <span>Bonjour, identifiez-vous</span>
        <div>
          <button
            type="button"
            className="flex"
            onClick={displayLoginFormModal}
          >
            <span className="font-bold  text-left">Comptes et listes </span>
            <img src="/icons/caret-down.svg" alt="account and list icon" />
          </button>
        </div>
      </div>
      <div className="relative flex items-center">
        <span className="text-Brand_primary font-bold absolute -top-2 right-1.5  h-5 w-5 flex items-center justify-center">
          {cartProducts.length}
        </span>
        <img className="h-7" src="/icons/cart.svg" alt="Cart icon" />
      </div>
    </div>
  );
}
export default HeaderMenu;
