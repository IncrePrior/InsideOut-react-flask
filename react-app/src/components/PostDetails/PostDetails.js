// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useHistory } from "react-router-dom";
// // import OpenModalButton from "../OpenModalButton";
// import { getSinglePostThunk, checkPreviousPost, checkNextPost } from "../../store/post";
// import "./PostDetails.css";

// export default function PostDetails() {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { postId } = useParams();
//   const user = useSelector((state) => state.session.user);
//   const post = useSelector((state) => state.posts.singlePost);
//   const [ hasPrevious, setHasPrevious ] = useState(true);
//   const [ hasNext, setHasNext ] = useState(true);
//   const [ nextId, setNextId ] = useState(null);
//   const [ prevId, setPrevId ] = useState(null);
//   const [ errors, setErrors ] = useState([]);

//   const owner = user && user.id === post.user_id;

//   useEffect(() => {
//     dispatch(getSinglePostThunk(postId));
//   }, [dispatch, postId]);

//   if (!post.id) return null;

//   useEffect(() => {
//     const fetchPost = async () => {
//         try {
//             const prevPost = await dispatch(checkPreviousPost(Number(postId)));
//             setPrevId(prevPost);
//             setHasPrevious(true);
//         } catch (error) {
//             setHasPrevious(false);
//         }

//         try {
//             const nextPost = await dispatch(checkNextPost(Number(postId)));
//             setNextId(nextPost);
//             setHasNext(true);
//         } catch (error) {
//             setHasNext(false);
//         }
//     };
//     fetchPost();
// }, [dispatch, postId]);

//   const handlePreviousNavigate = (prevId) => {
//     history.push(`/posts/${prevId}`);
//   };

//   const handleNextNavigate = (nextId) => {
//     history.push(`/posts/${nextId}`);
//   }

//   const handleHomeNavigate = () => {
//     history.push(`/posts`);
//   }

// //   const handleProfileClick = (e, post) => {
// //     e.preventDefault();
// //     history.push(`/users/${post.userId}/posts`)
// //   };

//   return (
//     <div className="image-container">
//       <div className="single-post-photo-container">
//         <img id="post-image" src={post?.photoUrl}></img>
//         <div className="single-post-title">
//           {post.title}
//         </div>

//         {hasPrevious && (
//           <i
//             class="fa-solid fa-chevron-left post-previous"
//             onClick={() => handlePreviousNavigate(prevId)}
//           ></i>
//         )}
//         {hasNext && (
//           <i
//             class="fa-solid fa-chevron-right post-next"
//             onClick={() => handleNextNavigate(nextId)}
//           ></i>
//         )}
//       </div>

//       <div id="post-details-container">
//         <img
//           className="current-post-image"
//         //   onClick={(e) => handleProfileClick(e, post)}
//           src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/i9a305a7efa48dc70/version/1695953827/image.png"
//           alt=""
//         ></img>
//         <div id="post-owner-info">
//           <div id="creator-follow-container">
//             <p
//               id="post-owner"
//             //   onClick={(e) => handleProfileClick(e, post)}
//             >
//               {post.User?.username}
//             </p>
//           </div>
//           <div id="post-text-container">
//             <p id="post-text">{post.text}</p>
//           </div>
//         </div>
//       </div>
//       <h4 id="post-comment">Comments</h4>
//     </div>
//   );
// };

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useHistory } from "react-router-dom";
// import {
//   getSinglePostThunk,
//   checkPreviousPost,
//   checkNextPost,
// } from "../../store/post";
// import "./PostDetails.css";

// export default function PostDetails() {
//   const dispatch = useDispatch();
//   const { postId } = useParams();
//   const history = useHistory();
//   const user = useSelector((state) => state.session.user);
//   const post = useSelector((state) => state.posts.singlePost);
//   const [hasPrevious, setHasPrevious] = useState(true);
//   const [hasNext, setHasNext] = useState(true);
//   const [nextId, setNextId] = useState(null);
//   const [prevId, setPrevId] = useState(null);
//   const [errors, setErrors] = useState([]);

//   const owner = user && user.id === post.user_id;

//   useEffect(() => {
//     dispatch(getSinglePostThunk(postId));
//   }, [dispatch, postId]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const prevPost = await dispatch(checkPreviousPost(Number(postId)));
//         setPrevId(prevPost);
//         setHasPrevious(true);
//       } catch (error) {
//         setHasPrevious(false);
//       }

//       try {
//         const nextPost = await dispatch(checkNextPost(Number(postId)));
//         setNextId(nextPost);
//         setHasNext(true);
//       } catch (error) {
//         setHasNext(false);
//       }
//     }
//     fetchData();
//   }, [dispatch, postId]);

//   const handlePreviousNavigate = () => {
//     if (hasPrevious) {
//       history.push(`/posts/${prevId}`);
//     }
//   };

