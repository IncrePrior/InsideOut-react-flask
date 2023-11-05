import React, { useState, useEffect, useRef } from "react";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import NewPost from "../NewPost/NewPost";
// import NewCollection from "../NewCollection/NewCollection";


export default function CreateButton({ user, postId }) {
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
        <div className="new-post">
         +
        </div>
      </button>
      <div className={ulClassName}>
        {user ? (
          <div className="dropdown">
            <OpenModalButton
              className="new-post-modal"
              buttonText={
                <>
                  CREATE POST
                </>
              }
              modalComponent={<NewPost formType="Create" postId={postId} />}
            />

            {/* <OpenModalButton
              className="new-post-modal"
              buttonText={
                <>
                  CREATE COLLECTION
                </>
              }
              modalComponent={<CreateCollection collectionId={collectioonId} />}
            /> */}
          </div>
        ) : null}
      </div>
    </div>
  );
}
