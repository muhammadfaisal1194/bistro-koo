import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL, API_URL_SOCKET } from "../../utils/api";
import { io } from "socket.io-client";

const MenuHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [notifications, setNotifications] = useState([]);
  const isMobile = window.innerWidth <= 500;
  const [count, setCount] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("accessToken");
  let table = JSON.parse(localStorage.getItem("table"));

  const clickHandler = () => {
    navigate("/cart");
  };
  const clickBellHandler = () => {
    navigate("/dashboard/chat");
  };
  const logoutHandler = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };
  const audio = new Audio({
    loop: true,
    volume: 0.2,
    src: ["/sound.mp3"],
  });
  const socket = io(API_URL_SOCKET);
  socket.on("sendNotification", function (details) {
    audio.play();
    fetchAllNotification();
  });
  const fetchAllNotification = async () => {
    const response = await axios.get(`${API_URL}/notification/index`);
    setNotifications(response.data.data);
  };

  useEffect(() => {
    fetchAllNotification();
  }, []);

  useEffect(() => {
    let c = 0;
    cart.map((car) => {
      c += car.quantity;
    });

    setCount(c);
  }, [cart]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light  nave-bar "
      style={{ background: "transparent !important" }}
    >
      <div>
      {token && (
              <ul className="navbar-nav ml-5">
                <li
                  className={`nav-item ${pathname === "/dashboard" ? "active" : ""
                    }`}
                >
                  <Link
                    className="nav-link login"
                    to={role == 1 ? `/dashboard/allmenus` : `/dashboard/chat`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link login"
                    to="/"
                    onClick={() => {
                      logoutHandler();
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
      </div>
      <div className="container-fluid d-flex justify-content-end">
        <div className="border border-1 p-1 position-relative">
          <FontAwesomeIcon
            icon={faShoppingBasket}
            style={{ cursor: "pointer", height: 34 }}
            onClick={() => navigate("/cart")}
          />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {count}
          </span>
        </div>
      </div>
    </nav>
  );
};
export default MenuHeader;
