import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartEmpty = () => {
  const state = useSelector((state) => state.layout);
  const [back, setBack] = useState("");

  useEffect(() => {
    if (state.selectedTab === 1) {
      setBack("Menu");
    } else if (state.selectedTab === 2) {
      setBack("Drinks");
    } else if (state.selectedTab === 3) {
      setBack("Snacks");
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nave-bar">
        <div className="container-fluid d-flex justify-content-between ">
          <div>
            <Link to="/">
              <button
                type="button"
                className="btn btn-outline-dark borderRadious"
              >
                &larr; Back to {back}
              </button>
            </Link>
          </div>
          <div style={{ marginRight: 105 }}>
            <img src="/assets/logo.png" alt="" width="80" height="80" />
          </div>

          <div className="border border-1 p-1">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              style={{ height: "34px" }}
            />
          </div>
        </div>
      </nav>
      <div className="container text-center  ">
        <div className=" py-5  ">
          <img src="/assets/empty_cart.png" alt="" style={{ width: "30%" }} />
        </div>
        <h6 className="footer-heading-colo">Your cart is empty!</h6>
        <p className="footer-subheading-text">
          Looks like you haven't added anything to your cart. Go ahead & explore
          some items.
        </p>
      </div>
    </>
  );
};

export default CartEmpty;
