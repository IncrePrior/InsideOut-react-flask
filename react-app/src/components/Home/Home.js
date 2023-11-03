import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
// import { getAllPostsThunk } from "../../store/post";
import PostCard from "./PostCard";
import './Home.css';


export default function Home() {

    // const dispatch = useDispatch();
    // const postsObj = useSelector(state => state.posts.allPosts)
    // const posts = postsObj ? Object.values(postsObj) : [];

    // useEffect(() => {
    //     dispatch(getAllPostsThunk());
    // }, [dispatch]);

    // if (!posts.length) return null

    // return (
    //     <div className="posts-images">
    //         <ResponsiveMasonry
    //             columnsCountBreakPoints={{ 350: 2, 750: 3, 1026: 5 }}
    //         >
    //             <Masonry>
    //                 {posts.map((post) => (
    //                     <div className="">
    //                         <PostCard key={post.id} post={post} />
    //                     </div>
    //                 ))}
    //             </Masonry>
    //         </ResponsiveMasonry>
    //     </div>
    // )
}
