import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import React from 'react';
// import OpenModalButton from '../OpenModalButton/OpenModalButton'
import './SinglePost.css'



export default function SinglePost({ post }) {
   const history = useHistory()

   const user = useSelector(state => state.session.user)

   // const owner = user && user.id === post.user_id

   const onClick = () => {
         history.push(`/posts/${post.id}`)
   }
   // console.log('post.photo:', post.photo);
   // console.log('post.photo.photo_url:', post.photo ? post.photo.photo_url : 'No photo');

   const photoUrl = useSelector(state => {
      const photoId = state.posts.allPosts[post.id]?.photoId;
      return state.posts.allPosts[photoId]?.photoUrl || '';
   });
   console.log("photoUrl", photoUrl)


   return (
      <div onClick={onClick}>
         <div className="post-container">
            <div className="post">
               <div>

               {post.photo && post.photo.photo_url ? (
                     <img className='post-photo' src={post[photoUrl]} alt={post.title} />
               ) : (

                     <img className='post-photo' src={post[photoUrl]} alt={post.title} />
               )}
               </div>
            </div>
         </div>
      </div>
   );

   // return (
   //    <div onClick={onClick}>
   //       <div className="post-container">
   //          <div className="post">
   //             <div>

   //             {post.photo && post.photo.photo_url ? (
   //                   <img className='post-photo' src={post[photoUrl]} alt={post.title} />
   //             ) : (

   //                   <img className='post-photo' src={post[photoUrl]} alt={post.title} />
   //             )}
   //             </div>
   //          </div>
   //       </div>
   //    </div>
   // );


   // return (
   //    <div onClick={onClick}>
   //       <div className="post-container">
   //          <div className="post">
   //             <div>

   //             console.log('post.photo.photoUrl:', post.photo.photoUrl);

   //                {post.photo ? (
   //                   <img className='post-photo' src={post.photo.photo_url} alt={post.title} />
   //                ) : (
   //                   <img className='post-photo' src="path_to_placeholder_image.jpg" alt={post.title} />
   //                )}
   //             </div>
   //          </div>
   //       </div>
   //    </div>
   // )

   // return (
   //    <div onClick={onClick}>
   //       <div className="post-container">
   //             <div className="post">
   //                <div>
   //                   <img className='post-photo' src={post.photo.photo_url} alt={post.title} />
   //                </div>

   //    {/* <div className="top-left">
   //       <OpenModalButton className="save-button" buttonText='Save' modalComponent={<AddPostCollection post_id={post.id} />} />
   //    </div> */}
   //             </div>
   //       </div>
   //    </div>
   // )
}
