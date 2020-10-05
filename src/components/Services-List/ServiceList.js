import React, { useState } from 'react';
import { useEffect } from 'react';
import Services from './Services';
import { ServiceRow } from './style/Service.style';
import Loading from '../Loading/Loading';

let styles = {
	height : '200px'
};

const ServiceList = () => {
	const [ services, setServices ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		fetch('https://pure-plateau-94061.herokuapp.com/categories').then((res) => res.json()).then((result) => {
			setIsLoading(false);
			setServices(result);
		});
	}, []);

	return (
		<div className="container">
			{isLoading ? (
				<Loading styles={styles} />
			) : (
				<ServiceRow className="row">
					{services.map((info) => {
						return <Services key={info._id} info={info} />;
					})}
				</ServiceRow>
			)}
		</div>
	);
};

export default ServiceList;
