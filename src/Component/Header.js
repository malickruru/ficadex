import React, { useRef } from "react";
import { flexRowAround } from "../Style/Flex";
import { NavLink, Outlet, Link } from "react-router-dom";
import Row from "./Row";
import { Links } from "../Utils/Links";

function Header() {
  let activeClassName = "active";

  return (
    <>
      <div className="container">
        <Row AdditionalClass={""} id="header">
          <div style={flexRowAround}>
            <div>
              <Link to="/">
                <img
                  src="./image/ficadex_groupe.png"
                  className="Header-logo"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="desktop-only">
              {Links.map((item, idx) => {
                return (
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      isActive
                        ? "Header-link " + activeClassName
                        : "Header-link "
                    }
                  >
                    {item.nom}
                  </NavLink>
                );
              })}
            </div>
            <div style={flexRowAround}>
              <div className="px-5 Header-search click">
                <i className="bi bi-search"></i>
              </div>
              <div className="mobile-only Header-burgerMenu px-1 click">
                <i className="bi bi-list"></i>
              </div>
            </div>
          </div>
        </Row>
      </div>

      <Outlet />
    </>
  );
}

export default Header;
