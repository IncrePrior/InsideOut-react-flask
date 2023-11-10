import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import PostUpdateButton from "./PostUpdateButton";
import { getSinglePostThunk, checkPreviousPost, checkNextPost } from "../../store/post";
import AddPostToCollection from "../AddPostToCollection/AddPostToCollection";
import "./PostDetails.css";




export default function PostDetails() {
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
  const [photoUrl, setPhotoUrl] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  useEffect(() => {
    dispatch(getSinglePostThunk(postId));

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

    async function fetchPhotoUrl() {
      try {
        const response = await fetch(`/api/posts/${postId}/photo`);
        if (response.ok) {
          const data = await response.json();
          setPhotoUrl(data.photoUrl);
        }
      } catch (error) {
        console.error("Error fetching photoUrl: ", error);
      }
    }
    fetchPhotoUrl();
  }, [dispatch, postId]);


  const goToPreviousPost = () => {
    if (prevId) {
      history.push(`/posts/${prevId}`);
    }
  };


  const goToNextPost = () => {
    if (nextId) {
      history.push(`/posts/${nextId}`);
    }
  };

  return (
    <div className="single-post-main">
    <div className="post-photo-container">
    {hasPrevious && (
        <img
        src={`${process.env.PUBLIC_URL}/left.png`}
        alt="Previous Post"
        className="arrow-icon-left"
        onClick={goToPreviousPost}
      />
      )}
      <img className="current-post-image" src={photoUrl} alt="Post Image" />

      {hasNext && (
        <img
        src={`${process.env.PUBLIC_URL}/right.png`}
        alt="Next Post"
        className="arrow-icon-right"
        onClick={goToNextPost}
      />
      )}
    </div>


<div className="post-info-main">
  <div className="left-container">

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
        <div>
        <PostUpdateButton user={user} postId={post.id} />
        </div>
      </div>


    <div className="comments-container">
      <h3 className="post-comment">Comments</h3>
    </div>
    </div>

    <div>
    <button
        id="add-post-id"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      style={{
        background: 'rgb(238, 233, 233)',
        border: '1px solid transparent',
        color: '#000',
        cursor: 'pointer',
        transition: 'color 0.3s',
      }}
      className="transparent-button"
      onMouseOver={(e) => (e.target.style.color = 'aqua')}
      onMouseOut={(e) => (e.target.style.color = '#000')}
    >
        ADD POST TO COLLECTION
      </button>

      {showMenu && (
          <AddPostToCollection
            post_id={post.id}
            // collection_id={collection.id}
            onSelectCollection={(selectedCollection) => {
              // Handle the selected collection if needed
              console.log(selectedCollection);
            }}
          />
        )}
</div>

  </div>
  </div>
  );
}
