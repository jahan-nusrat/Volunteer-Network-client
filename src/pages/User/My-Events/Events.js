import React from 'react';
import { useSelector } from 'react-redux';
import { EventBox } from './Events.style';
import EventsList from './EventsList';

const Events = () => {
	const registeredEvents = useSelector((state) => state.events);
	const loggedInUser = useSelector((state) => state.userInfo);
	const registeredEventsFilter = registeredEvents.filter((event) => {
		return event.email === loggedInUser.email;
	});
	return (
		<EventBox className="event-box">
			<div className="container">
				<div className="row justify-content-center">
					{registeredEventsFilter.map((event) => {
						return <EventsList key={event.id} event={event} />;
					})}
				</div>
			</div>
		</EventBox>
	);
};

export default Events;
