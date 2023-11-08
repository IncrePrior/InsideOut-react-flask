import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Masonry from "react-masonry-css";
import SinglePost from '../Home/SinglePost';
import { SingleCollectionThunk } from '../../store/collection';
import CollectionUpdateButton from './CollectionUpdateButton';
import "./CollectionDetails.css";
import { NavLink } from "react-router-dom";
import { AllCollectionsThunk } from "../../store/collection";



export default function CollectionDetails() {
    const { collectionId } = useParams();
    const dispatch = useDispatch();
    const collection = useSelector(state => state.collections.singleCollection);
    const user = useSelector((state) => state.session.user);
    const postsObj = useSelector(state => state.posts.allPosts)
    const postsArr = Object.values(postsObj)
    const loading = useSelector((state) => state.collections.loading);
    const [collectionPosts, setCollectionPosts] = useState([])
    const collectionsObj = useSelector((state) => state.collections.allCollections);
    const collections = collectionsObj ? Object.values(collectionsObj) : [];
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(async () => {
        const res = await dispatch(SingleCollectionThunk(collectionId))
        // dispatch(AllCollectionsThunk())
        setCollectionPosts(res.posts)
    }, [dispatch, collectionId]);

    // useEffect(() => {
    //     dispatch(AllCollectionsThunk())
    //   }, [dispatch]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (!collection) {
        return <p>Collection not found.</p>;
    }

    // useEffect(async () => {
    //     const collectionResponse = await dispatch(SingleCollectionThunk(collectionId));
    //     const allCollectionsResponse = await dispatch(AllCollectionsThunk());
    //     setCollectionPosts(collectionResponse.posts);
    // }, [dispatch, collectionId]);



// const posts = collection.posts? postsArr.filter(post => collection.posts.includes(post.id)) : [];

// const isOwner = user && user.id === collection.user_id;

const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
};

return (
    <div className='main-collection-details-container'>
        <div className='collection-details'>
        <div className='collection-name'>{collection.name}</div>
        <div className='collection-type'>{collection.type}</div>
        <div className='collection-description'>{collection.description}</div>
    </div>

    <div className='main-home-container1'>

        <div className='collection-dots-container'>
        <CollectionUpdateButton id="dots" user={user} collectionId={collection.id} />

        <div className="dropdown6">
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
                            {collectionPosts && collectionPosts.map((post) => (
                                <div className="post-card-container"  key={post.id}>
                                    <SinglePost post={post} photoUrl={post.photoUrl}/>
                                </div>
                            ))}
                        </Masonry>
        </div>
    </div>
    </div>

);
};
