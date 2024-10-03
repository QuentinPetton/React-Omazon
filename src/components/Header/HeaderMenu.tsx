function HeaderMenu() {
  return (
    <div className="flex items-center gap-4">
      <img src="/icons/user.svg" alt="User account icon" />
      <div className="">
        <span>0</span>
        <img src="/icons/cart.svg" alt="Cart icon" />
      </div>
    </div>
  );
}
export default HeaderMenu;
