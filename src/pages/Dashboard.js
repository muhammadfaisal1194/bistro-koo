import React from "react";
import { useLocation, useNavigate, Outlet, Link  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  const { pathname } = useLocation();
  let navigate = useNavigate();
  const role = localStorage.getItem("role");
  const allProducts = () => {
    navigate("/dashboard/allproducts");
  };
  const addMenu = () => {
    navigate("/dashboard/addproduct");
  };
  const setAddMenu = () => {
    navigate("/dashboard/addmenu");
  };
  const allMenus = () => {
    navigate("/dashboard/allmenus");
  };
  const notifyKitchen = () => {
    navigate("/dashboard/kitchen");
  };
  const orders = () => {
    navigate("/dashboard/orders");
  };
  const subcategories = () => {
    navigate("/dashboard/subcategories");
  };
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between ">
         <div></div>
          <div >
            <img src="/assets/logo.png" alt="" width="80" height="80" />
          </div>

          <div className='border border-1'>
            <FontAwesomeIcon icon={faShoppingBasket} style={{ "height": "34px" }} />
          </div>

        </div>
      </nav>

      <div className="menu-box">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2">
              {role == 1 && (
                <>
                  <button
                    className={`btn btn-common  ${pathname === "/dashboard/addproduct" ? "active-btn" : ""
                      }`}
                    onClick={() => {
                      addMenu();
                    }}
                    style={{ minWidth: 200 }}
                  >
                    {" "}
                    Add Product
                  </button>
                  <button
                    className={`btn btn-common mt-3 ${pathname === "/dashboard/allproducts" ? "active-btn" : ""
                      }`}
                    onClick={() => {
                      allProducts();
                    }}
                    style={{ minWidth: 200 }}
                  >
                    {" "}
                    All Products
                  </button>
                  <button
                    className={`btn btn-common mt-3 ${pathname === "/dashboard/addmenu" ? "active-btn" : ""
                      }`}
                    onClick={() => {
                      setAddMenu();
                    }}
                    style={{ minWidth: 200 }}
                  >
                    {" "}
                    Add Menu
                  </button>
                  <button
                    className={`btn btn-common mt-3 ${pathname === "/dashboard/allmenus" ? "active-btn" : ""
                      }`}
                    onClick={() => {
                      allMenus();
                    }}
                    style={{ minWidth: 200 }}
                  >
                    {" "}
                    All Menus
                  </button>
                  <button
                    className={`btn btn-common mt-3 ${pathname === "/dashboard/kitchen" ? "active-btn" : ""
                      }`}
                    onClick={() => {
                      notifyKitchen();
                    }}
                    style={{ minWidth: 200 }}
                  >
                    {" "}
                    Notify Kitchen
                  </button>
                  <button
                    className={`btn btn-common mt-3 ${pathname === "/dashboard/orders" ? "active-btn" : ""
                      }`}
                    onClick={() => {
                      orders();
                    }}
                    style={{ minWidth: 200 }}
                  >
                    {" "}
                    All Orders
                  </button>
                  <button
                    className={`btn btn-common mt-3 ${pathname === "/dashboard/subcategories" ? "active-btn" : ""
                      }`}
                    onClick={() => {
                      subcategories();
                    }}
                    style={{ minWidth: 200, maxWidth: 200 }}
                  >
                    {" "}
                    Subcategories
                  </button>
                </>
              )}
              {(role == 1 || role == 2) && (
                <>
                  <button
                    className={`btn btn-common mt-3 ${pathname === "/dashboard/chat" ? "active-btn" : ""
                      }`}
                    onClick={() => {
                      navigate("/dashboard/chat");
                    }}
                    style={{ minWidth: 200, maxWidth: 200, paddingLeft: 12 }}
                  >
                    Notifications & Chat
                  </button>
                </>
              )}
            </div>
            <div className="col-md-10 px-5 ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
