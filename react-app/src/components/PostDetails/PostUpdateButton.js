import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeletePost from "../DeletePost/DeletePost";
import EditPost from "../EditPost/EditPost";
import NewPost from "../NewPost/NewPost";

export default function PostUpdateButton({ user, postId }) {
  const [showMenu, setShowMenu] = useState(false);
  const post = useSelector((state) => state.posts.singlePost);
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
        hidden={user.id !== post.userId}
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
              modalComponent={<EditPost postId={postId} />}
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









// import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import OpenModalButton from "../OpenModalButton/OpenModalButton";
// import DeletePost from "../DeletePost/DeletePost";
// import EditPost from "../EditPost/EditPost";
// import NewPost from "../NewPost/NewPost";

// export default function PostUpdateButton({ user, postId, setDisabledArrows }) {
//   const [showMenu, setShowMenu] = useState(false);
//   const post = useSelector((state) => state.posts.singlePost);
//   const ulRef = useRef();

//   useEffect(() => {
//     const closeMenu = (e) => {
//       if (ulRef.current && !ulRef.current.contains(e.target)) {
//         setShowMenu(false);

//       }
//     };

//     document.addEventListener("click", closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//   }, []);

//   const ulClassName = "post-update-dropdown" + (showMenu ? "" : " hidden");

//   return (
//     <div className="post-update-dropdown" ref={ulRef}>
//       <button
//         hidden={user.id !== post.userId}
//         style={{ background: "transparent", border: "none", color: "#000" }}
//         onClick={(e) => {
//           e.stopPropagation();
//           setShowMenu(!showMenu);
//         }}
//       >
//         <div className="post-dots-container">
//           ...
//         </div>
//       </button>
//       <div className={ulClassName}>
//         {user ? (
//           <div className="dropdown">
//             <OpenModalButton
//               className="new-post-modal"
//               // onButtonClick={e => setDisabledArrows(true)}
//               buttonText={
//                 <>
//                   EDIT POST
//                 </>
//               }
//               modalComponent={<EditPost postId={postId}/>}
//             />

//             <OpenModalButton
//               className="new-post-modal"
//               buttonText={
//                 <>
//                   DELETE POST
//                 </>
//               }
//               modalComponent={<DeletePost postId={postId} />}
//             />
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }
