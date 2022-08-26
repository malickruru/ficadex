import React, { useRef, useState } from "react";
import {
  flexRowAround,
  flexRowCenter,
  flexColumn,
  flexColumnLeft,
  flexRight,
  flexColumnRight,
  flexLeft,
} from "../Style/Flex";
import { NavLink, Outlet, Link } from "react-router-dom";
import Row from "./Row";
import { Links } from "../Utils/Links";

function Header() {
  let activeClassName = "active";
  const [menuOpen, setMenuOpen] = useState(false);
  const search = useRef(null);
  const metier = useRef(null);
  const bureau = useRef(null);

  let CurrentRef = null;

  const showSearch = () => {
    search.current.style.padding = "10px";
    search.current.style.height = "50px";
  };

  const showDropdown = (refs) => {
    refs.current.style.padding = "10px";
    refs.current.style.height = "200px";
  };
  const hideSearch = () => {
    search.current.style.padding = "0px";
    search.current.style.height = "0px";
  };
  const hideDropdown = (refs) => {
    if (CurrentRef !== null) {
      refs.current.style.padding = "0px";
      refs.current.style.height = "0px";
    }
  };

  const handleMouseEnter = (isDropdownMenu, refs) => {
    hideDropdown(CurrentRef);
    if (isDropdownMenu) {
      switch (refs) {
        case "bureau":
          CurrentRef = bureau;
          break;

        default:
          CurrentRef = metier;
          break;
      }
      showDropdown(CurrentRef);
    }
  };

  const handleMouseLeave = () => {
    hideDropdown(CurrentRef);
  };

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
                    onMouseEnter={() =>
                      handleMouseEnter(item.dropdown, item.ref)
                    }
                    // onMouseLeave={handleMouseLeave}
                  >
                    {item.nom}
                  </NavLink>
                );
              })}
            </div>
            <div style={flexRowAround}>
              <div className="px-5 Header-search click" onClick={showSearch}>
                <i className="bi bi-search"></i>
              </div>
              <div
                className="mobile-only Header-burgerMenu px-1 click"
                onClick={() => setMenuOpen(true)}
              >
                <i className="bi bi-list"></i>
              </div>
            </div>
          </div>
        </Row>
        {/* search section */}
        <div className="searchSection" style={flexRowCenter} ref={search}>
          <input
            style={{ width: "70%" }}
            className="input-1"
            type="text"
            placeholder="Rechercher"
          ></input>
          <i
            style={{ color: "#000", fontSize: "2em" }}
            className="bi bi-x click"
            onClick={hideSearch}
          ></i>
        </div>
        {/* metier section */}
        <div
          className="dropdown"
          onMouseLeave={handleMouseLeave}
          style={flexColumnLeft}
          ref={metier}
        >
          <Link to="/" className="Header-link py-3">
            Métier 1
          </Link>
          <Link to="/" className="Header-link py-3 ">
            Métier 2
          </Link>
          <Link to="/" className="Header-link py-3">
            Métier 3
          </Link>
        </div>
        <div
          className="dropdown"
          onMouseLeave={handleMouseLeave}
          style={flexColumnLeft}
          ref={bureau}
        >
          <Link to="/" className="Header-link py-3">
            Bureau 1
          </Link>
          <Link to="/" className="Header-link py-3">
            Bureau 2
          </Link>
          <Link to="/" className="Header-link py-3">
            Bureau 3
          </Link>
        </div>

        {menuOpen && (
          <div className="mobilemenu" style={flexColumnRight}>
            <div style={flexLeft} className="w100">
              <i
                style={{ color: "#000", fontSize: "2em" }}
                className="bi bi-x click"
                onClick={() => setMenuOpen(false)}
              ></i>
            </div>
            {Links.map((item, idx) => {
              return (
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive
                      ? "Header-link borderBottom p-3 w100 " + activeClassName
                      : "Header-link borderBottom p-3 w100"
                  }
                  onMouseEnter={() => handleMouseEnter(item.dropdown, item.ref)}
                  // onMouseLeave={handleMouseLeave}
                >
                  {item.nom}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
}

export default Header;
