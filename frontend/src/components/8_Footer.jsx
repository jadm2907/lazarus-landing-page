import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import '../styles/Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const footerElement = footerRef.current;
      
      if (!footerElement) return;

      const footerPosition = footerElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerPosition.top < windowHeight * 0.8) {
        setIsFooterVisible(true);
      } else if (currentScrollY > lastScrollY && footerPosition.top > windowHeight * 0.5) {
        setIsFooterVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    const debouncedScroll = debounce(handleScroll, 50);
    
    window.addEventListener('scroll', debouncedScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [lastScrollY]);

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  return (
    <footer 
      className={`main-footer ${isFooterVisible ? 'footer-visible' : 'footer-hidden'}`}
      ref={footerRef}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Lazarus</h3>
            <p>La plataforma líder en gestión de salud mental y rehabilitación cognitiva.</p>
          </div>
          
          <div className="footer-section links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#problema">El Problema</a></li>
              <li><a href="#solucion">La Solución</a></li>
              <li><a href="#propuesta-de-valor">Propuesta de Valor</a></li>
            </ul>
          </div>

          <div className="footer-section links">
            <h3>Legal</h3>
            <ul>
              <li><a href="/terminos" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a></li>
              <li><a href="/privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></li>
              <li><a href="/seguridad" target="_blank" rel="noopener noreferrer">Política de Seguridad</a></li>
              <li><a href="/aviso-legal" target="_blank" rel="noopener noreferrer">Aviso Legal</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contacto</h3>
            <p>Email: <a href="mailto:joseandresdonoso290723@gmail.com">joseandresdonoso290723@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/joseandresdonosomolina" target="_blank" rel="noopener noreferrer">José Andrés Donoso</a></p>
            <div className="social-links">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">TW</a>
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">LI</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Lazarus Technology SpA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;