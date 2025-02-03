import NavSearch from "./NavSearch";
import LinksDropDown from "./LinksDropDown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4">
        <Logo />
        <NavSearch />
      </div>
      <div className="flex items-center gap-4">
        <LinksDropDown />
        <DarkMode />
      </div>
    </nav>
  );
}

export default Navbar;
