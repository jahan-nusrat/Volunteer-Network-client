import React from 'react';
import { FaPlus, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SideMenuComponent } from './Sidebar.style';
import logo from '../../Images/logo.png';

const Sidebar = () => {
	return (
		<SideMenuComponent>
			<img src={logo} className="img-fluid" alt="logo" />

			<div className="sidenav">
				<Link to="/adminPanel/volunteerList" className="menu-link">
					<FaUserFriends className="icon" /> Volunteer Register List
				</Link>
				<Link to="/adminPanel/addEvents" className="menu-link">
					<FaPlus className="icon" /> Add Events
				</Link>
			</div>
		</SideMenuComponent>
	);
};

export default Sidebar;
