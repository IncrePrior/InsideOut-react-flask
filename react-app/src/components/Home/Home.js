import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SinglePost from "./SinglePost";
import { getAllPostsThunk } from "../../store/post";
import { NavLink } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const postsObj = useSelector((state) => state.posts.allPosts);
  const posts = postsObj ? Object.values(postsObj) : [];
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(getAllPostsThunk());
  }, [dispatch]);

  if (!posts.length) {
    console.log("No posts to display.");
    return null;
  }

  return (
    <div className="main-home-container">
       <div className="nav-links1">
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => setShowMenu(false)}
              to="/user"
              className="your-profile"
            >
              <div className="link">
              YOUR POSTS
              </div>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              onClick={() => setShowMenu(false)}
              to="/user"
              className="your-profile"
            >
              <div className="link1">
              YOUR COLLECTIONS
              </div>
            </NavLink>
            </div>

    <div className="image-grid">
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 800: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}


      </Masonry>
    </div>
    </div>
  );
}
