import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import CreateButton from "./CreateButton";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import NewPost from '../NewPost/NewPost';
import "./Navigation.css";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const user = useSelector((state) => state.session.user);
  const post = useSelector((state) => state.posts.singlePost);

  return (
    <div className="nav-container">
      {sessionUser ? (
        <NavLink exact to="/posts">
          <img
            className="INSIDEOUT-logo"
            alt="Logo"
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png"
          ></img>
        </NavLink>
      ) : (
        <NavLink exact to="/">
          <img
            className="INSIDEOUT-logo"
            alt="Logo"
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png"
          ></img>
        </NavLink>
      )}
      {isLoaded && (
        <div className="nav-profile">
          {sessionUser ? (
             <CreateButton user={user} postId={post.id} />
          ) : null}
          <ProfileButton user={sessionUser} />
        </div>
      )}
    </div>
  );
}

export default Navigation;
