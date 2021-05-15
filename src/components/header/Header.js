import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0="/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}  <button onClick={props.logout}>Logout</button> </div>
                    : <NavLink to={"/login"}>Login</NavLink> }
            </div>
        </header>
    );
};

export default Header;