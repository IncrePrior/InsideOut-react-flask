import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";
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
  const closeMenu = () => setShowMenu(false);

  return (
    <div>
        <button className="profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>

      <div className={ulClassName} ref={ulRef}>
      <div className="logout-dropdown">
        {user ? (
            <div >
            <p className="text">
              Hi <strong>{user.username}</strong>
            </p>
            <p className="email"> {user.email}</p>
            <div className="line"></div>
            <button className="logout-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <div>
          <div className="profile-small-button">
            <OpenModalButton
              buttonText={<> LOG IN </>}
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
          </div>
          <div className="profile-small-button">
            <OpenModalButton
              buttonText={<> SIGN UP </>}
              onItemClick={closeMenu}
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
