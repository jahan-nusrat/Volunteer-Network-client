import React from 'react';
import { EventComponent } from './Events.style';

const EventsList = (props) => {
	const { _id, event, img, date } = props.event;

	return (
		<EventComponent className="col-lg-5 mb-3">
			<div className="d-flex events">
				<div className="event-img">
					<img className="img-fluid" src={img} alt={event} />
				</div>
				<div className="event-content">
					<h4>{event}</h4>
					<p>{date}</p>
				</div>
				<button className="btn" onClick={() => props.deleteEvent(_id)}>
					Cancel
				</button>
			</div>
		</EventComponent>
	);
};

export default EventsList;
