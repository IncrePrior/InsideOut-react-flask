import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SinglePost from "./SinglePost";
import { getAllPostsThunk } from "../../store/post";
import { AllCollectionsThunk } from "../../store/collection";
import { NavLink } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const postsObj = useSelector((state) => state.posts.allPosts);
  const posts = postsObj ? Object.values(postsObj) : [];
  const collectionsObj = useSelector((state) => state.collections.allCollections);
  const collections = collectionsObj ? Object.values(collectionsObj) : [];
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    dispatch(getAllPostsThunk());
    dispatch(AllCollectionsThunk())
  }, [dispatch]);

  const toggleDropdown = () => {
    // console.log("Toggling dropdown", showDropdown);
    // console.log("collections", collections);
    // console.log("object", collectionsObj);
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="main-home-container">
      <div className="nav-links1">
        {/* <NavLink
          style={{ textDecoration: "none" }}
          onClick={() => setShowMenu(false)}
          to="/posts"
          className="your-profile"
        >
          <div className="link">
            YOUR POSTS
          </div>
        </NavLink> */}

          <div className="dropdown10">
            <button
            onClick={toggleDropdown}
            style={{ background: 'transparent', border: '1px solid transparent', color: '#000' }}
            className="transparent-button"
          >
              YOUR COLLECTIONS
            </button>
            <div className="dropdown5">
            {showDropdown && (
              <ul className="collection-list1">
                {collections.map((collection) => (
                  <li key={collection.id}>
                    <NavLink to={`/collections/${collection.id}`}>{collection.name}</NavLink>
                  </li>
                ))}
              </ul>
            )}
            </div>
          </div>

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
