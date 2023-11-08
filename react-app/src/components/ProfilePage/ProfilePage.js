import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AllCollectionsThunk } from "../../store/collection";
import { getAllPostsThunk } from "../../store/post";
import SingleCollection from "./SingleCollection";
import SinglePost from "../Home/SinglePost";
import Masonry from "react-masonry-css";
import './ProfilePage.css';




export default function UserProfile() {
    
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const postsObj = useSelector(state => state.posts.allPosts)
    const posts = postsObj ? Object.values(postsObj) : [];
    const user_posts = posts.filter(post => post.user_id === user.id)
    const collectionsObj = useSelector(state => state.collections.allCollections)
    const collections = collectionsObj ? Object.values(collectionsObj) : [];
    const user_collections = collections.filter(collections => collections.user_id === user.id)

    const [displayType, setDisplayType] = useState("post");

    useEffect(() => {
        dispatch(AllCollectionsThunk());
        dispatch(getAllPostsThunk());
    }, [dispatch]);

    const handleDisplayTypeChange = (type) => {
        setDisplayType(type);
    }

    return (
        <div>
            <div className="profile-container">
                <img className='user-icon' src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/i9a305a7efa48dc70/version/1695953827/image.png" alt={user.username} />
                <h2>{user.username}</h2>
                <div className="buttons-area">
                    <button
                        className="profile-button"
                        onClick={() => handleDisplayTypeChange("post")}
                    >
                        MY POSTS
                    </button>
                    <button
                        className="profile-button"
                        onClick={() => handleDisplayTypeChange("collection")}
                    >
                        MY COLLECTIONS
                    </button>
                </div>
            </div>
            {user_posts.length > 0 ? (
                    <Masonry
                    breakpointCols={{ default: 4, 1100: 3, 800: 2, 500: 1 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                        {displayType === "post" && (
                            user_posts.map((post) => (
                                <div className="elem-item" key={post.id}>
                                    <SinglePost post={post} />
                                </div>
                            ))
                        )}
                </Masonry>
                ) : (
                    <div>
                    {displayType === "post" && (
                        <h2>Create your first post. It's FUN!</h2>
                    )}
                    </div>
                )}
                {user_collections.length > 0 ? (
                    <div className="grid-container">
                    {displayType === "collection" && (
                        user_collections.map((collection) => (
                            <div className="elem-item" key={collection.id}>
                                <SingleCollection collection={collection} />
                            </div>
                        ))
                    )}
                    </div>
                ) : (
                    <div>
                    {displayType === "collection" && (
                        <h2>Create your first collection. It's FUN!</h2>
                    )}
                    </div>
                )}
        </div>
    )
}
