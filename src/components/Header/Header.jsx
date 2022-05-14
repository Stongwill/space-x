import React from "react";
import "./header.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Popup from "../Popup";
import { menuLink, infoCompany } from "./data";

export default function Header({ modal, popup }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__top">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="logo" className="header__logo-img" />
              </Link>
            </div>
            <nav className="menu">
              <button onClick={popup} className="menu__btn">
                <span></span>
              </button>
              {modal && <Popup />}
              <div className="menu__list">
                {menuLink.map(({ link, linkTitle }) => (
                  <Link to={link} className="header__nav-link">
                    {linkTitle}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="home__inner">
            <div className="home__title-go">
              <h1 className="title-gradient">
                Путешествие <p>на красную планету</p>
              </h1>
              <Link to="#" className="home__redirect">
                Начать путешествие
              </Link>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="406"
                height="57"
                viewBox="0 0 406 57"
              >
                <image
                  id="фигура"
                  width="406"
                  height="57"
                  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAA5CAYAAAAVxQ0ZAAAELklEQVR4nO3dzVLTUBjG8TctGqCtIigrxwtxrZfilhU7roI9Gy9DLsAbcUZnmKmIxQqFUucwT8ZMc04b+pHm4/+b6TTNSdKSzcP5TDSZTCIzc6+JXgAALKylMHnQdsStBAAso5U6d6z3FncUALCo6RBJmsLa1F4AAIvw1U4e9GoHygEACAoFx0RNY5ECBgCAXELBkg4XZ4umMQBAHrOCJTFW0xjhAgCYayvnLXpQDWZL2+PMEQCAxrMnds67YLnXOXkDCQDQME8d9eXC5U7bz2kaAwBMc0u6ZHbm1NZrTNMYACCxTJPWWDWYZ6q53GeOAAA0zjI1lkSkcDE1k7GQJQA02Cpm1rsgGek9ZrY+ADTbKmosaW116t/RNAYAzbTqYDE1jcWqwdxmSgEAtbaOZisXKDfa3mFIMgA0yzr7Q27VHLbLQpYA0BzraAqb5kJlW/0uo0wpAKBWiggWU3PYtrZvGJIMAPVVVLAkYk3KvGG2PgDUU9FzTm7VHLabmlQJAKiRomssiZbCxdVa/mZKAQCVtalgMfW77ChkhnrOCwCg4jYZLIltzdYfMlsfAKqvDMFi6tDvqFOf2foAUGFlCRZTk1hX/S5DhiQDQDWVaSVi18cy0PYLZusDQDWVqcaSFmvU2B9m6wNAtZQ1WEz9Lj31uQwzpQCAUipzsJia6nraHjAkGQDKr+zBkuioeew3Q5IBoNyqEiymYOmp34XZ+gBQUlUKFtNIsZdagv+aIckAUD5VCxbTUjDJcOQrVkkGgHKpYrAkOhqSfMWQZAAojyoHi2mNsT0NR77OlAIAClf1YDE1ie2pv+WSfhcA2Kw6BIul+l1ihctd5ggAQCHqEiyJXY0a+8WQZADYjLoFi+mRx/tagv8qUwoAWKs6BotpKZhX6n/pMyQZAIpT12BJvNAzXvo8QAwAilH3YDE9V/9AzWKDTCkAYKWaECymJfhfawHLPkOSAWB9mhIspiHJB5pUecEqyQCwHk0KlkRPEyr7PEAMAFavicFimkj5RkvwX2ZKAQALa2qwmIYiH6q/5YKnUwLAajQ5WEz9LvuasX/BkGQAWF7TgyXR1aixPkOSAWA5Le7fI7fk/nfVXg5VkwEAzPfOzL7on/Jz95lg+c89LOyb+l7eau4LAGC2s5OTk4+9Xq/j3s3sM01hfvsaOdZL1V4iz3a6zGx22bzz513D99m3PX28b1/6e1ozzg1dvxUoC32vr3zed03/Lt/vbGnwxfTvyXvN0LGhfb7r5blW3vsdOj90L33H5TkmVG5TrRiR57PvvNDvy7M/7zmhbV9ZqNx33fQ5vr/VAsf4ynzn+L5n3m+ed9yssnn7Q9t5jvUd//gex7GNRqOo2+3aYDAY8V+530/t/eEtBQAkzo+Pjz+cnp5Ojo6OXNB8pcYCAFiG62M5M7P3LlTM7NM/59MAgvb17W0AAAAASUVORK5CYII="
                />
              </svg>
            </div>
            <div className="info__company">
              {infoCompany.map(({ infoT, infoB, number, classH }) => (
                <div className={`info__card ${classH}`}>
                  <p className="info__text">{infoT}</p>
                  <span className="info__text-number">
                    {number}
                    <p className="info__text">{infoB}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
