import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";
import like from "../assets/images/Icon/shopping-cart.png";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="header-top-strip p-1 px-4 shadow-md ">
        <div className="container-xxl">
          <div className=" d-flex justify-content-between mt-3 items-center">
            <div className="">
              <Link to="/">
                <img src={logo} alt="" className="img-fluid logo" />
              </Link>
            </div>
            <div className="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control w-12 p-2"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button
                  className="input-group-text bg-primary"
                  id="basic-addon2"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="">
              <Link to="/like" className=" justify-end">
                <img src={like} alt="" className="like" />
                <p className="mr-2">Orders</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper mt-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 d-flex align-items-center mt-3"></div>
            <div className=" nav-links  col-4 d-flex align-items-center justify-content-between m-auto text-center">
              <div className="border_wrapper">
                <Link
                  to={"samsung"}
                  className={location.pathname === "/" ? "active" : "inactive"}
                >
                  Samsung
                </Link>
                <button className="btn">X</button>
              </div>
              <div className="border_wrapper">
                <Link
                  to={"apple"}
                  className={
                    location.pathname === "/shop" ? "active" : "inactive"
                  }
                >
                  Apple
                </Link>
                <button className="btn">X</button>
              </div>
              <Link
                to={"blog"}
                className={
                  location.pathname === "/blog" ? "active" : "inactive"
                }
              >
                Blog
              </Link>
              <Link
                to={"about"}
                className={
                  location.pathname === "/about" ? "active" : "inactive"
                }
              >
                About
              </Link>
              <Link
                to={"contact"}
                className={
                  location.pathname === "/contact" ? "active" : "inactive"
                }
              >
                Contact
              </Link>
              <Link
                to={"contact"}
                className={
                  location.pathname === "/contact" ? "active" : "inactive"
                }
              >
                Contact
              </Link>
            </div>
            <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
              <Link
                to={"wishlist"}
                className={
                  location.pathname === "/wishlist" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <p>Wishlist</p>
                </div>
              </Link>
              <Link
                to={"login"}
                className={
                  location.pathname === "/login" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span>
                    <VscAccount className="fs-3 mx-2" />
                  </span>
                  <p>Account</p>
                </div>
              </Link>
              <Link
                to={"cart"}
                className={
                  location.pathname === "/cart" ? "inactive" : "active"
                }
              >
                <div className="d-flex">
                  <span>
                    <CgShoppingCart className="fs-3 mx-2" />
                  </span>
                  <p>Cart</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
