import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Home from "./pages/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { id: 1, value: "Home", href: "/" },
    { id: 2, value: "About", href: "/about" },
    { id: 3, value: "Work", href: "/work" },
    { id: 4, value: "News", href: "/news" },
    { id: 5, value: "Contact", href: "/contact" },
  ];

  return (
    <>

      <div className='wrapper'>
        <Header
          menuItems={menuItems}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Menu
          menuItems={menuItems}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <main className='mani'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/news' element={<News />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer menuItems={menuItems} />
      </div>
    </>
  );
}

export default App;
