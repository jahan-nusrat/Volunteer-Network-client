import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../data';
import Services from './Services';
import { ServiceRow } from './style/Service.style';

const ServiceList = () => {
	const [ services, setServices ] = useState([]);
	useEffect(() => {
		setServices(fakeData);
	}, []);

	return (
		<div className="container">
			<ServiceRow className="row">
				{services.map((info) => {
					return <Services key={info.id} info={info} />;
				})}
			</ServiceRow>
		</div>
	);
};

export default ServiceList;
