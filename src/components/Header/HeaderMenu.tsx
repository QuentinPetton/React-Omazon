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
    <div className="flex items-center gap-4">
      <button type="button" onClick={displayLoginFormModal}>
        <img
          className="h-7 md:hidden lg:hidden"
          src="/icons/user.svg"
          alt="User account icon"
        />
      </button>
      <div className="hidden md:flex md:flex-col">
        <span>Bonjour, identifiez-vous</span>
        <div>
          <button
            type="button"
            className="flex
          "
            onClick={displayLoginFormModal}
          >
            <span className="font-bold text-lg">Comptes et listes </span>
            <img src="/icons/caret-down.svg" alt="account and list icon" />
          </button>
        </div>
      </div>
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
