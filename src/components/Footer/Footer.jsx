import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer({ menuItems }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__connection'>
          <p className='footer__connection-titel'>Let’s start together.</p>
          <div className='footer__connection-data'>
            <a href='tel: 1-677-124-44227' >1-677-124-44227</a>
            <p>{"//"}</p>
            <a href='mailto: hello@softlight.design'>hello@softlight.design</a>
          </div>
          <div className='footer__nav'>
            <div className='logo'>
              <Link to={"/"}>softlight</Link>
            </div>
            <div>
              <p className='footer__nav-title'>Pages</p>
              <ul>
                {menuItems.slice(0,3).map((menuItem) => (
                  <li key={menuItem.id}>
                    <Link to={menuItem.href} onClick={scrollToTop}>
                      {menuItem.value}
                    </Link>
                  </li>
                ))}
                <li><Link to={"/pricing"} onClick={scrollToTop}>Pricing </Link></li>
              </ul>
            </div>
            <div>
              <p className='footer__nav-title'>Contact</p>
              <ul>
                <li><a href="https://maps.app.goo.gl/rEvn9rKrK3EwrWUH6" target="_blank" rel="noreferrer">741 New South Head Rd, Triple Bay SWFW 3148, New York</a></li>
              </ul>
            </div>
            <div>
              <p className='footer__nav-title'>Newsletter</p>
              <form className='footer__nav-form'>
                <input
                  className='footer__nav-input'
                  type='email'
                  placeholder='enter your mail... '
                />
                <button className='footer__nav-submit'>Submit</button>
              </form>
            </div>
          </div>
          <div className='footer__copyright'>
            <p>
              Copyright © Portlight | Designed by <span>VictorFlow</span> -
              Powered by <span>Webflow</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
