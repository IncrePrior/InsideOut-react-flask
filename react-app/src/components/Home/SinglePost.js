import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import React from 'react';
import './SinglePost.css';

export default function SinglePost({ post }) {
   const history = useHistory();
   const user = useSelector(state => state.session.user);

   const onClick = () => {
      history.push(`/posts/${post.id}`);
   }

   const photoUrl = useSelector(state => {
      const photoId = state.posts.allPosts[post.id]?.photoId;
      return state.posts.allPosts[photoId]?.photoUrl || '';
   });

   return (
      <div onClick={onClick}>
         <div className="post-container">
            <div className="photo">
               <div>
                  {photoUrl ? (
                     <img className='post-photo' src={photoUrl} alt={post.title} />
                  ) : (
                     <img className='post-photo' src="default-image-url.jpg" alt={post.title} />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}


// import { useHistory } from 'react-router';
// import { useSelector } from 'react-redux';
// import React from 'react';
// import './SinglePost.css';
// import PostDetails from '../PostDetails/PostDetails';

// export default function SinglePost({ post }) {
//   const history = useHistory();
//   const user = useSelector(state => state.session.user);

//   const onClick = () => {
//     history.push(`/posts/${post.id}`);
//   }

//   const photoUrl = useSelector(state => {
//     const photoId = state.posts.allPosts[post.id]?.photoId;
//     return state.posts.allPosts[photoId]?.photoUrl || '';
//   });

//   return (
//    <div onClick={onClick}>
//      <div className="post-container">
//        <div className="photo">
//          <div>
//            {photoUrl ? (
//              <img className='post-photo' src={photoUrl} alt={post.title} />
//            ) : (
//              <img className='post-photo' src="default-image-url.jpg" alt={post.title} />
//            )}
//          </div>
//        </div>
//      </div>
//      <PostDetails postData={post} photoUrl={photoUrl} />
//    </div>
//  );
// }