//   const handleNextNavigate = () => {
//     if (hasNext) {
//       history.push(`/posts/${nextId}`);
//     }
//   };

//   return (
//     <div id="post-details-container">
//       <img
//         className="current-post-image"
//         src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/i9a305a7efa48dc70/version/1695953827/image.png"
//         alt=""
//       />
//       <div id="post-owner-info">
//         <div id="creator-follow-container">
//           <p id="post-owner">{post.User?.username}</p>
//         </div>
//         <div id="post-text-container">
//           <p id="post-text">{post.text}</p>
//         </div>
//       </div>
//       <h4 id="post-comment">Comments</h4>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useHistory } from "react-router-dom";
// import {
//   getSinglePostThunk,
//   checkPreviousPost,
//   checkNextPost,
// } from "../../store/post";
// import "./PostDetails.css";

// export default function PostDetails() {
//   const dispatch = useDispatch();
//   const { postId } = useParams();
//   const history = useHistory();
//   const user = useSelector((state) => state.session.user);
//   const post = useSelector((state) => state.posts.singlePost);
//   const [hasPrevious, setHasPrevious] = useState(true);
//   const [hasNext, setHasNext] = useState(true);
//   const [nextId, setNextId] = useState(null);
//   const [prevId, setPrevId] = useState(null);
//   const [errors, setErrors] = useState([]);

//   const owner = user && user.id === post.user_id;

//   useEffect(() => {
//     dispatch(getSinglePostThunk(postId));
//   }, [dispatch, postId]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const prevPost = await dispatch(checkPreviousPost(Number(postId)));
//         setPrevId(prevPost);
//         setHasPrevious(true);
//       } catch (error) {
//         setHasPrevious(false);
//       }

//       try {
//         const nextPost = await dispatch(checkNextPost(Number(postId)));
//         setNextId(nextPost);
//         setHasNext(true);
//       } catch (error) {
//         setHasNext(false);
//       }
//     }
//     fetchData();
//   }, [dispatch, postId]);

//   const handlePreviousNavigate = () => {
//     if (hasPrevious) {
//       history.push(`/posts/${prevId}`);
//     }
//   };

//   const handleNextNavigate = () => {
//     if (hasNext) {
//       history.push(`/posts/${nextId}`);
//     }
//   };

//   return (
//     <div id="post-details-container">
//       <div className="post-header">
//         <img
//           className="post-owner-icon"
//           src={post.User?.profileIcon} // Assuming the user object has a 'profileIcon' property
//           alt="Owner Icon"
//         />
//         <div className="post-info">
//           <h1 className="post-title">{post.title}</h1>
//           <p className="post-owner">{post.User?.username}</p>
//         </div>
//       </div>
//       <img
//         className="current-post-image"
//         src={post.image} // Assuming the post object has an 'image' property
//         alt="Post Image"
//       />
//       <div id="post-text-container">
//         <p id="post-text">{post.text}</p>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getSinglePostThunk,
  checkPreviousPost,
  checkNextPost,
} from "../../store/post";
import "./PostDetails.css";

export default function PostDetails({ photoUrl }) {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const post = useSelector((state) => state.posts.singlePost);
  const [hasPrevious, setHasPrevious] = useState(true);
  const [hasNext, setHasNext] = useState(true);
  const [nextId, setNextId] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getSinglePostThunk(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    async function fetchData() {
      try {
        const prevPost = await dispatch(checkPreviousPost(Number(postId)));
        setPrevId(prevPost);
        setHasPrevious(true);
      } catch (error) {
        setHasPrevious(false);
      }

      try {
        const nextPost = await dispatch(checkNextPost(Number(postId)));
        setNextId(nextPost);
        setHasNext(true);
      } catch (error) {
        setHasNext(false);
      }
    }
    fetchData();
  }, [dispatch, postId]);

  const handlePreviousNavigate = () => {
    if (hasPrevious) {
      history.push(`/posts/${prevId}`);
    }
  };

  const handleNextNavigate = () => {
    if (hasNext) {
      history.push(`/posts/${nextId}`);
    }
  };

  console.log("photoUrl:", photoUrl);

  return (
    <div className="single-post-main">
      <div className="post-photo-container">
        <img className="current-post-image" src={photoUrl} alt="Post Image" />
      </div>
      <div className="post-info-container">
        <h1 className="post-title">{post.title}</h1>

        <div className="text-area">
          <div className="owner-info">
            <img
              className="post-owner-icon"
              src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/i9a305a7efa48dc70/version/1695953827/image.png"
              alt="Owner Icon"
            />
          </div>

          <div id="post-text-container">
            <p className="post-owner">{post.User?.username}</p>
            <p id="post-text">{post.text}</p>
          </div>
        </div>
      </div>
      <div className="comments-container">
      <h3 className="post-comment">Comments</h3>
      </div>
    </div>
  );
}
