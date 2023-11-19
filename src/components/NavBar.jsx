import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul className='flex gap-8 justify-center bg-slate-400 fixed bottom-0 w-screen rounded-full pt-6 pb-6'>
                <li>
                    <NavLink to="/" activeClassName="active">Tab 1</NavLink>
                </li>
                <li>
                    <NavLink to="/tab2" activeClassName="active">Tab 2</NavLink>
                </li>
                <li>
                    <NavLink to="/tab3" activeClassName="active">Tab 3</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
