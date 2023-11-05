import React, { useState, useEffect, useRef } from "react";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeletePost from "../DeletePost/DeletePost";
import NewPost from "../NewPost/NewPost";

export default function PostUpdateButton({ user, postId }) {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, []);

  const ulClassName = "post-update-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div className="post-update-dropdown" ref={ulRef}>
      <button
        style={{ background: "transparent", border: "none", color: "#000" }}
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      >
        <div className="post-dots-container">
         ...
        </div>
      </button>
      <div className={ulClassName}>
        {user ? (
          <div className="dropdown">
            <OpenModalButton
              className="new-post-modal"
              buttonText={
                <>
                  EDIT POST
                </>
              }
              modalComponent={<NewPost formType="Edit" postId={postId} />}
            />

            <OpenModalButton
              className="new-post-modal"
              buttonText={
                <>
                  DELETE POST
                </>
              }
              modalComponent={<DeletePost postId={postId} />}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
