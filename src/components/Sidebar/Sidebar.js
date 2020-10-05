import React from 'react';
import { FaPlus, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SideMenuComponent } from './Sidebar.style';
import logo from '../../Images/logo.png';

const Sidebar = (props) => {
	return (
		<SideMenuComponent>
			<Link to="/">
				<img src={logo} className="img-fluid" alt="logo" />
			</Link>

			<div className="sidenav">
				<button
					className={`menu-link btn ${!props.showItem && 'text-primary'}`}
					onClick={() => props.setShowItem(false)}
				>
					<FaUserFriends className="icon" /> Volunteer Register List
				</button>
				<button
					className={`menu-link btn ${props.showItem && 'text-primary'}`}
					onClick={() => props.setShowItem(true)}
				>
					<FaPlus className="icon" /> Add Events
				</button>
			</div>
		</SideMenuComponent>
	);
};

export default Sidebar;
