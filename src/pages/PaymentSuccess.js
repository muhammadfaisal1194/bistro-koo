import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex ">
          <button
            type="button"
            className="btn btn-outline-dark borderRadious"
            onClick={() => {
              navigate("/");
            }}
          >
            &larr; Back to Drink
          </button>
          <div>
            <img src="/assets/logo.png" alt="" width="80" height="80" />
          </div>
          <div></div>
        </div>
      </nav>
      <div className="container text-center">
        <div className=" py-5  ">
        <img src="/assets/pay.png" alt="" style={{width:"30%"}} />
        </div>
        <h6 className="footer-heading-colo">Thank You!</h6>
        <p className="footer-subheading-text">Payment done successfully</p>
      </div>
    </>
  );
};

export default PaymentSuccess;
