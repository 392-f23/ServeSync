// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import "./NavBar.css";

// const NavBar = () => {
//     const [selectedItem, setSelectedItem] = useState(null);

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };
//     return (
//         <nav id="navbar">
//             <ul className='flex gap-8 justify-center bg-slate-400 fixed bottom-0 w-screen rounded-full pt-6 pb-6'>
//                 <li className={selectedItem === 'Events' ? 'selected pl-2 pr-2 pt-1 pb-1' : ''}>
//                     <NavLink to="/" activeClassName="active" onClick={() => handleItemClick('Events')}>Events</NavLink>
//                 </li>
//                 <li className={selectedItem === 'Add' ? 'selected pl-2 pr-2 pt-1 pb-1' : ''}>
//                     <NavLink to="/Add" activeClassName="active" onClick={() => handleItemClick('Add')}>Add</NavLink>
//                 </li>
//                 <li className={selectedItem === 'Profile' ? 'selected pl-2 pr-2 pt-1 pb-1' : ''}>
//                     <NavLink to="/Profile" activeClassName="active" onClick={() => handleItemClick('Profile')}>Profile</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default NavBar;




import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { firebaseSignOut } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const CustomNavbar = () => {
    let navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const handleSignOut = async () => {
        await firebaseSignOut();
        navigate('/');
        setExpanded(false); 
    }

    const collapseNavbar = () => {
        setExpanded(false);
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded} className='navbar'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" onClick={collapseNavbar}>
                    <LinkContainer to="/">
                        <Nav.Link>Events</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add">
                        <Nav.Link>Add</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav.Link onClick={handleSignOut} className="ml-auto" id="sign-out">Sign Out</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;