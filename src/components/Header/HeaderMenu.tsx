function HeaderMenu() {
  return (
    <div className="flex items-center gap-4">
      <img className="h-7" src="/icons/user.svg" alt="User account icon" />
      <div className="relative">
        <span className="text-Brand_primary font-bold absolute -top-2 right-1  h-5 w-5 flex items-center justify-center">
          0
        </span>
        <img className="h-7" src="/icons/cart.svg" alt="Cart icon" />
      </div>
    </div>
  );
}
export default HeaderMenu;
