import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { setBgColor } from "../../redux/layout";
import { SocketContext } from "../../context/socket";

const MenuHeader = ({ bgColor }) => {
  const { socket } = useContext(SocketContext);
  const cart = useSelector((state) => state.cart.cart);
  const state = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("accessToken");
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true);
    }, 500);
  }, []);

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

  useEffect(() => {
    async function callSocket() {
      await socket.on("sendNotification", () => {
        audio.play();
        fetchAllNotification();
      });
    }
    callSocket();
  }, [socket]);

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
      className="navbar navbar-expand-lg navbar-light nave-bar opacity"
      style={{ background: bgColor }}
    >
      <div className="container-fluid d-flex justify-content-between ">
        <div>
          {token && (
            <ul className="navbar-nav ml-5">
              <li
                className={`nav-item ${
                  pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link login"
                  to={role == 1 ? `/dashboard/allmenus` : `/dashboard/chat`}
                  onClick={() =>
                    dispatch(setBgColor("rgba(255, 255, 255,0.5)"))
                  }
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          )}
        </div>
        {state.selectedTab == 1 ? (
          <div
            className={`fadeIn ${showLogo ? "" : "opacity-0"}`}
            style={{ marginLeft: 50 }}
          >
            <Link to="/">
              <img src="/assets/logo.png" alt="" width="80" height="80" />
            </Link>
          </div>
        ) : (
          <div style={{ marginLeft: 50 }}>
            <Link to="/">
              <img src="/assets/logo.png" alt="" width="80" height="80" />
            </Link>
          </div>
        )}

        <div className="border border-1 p-1 position-relative">
          <FontAwesomeIcon
            icon={faShoppingBasket}
            style={{ cursor: "pointer", height: 34 }}
            onClick={() => {
              count == 0 ? navigate("/cart_empty") : navigate("/cart");
              dispatch(setBgColor("rgba(255, 255, 255,0.5)"));
            }}
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {count}
          </span>
        </div>
      </div>
    </nav>
  );
};
export default MenuHeader;
