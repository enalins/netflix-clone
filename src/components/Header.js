import React, {useEffect, useState} from 'react';
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons'
import './Header.css';
import logo from '../assets/images/logo.svg'

const HeaderFixed = (active) => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`headerFixed ${scrollPosition > 0 ? "scrolled" : ""}`}>
      <div className="firstBlock">
        <img src={logo} alt="Logo Netflix" className="logo" />

        <nav className="headerNav">
          <li><a href="/browse" className="headerLink active">Início</a></li>
          <li><a href="/tvshows" className="headerLink">Séries</a></li>
          <li><a href="/movies" className="headerLink">Filmes</a></li>
          <li><a href="/toprated" className="headerLink">Bombando</a></li>
          <li><a href="/mylist" className="headerLink">Minha lista</a></li>
        </nav>
      </div>

      <nav className="headerNav">
        <li><button type="button" className="invisibleBtn"><Search /></button></li>
        <li><a href="/kids" className="headerLink">Infantil</a></li>
        <li><button type="button" className="invisibleBtn"><Notifications /></button></li>
        <li>
          <button type="button" className="userSelector">
            <div className="image"></div>
            <div className="icon"><ArrowDropDown /></div>

            <div className="selector">
              <div className="selectorOption">
                <div className="image"></div>
                <a href="/" className="name">User 1</a>
              </div>
              <div className="selectorOption">
                <div className="image"></div>
                <a href="/" className="name">User 2</a>
              </div>
              <div className="selectorOption">
                <div className="image"></div>
                <a href="/" className="name">User 3</a>
              </div>
              <div className="selectorOption">
                <div className="image"></div>
                <a href="/" className="name">Infantil</a>
              </div>
              <a href="/" className="headerLink">Gerenciar perfis</a>

              <hr />

              <a href="/" className="headerLink active">Conta</a>
              <a href="/" className="headerLink active">Centro de ajuda</a>
              <a href="/" className="headerLink active">Sair da Netflix</a>
            </div>
          </button>
        </li>
      </nav>
    </header>
  )
};

export default HeaderFixed;