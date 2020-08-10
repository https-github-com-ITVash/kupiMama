import React from "react";
import { MainNav } from "../../components";

import { Link } from "react-router-dom";

import "./style.scss";
const Header = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Хедер смонтировался");
    return () => {
      window.scrollTo(0, 0);
      console.log("Компонент будет размантирован");
    };
  }, []);
  return (
    <header>
      <div className="topNav">
        <Link to="/sale">Распродажа</Link>
        {/* <a href="sale.html">Распродажа</a> */}
        <Link to="/delivery">Доставка и оплата</Link>
        <Link to="/warranty">Гарантии</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/shops">Магазины</Link>
      </div>

      <div className="headers">
        <div className="headers_logo">
          <Link to="/">
            <img src="../img/logo.jpg" alt="Логотип" />
            <p>МИР ДЕТСТВА!</p>
          </Link>
        </div>

        <div className="headers_contacts">
          <p>г.Донецк, Артема 159</p>
          <p>+380713360357</p>
          <p>11:00 - 19:00 Пн-Пт</p>
        </div>

        <div className="headers_search">
          <form action="">
            <input type="search" placeholder="Поиск по сайту" />
            <button type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <div className="headers_input">
          <Link to="input">Войти</Link>
          <Link to="registration">Регистрация</Link>
        </div>

        <div className="headers_account">
          <Link to="basket" className={"basket"}>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <p>12000p.</p>
          </Link>
          <Link to="personalArea">Иванченко Григорий</Link>
          {/* <a href="#/" className="paOut"><i className="fa fa-sign-out fa-2x aria-hidden="true"></i></a> */}
        </div>
      </div>

      <MainNav />
    </header>
  );
};
export default Header;
