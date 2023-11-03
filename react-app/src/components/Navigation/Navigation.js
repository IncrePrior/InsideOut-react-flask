import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';



function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
	<div className='nav-container'>
		<NavLink exact to="/">
			<img className="INSIDEOUT-logo" alt="" src='https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png'></img>
		</NavLink>
		{isLoaded && (
		<div className='nav-profile'>
			{sessionUser ? (
				<NavLink className='new-post' to='/posts/new'>
					+
				</NavLink>
			) : null}
			<ProfileButton user={sessionUser} />
			</div>
		)}
		</div>
	);
}



export default Navigation;





// function Navigation({ isLoaded }){
	// 	const sessionUser = useSelector(state => state.session.user);

	// 	return (
	// 		<ul>
	// 			<li>
	// 				<NavLink exact to="/">Home</NavLink>
	// 			</li>
	// 			{isLoaded && (
	// 				<li>
	// 					<ProfileButton user={sessionUser} />
	// 				</li>
	// 			)}
	// 		</ul>
	// 	);
	// }
