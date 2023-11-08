import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Masonry from "react-masonry-css";
import SinglePost from '../Home/SinglePost';
import { SingleCollectionThunk } from '../../store/collection';
import CollectionUpdateButton from './CollectionUpdateButton';



export default function CollectionDetails() {
    const { collectionId } = useParams();
    const dispatch = useDispatch();
    const collection = useSelector(state => state.collections.singleCollection);
    const user = useSelector((state) => state.session.user);
    const postsObj = useSelector(state => state.posts.allPosts)
    const postsArr = Object.values(postsObj)
    const loading = useSelector((state) => state.collections.loading);
    
    const [collectionPosts, setCollectionPosts] = useState([])

    useEffect(async () => {

        // console.log("Collection ID:", collectionId);

        const res = await dispatch(SingleCollectionThunk(collectionId))

        // dispatch(SingleCollectionThunk(collectionId));
        setCollectionPosts(res.posts)
    }, [dispatch, collectionId]);


    console.log("Collection:", collection);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (!collection) {
        return <p>Collection not found.</p>;
    }


const posts = collection.posts? postsArr.filter(post => collection.posts.includes(post.id)) : [];

const isOwner = user && user.id === collection.user_id;


console.log("Posts:", posts);



return (
    <div>
        <h1>{collection.name}</h1>
            <p>{collection.description}</p>
            <p>{collection.type}</p>
            <div>
            <div>
        <CollectionUpdateButton user={user} collectionId={collection.id} />
        </div>
                    <Masonry
                        breakpointCols={{ default: 4, 1100: 3, 800: 2, 500: 1 }}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                            {collectionPosts.map((post) => (
                                <div className="post-card-container"  key={post.id}>
                                    <SinglePost post={post} photoUrl={post.photoUrl}/>
                                </div>
                            ))}
                        </Masonry>
                </div>
    </div>
);
};
