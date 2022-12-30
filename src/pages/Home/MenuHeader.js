import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const MenuHeader = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light  nave-bar "
      style={{ background: "transparent !important" }}
    >
      <div className="container-fluid d-flex justify-content-end">
        <FontAwesomeIcon
          icon={faShoppingBasket}
          onClick={() => navigate("/cart")}
          style={{ cursor: "pointer", height: 34 }}
        />
      </div>
    </nav>
  );
};
export default MenuHeader;
