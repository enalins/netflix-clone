import React from 'react';
import { Link } from "react-router-dom";
import './UserSelect.css';
import logo from '../assets/images/logo.svg'
import { userOne, userTwo, userThree, userFour, userDefault } from '../images.js';

const UserSelect = () => {
  return (
    <>
      <header className="header">
        <div className="firstBlock">
          <img src={logo} alt="Logo Netflix" className="logo" />
        </div>
      </header>
      <section className="userSelect">
        <h1 className="userSelect__title">Quem está assistindo?</h1>

        <nav className="userSelect__users">
          <Link to="/browse" className="userSelect__users__item">
            <div className="userSelect__users__item__img">
              <img src={userOne} alt="User One" />
            </div>
            <h2 className="userSelect__users__item__name">
              User One
            </h2>
          </Link>

          <Link to="/browse" className="userSelect__users__item">
            <div className="userSelect__users__item__img">
              <img src={userTwo} alt="User Two" />
            </div>
            <h2 className="userSelect__users__item__name">
              User Two
            </h2>
          </Link>

          <Link to="/browse" className="userSelect__users__item">
            <div className="userSelect__users__item__img">
              <img src={userThree} alt="User Three" />
            </div>
            <h2 className="userSelect__users__item__name">
              User Three
            </h2>
          </Link>

          <Link to="/browse" className="userSelect__users__item">
            <div className="userSelect__users__item__img">
              <img src={userFour} alt="User Four" />
            </div>
            <h2 className="userSelect__users__item__name">
              User Four
            </h2>
          </Link>

          <Link to="/browse" className="userSelect__users__item">
            <div className="userSelect__users__item__img">
              <img src={userDefault} alt="User Default" />
            </div>
            <h2 className="userSelect__users__item__name">
              Infantil
            </h2>
          </Link>
        </nav>

        <button type="button" className="userSelect__manageUsers">Gerenciar Perfis</button>
      </section>
    </>
  );
}

export default UserSelect;