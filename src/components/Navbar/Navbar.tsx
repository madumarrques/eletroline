import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar__logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Eletroline" />
        </NavLink>
      </div>

      <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Assistência Técnica</NavLink>
        <NavLink to="/sobre" onClick={closeMenu}>Sobre Nós</NavLink>
        <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
      </nav>

      <button className="navbar__hamburger" onClick={toggleMenu}>
        <span className={`hamburger__line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger__line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger__line ${menuOpen ? 'open' : ''}`}></span>
      </button>
    </header>
  );
}

export default Navbar;