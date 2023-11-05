import { Link } from "react-router-dom";
import "./Header.scss";
function Header({ menuItems, menuOpen, setMenuOpen }) {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className='container'>
      <header className='header'>
        <div className='logo'>
          <Link to={"/"}>Portlight</Link>
        </div>
        <nav className='header__wrapper'>
          <ul className='header__ul'>
            {menuItems.map((menuItem) => (
              <li key={menuItem.id} className='header__list'>
                <Link to={menuItem.href} className='header__link'>
                  {menuItem.value}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className='header__button-menu'
          >
            <div
              className={
                menuOpen ? "header__button button--activ" : "header__button"
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
