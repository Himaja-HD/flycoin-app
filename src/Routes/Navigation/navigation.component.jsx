import {Fragment} from "react";
import { Outlet ,NavLink, Link } from "react-router-dom";
import {ReactComponent as Booklogo } from "../../images/bookmark.svg";

import './navigation.styles.css';






function Navigation () {
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Booklogo className='logo' />
                </Link>
           

            <div className='Nav-links-container'>
                <NavLink className= 'Nav-link' to='/'    >Home</NavLink>
                <NavLink className= 'Nav-link' to='/coin'>Coin</NavLink>
                <NavLink className= 'Nav-link' to='/kyc'>Know your Coin</NavLink>
                <NavLink className= 'Nav-link' to='/writeus'>Write us</NavLink>
                <NavLink className= 'Nav-link' to='/login'>Login</NavLink>
                
            </div>
            </div>
            
            <Outlet />
            
        </Fragment>
    );
};

export default Navigation;
