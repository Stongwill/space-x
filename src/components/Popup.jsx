import React from "react";
import { Link } from "react-router-dom";
import { menuLink } from "./Header/data";

export default function Popup() {
  return (
    <div className="popup__list">
      {menuLink.map(({ link, linkTitle }) => (
        <Link to={link} className="popup__list-link">
          {linkTitle}
        </Link>
      ))}
    </div>
  );
}
