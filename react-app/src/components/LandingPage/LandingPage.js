import React, { useEffect, useState, useRef  } from "react";
import { useDispatch } from "react-redux";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import { login } from "../../store/session";
import { getAllPostsThunk } from "../../store/post"
import './LandingPage.css';


export default function LandingPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const ulRef = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const { closeModal } = useModal();

useEffect(() => {
    if(!showMenu) return;
    const closeMenu = (e) => {
        if (!ulRef.current.contains(e.target)) {
            setShowMenu(false);
        }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
}, [showMenu])

const closeMenu = () => setShowMenu(false);

const handleDemoLogin = (e) => {
    e.preventDefault();
    return dispatch(login('demo@aa.io', 'password'))
    .then(dispatch(getAllPostsThunk()))
    .then(history.push('/posts'))
    .then(closeModal);
};


    return (
    <div className='landing-container'>
        <div className='header-container'>
        <div className="header-buttons">
            <div className='header1'>Endless Design Inspiration for Spaces Inside and Out   </div>
            <div className='header2'>Join the community of Beauty Lovers!</div>
        </div>
            <OpenModalButton
                buttonText="Get Started"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
            />
        <button className='demo-button1' onClick={handleDemoLogin}>Visit as Demo User</button>

        </div>
    </div>
    )
}
