import React, { useState } from 'react';
import { useEffect } from 'react';
import Services from './Services';
import { ServiceRow } from './style/Service.style';

const ServiceList = () => {
	const [ services, setServices ] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5005/categories').then((res) => res.json()).then((result) => {
			setServices(result);
		});
	}, []);

	return (
		<div className="container">
			<ServiceRow className="row">
				{services.map((info) => {
					return <Services key={info._id} info={info} />;
				})}
			</ServiceRow>
		</div>
	);
};

export default ServiceList;
