import React from 'react';
import { EventComponent } from './Events.style';

const EventsList = (props) => {
	const { title, img, date } = props.event;
	return (
		<EventComponent className="col-lg-5 mb-3">
			<div className="d-flex events">
				<div className="event-img">
					<img className="img-fluid" src={img} alt={title} />
				</div>
				<div className="event-content">
					<h4>{title}</h4>
					<p>{date}</p>
				</div>
				<button className="btn">Cancel</button>
			</div>
		</EventComponent>
	);
};

export default EventsList;
