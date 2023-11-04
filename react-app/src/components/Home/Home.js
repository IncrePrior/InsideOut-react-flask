// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SinglePost from "./SinglePost";
// import { getAllPostsThunk } from "../../store/post";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import './Home.css';

// export default function Home() {
//     const dispatch = useDispatch();
//     const postsObj = useSelector((state) => state.posts.allPosts);
//     const posts = postsObj ? Object.values(postsObj) : [];

//     useEffect(() => {
//         dispatch(getAllPostsThunk());
//         console.log('Fetching posts...');
//     }, [dispatch]);

//     console.log('Posts:', posts);

//     if (!posts.length) return null;

//     return (
//         <div className="image-grid">
//             <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 1026: 5 }}> */}
//                 <Masonry>
//                     {posts.map((post) => (
//                         <div key={post.id}>
//                             <SinglePost key={post.id} post={post} />
//                         </div>
//                     ))}
//                 </Masonry>
//             </ResponsiveMasonry>
//         </div>
//     );
// }





// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import SinglePost from "./SinglePost";
// import { getAllPostsThunk } from "../../store/post";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
// import './Home.css';


// export default function Home() {

//     const dispatch = useDispatch();
//     const postsObj = useSelector(state => state.posts.allPosts)
//     const posts = postsObj ? Object.values(postsObj) : [];

//     useEffect(() => {
//         dispatch(getAllPostsThunk());
//         console.log('Fetching posts...');
//     }, [dispatch]);

//     if (!posts.length) return null

//     return (

//         <div className="image-grid">
//             {/* <p>this is Home page</p> */}
//             <ResponsiveMasonry
//                 columnsCountBreakPoints={{ 350: 2, 750: 3, 1026: 5 }}
//             >
//                 <Masonry>
//                     {posts.map((post) => (
//                         <div key={post.id}>
//                             <SinglePost key={post.id} post={post} />
//                         </div>
//                     ))}
//                 </Masonry>
//             </ResponsiveMasonry>
//         </div>
//     )
// }


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SinglePost from "./SinglePost";
import { getAllPostsThunk } from "../../store/post";
import './Home.css';

export default function Home() {
    const dispatch = useDispatch();
    const postsObj = useSelector((state) => state.posts.allPosts);
    const posts = postsObj ? Object.values(postsObj) : [];

    useEffect(() => {
        dispatch(getAllPostsThunk());
        console.log('Fetching posts...');
    }, [dispatch]);

    console.log('Posts:', posts);

    if (!posts.length) {
        console.log('No posts to display.');
        return null;
    }

    return (
        <div className="image-grid">
            {posts.map((post) => (
                <div key={post.id}>
                    <SinglePost key={post.id} post={post} />
                </div>
            ))}
        </div>
    );
}
