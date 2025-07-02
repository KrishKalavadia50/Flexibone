import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set background after scrolling 30px
      setScrolled(currentScrollY > 30);

      // Handle mobile scroll direction for hide/show
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down'); // hide navbar
        } else {
          setScrollDirection('up'); // show navbar
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`navheader 
        ${scrolled ? 'activenavheader' : ''} 
        ${scrollDirection === 'down' && window.innerWidth <= 768 ? 'nav-hidden' : ''}`}
    >
      <div className="container">
        <div className="logo" style={{ filter: "invert(1)" }}>
          <Link to="/">
            <img src="/img/flexi_bone.png" alt="Logo" />
          </Link>
        </div>

        <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/Flexibone_info" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/Service_info" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/Testti" onClick={() => setMenuOpen(false)}>Awards / Seminars</Link></li>
            <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="#"><img src="/img/facebook-app-symbol.png" alt="Facebook" /></a>
          <a href="#"><img src="/img/twitter.png" alt="Twitter" /></a>
          <a href="#"><img src="/img/linkedin.png" alt="LinkedIn" /></a>
          <a href="#"><img src="/img/pinterest.png" alt="Pinterest" /></a>
        </div>
      </div>
    </header>
  );
}
