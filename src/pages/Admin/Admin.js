import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VolunteerList from './Volunteer-List/VolunteerList';
import AddEvent from './Add-Event/AddEvent';
import styled from 'styled-components';

const AdminPanel = styled.div`
	margin-left: 320px;
	padding: 0px 10px;
	background-color: #f4f7fc;
`;

const Admin = () => {
	return (
		<AdminPanel className="admin-panel">
			<Router>
				<Sidebar />
				<Switch>
					<Route path="/adminPanel/volunteerList">
						<VolunteerList />
					</Route>
					<Route path="/adminPanel/addEvents">
						<AddEvent />
					</Route>
					<Route path="/adminPanel">
						<VolunteerList />
					</Route>
				</Switch>
			</Router>
		</AdminPanel>
	);
};

export default Admin;
