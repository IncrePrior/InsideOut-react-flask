// import React from 'react';
// import { useHistory } from 'react-router';
// import './ProfilePage.css';




// export default function SingleCollection({ collection }) {
//     const history = useHistory()

//     const onClick = () => {
//         history.push(`/collections/${collection.id}`)
//     }

//     return (

//         <div>
//             <div className="tooltip">
//                 <div className='one-card' onClick={onClick}>
//                     <div className='collect-preview'>
//                         <img src={collection.posts.allPosts[post[0]]?.photoUrl ? collection.posts.allPosts[post[0]]?.photoUrl : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'} alt={collection.name} className='preview' />
//                     </div>
//                     <div className='collect-preview'>
//                         <img src={collection.posts.allPosts[post[1]]?.photoUrl ? collection.posts.allPosts[post[1]]?.photoUrl : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'} alt={collection.name} className='icon1' />
//                         <img src={collection.posts.allPosts[post[2]]?.photoUrl ? collection.posts.allPosts[post[2]]?.photoUrl : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'} alt={collection.name} className='icon1' />
//                     </div>
//                 </div>
//                 <span className="tooltiptext">{collection.name}</span>
//             </div>
//         </div>

//     )
// }
