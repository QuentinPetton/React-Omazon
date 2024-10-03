import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <header className="bg-Main_medium text-Main_lower p-4">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <HeaderMenu />
      </div>
      <div className="mt-4">
        <HeaderForm />
      </div>
    </header>
  );
}

export default Header;
