import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import VolunteerList from './Volunteer-List/VolunteerList';
import AddEvent from './Add-Event/AddEvent';
import styled from 'styled-components';

const AdminPanel = styled.div`
	margin-left: 320px;
	padding: 0px 10px;
	background-color: #f4f7fc;
`;

const Admin = () => {
	const [ showItem, setShowItem ] = useState(false);
	return (
		<AdminPanel className="admin-panel">
			<Sidebar setShowItem={setShowItem} showItem={showItem} />
			{showItem ? <AddEvent /> : <VolunteerList />}
		</AdminPanel>
	);
};

export default Admin;
