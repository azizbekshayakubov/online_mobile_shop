import { Link } from "react-router-dom";

import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import google from "../assets/images/pay/play.png";
import app from "../assets/images/pay/app.png";

import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 d-flex flex-column">
              <div className="">
                <Link to="/">
                  <img src={logo} alt="" className="img-fluid logo" />
                </Link>
              </div>
              <div className="footer-details">
                <p className="fs-8 my-3">
                  Best information about the company gies here but now lorem
                  ipsum is
                </p>
                <div className="col-10 social-icons d-flex justify-content-around mb-3">
                  <Link>
                    <BsFacebook className="fs-4 mx-1" />
                  </Link>
                  <Link>
                    <AiFillTwitterCircle className="fs-4 mx-1" />
                  </Link>
                  <Link>
                    <BsLinkedin className="fs-4 mx-1 " />
                  </Link>

                  <Link>
                    <BsInstagram className="fs-4 mx-1" />
                  </Link>

                  <Link>
                    <BsYoutube className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2 px-4">
              <h3 className="fw-bolder  mb-4">About</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">About Us</Link>
                <Link className="mb-3">Find store</Link>
                <Link className="mb-3">Categories</Link>
                <Link className="mb-3">Blogs</Link>
              </div>
            </div>
            <div className="col-2 px-4">
              <h3 className="fw-bolder mb-4">Partnership</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">About Us</Link>
                <Link className="mb-3">Find store</Link>
                <Link className="mb-3">Categories</Link>
                <Link className="mb-3">Blogs</Link>
              </div>
            </div>
            <div className="col-2 px-4">
              <h3 className="fw-bolder mb-4">Information</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">Help Center</Link>
                <Link className="mb-3">Money Refund</Link>
                <Link className="mb-3">Shipping</Link>
                <Link className="mb-3">Contact us</Link>
              </div>
            </div>
            <div className="col-2 px-4">
              <h3 className="fw-bolder mb-4">For users</h3>
              <div className="footer-details d-flex flex-column">
                <Link className="mb-3">Login</Link>
                <Link className="mb-3">Register</Link>
                <Link className="mb-3">Settings</Link>
                <Link className="mb-3">My Orders</Link>
              </div>
            </div>
            <div className="col-2 px-4">
              <h3 className="fw-bolder px-4">Get app</h3>
              <div className="footer-details">
                <div className="pay">
                  <div>
                    <Link>
                      <img src={app} alt="" className="p-4" />
                    </Link>
                  </div>
                </div>
                <div className="pay">
                  <Link>
                    <img src={google} alt="" className="p-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-between">
            <div className="col-3">
              <p>&copy; Developed by Eclar Developers 2023</p>
            </div>
            <div className="col-3 d-flex justify-content-around ">
              <Link className="text-black">Privacy Policy</Link>
              <Link className="text-black">Terms of Use</Link>
              <Link className="text-black">Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
