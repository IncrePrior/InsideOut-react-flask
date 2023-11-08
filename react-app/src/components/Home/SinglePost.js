import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import React from 'react';
import './SinglePost.css';

export default function SinglePost({ post, photoUrl }) {
   const history = useHistory();

   const onClick = () => {

      // console.log('Clicked on post with id:', post.id);
      // console.log('Photo ID:', post.photoId);

      history.push(`/posts/${post.id}`);
   }

   // const photoUrl = useSelector(state => {
   //    return state.posts.allPosts[post.id]?.photoUrl;
   // });

   return (
      <div onClick={onClick}>
         <div className="post-container">
            <div className="photo">
               <div>
                     <img className='post-photo' src={post.photoUrl} />
               </div>
            </div>
         </div>
      </div>
   );
}