import HeaderLogo from './HeaderLogo';
import HeaderForm from './HeaderForm';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <header className="bg-Main_medium text-Main_lower">
      <HeaderLogo />
      <HeaderForm />
      <HeaderMenu />
    </header>
  );
}

export default Header;
