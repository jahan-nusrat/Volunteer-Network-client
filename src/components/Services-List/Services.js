import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceComponent } from './style/Service.style';

const Services = (props) => {
	const { _id, title, img, color } = props.info;

	return (
		<ServiceComponent className="card col-lg-3 p-3">
			<Link to={`/categories/${_id}`}>
				<div className="card-body text-center p-0">
					<img className="img-fluid" src={img} alt={title} />
					<div className="card-title" style={{ backgroundColor: `${color}` }}>
						{title}
					</div>
				</div>
			</Link>
		</ServiceComponent>
	);
};

export default Services;
