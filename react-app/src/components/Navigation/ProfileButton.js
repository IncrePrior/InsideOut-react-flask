import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import { NavLink } from "react-router-dom";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";



function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {

    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push(`/`);
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");


  return (
    <div>
        <button className="profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>

      <div className={ulClassName} ref={ulRef}>
      <div className="logout-dropdown">
        {user ? (
            <div className="logout-dropdown1">
            <p className="text">
             Hi {user.username}
            </p>
            <p className="email"> {user.email}</p>
            <p className="dots">. . .</p>
            <div className="nav-links2">
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => setShowMenu(false)}
              to="/user"
              className="your-profile"
            >
              <div className="link3">
              YOUR POSTS
              </div>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => setShowMenu(false)}
              to="/user"
              className="your-profile"
            >
              <div className="link4">
              {/* <p className="house">⌂</p> Your Home */}
              YOUR COLLECTIONS
              </div>
            </NavLink>
            </div>
            <button className="logout-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <div >
          <div className="profile-small-button">
            <OpenModalButton
              buttonText={<> LOG IN </>}
              onItemClick={() => setShowMenu(false)}
              // onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
          </div>
          <div className="profile-small-button">
            <OpenModalButton
              buttonText={<> SIGN UP </>}
              onItemClick={() => setShowMenu(false)}
              // onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default ProfileButton;
