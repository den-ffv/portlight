import { Link } from "react-router-dom";
import "./Menu.scss";

function Menu({ menuItems, menuOpen, setMenuOpen }) {
  return (
    <>
      <div className={menuOpen ? "menu menu-active " : "menu"}>
        <div className="menu__container container">
          <div className='logo'>
            <Link to={"/"} onClick={() => setMenuOpen(false)}>Portlight</Link>
          </div>
          <ul>
          <button className="menu__btn-close" onClick={() => setMenuOpen(false)}>Close</button>
            {menuItems.map((menuItem) => (
              <li key={menuItem.id} onClick={() => setMenuOpen(false)}>
                <Link to={menuItem.href}>{menuItem.value}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={
          menuOpen ? "menu__footer menu__footer-active" : "menu__footer"
        }
      >
        <p className="container">@2023</p>
      </div>
    </>
  );
}

export default Menu;
