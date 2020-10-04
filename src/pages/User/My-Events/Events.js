import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { EventBox } from './Events.style';
import EventsList from './EventsList';

const Events = () => {
	const loggedInUser = useSelector((state) => state.userInfo);
	const [ myEvents, setMyEvents ] = useState([]);

	useEffect(
		() => {
			fetch(`http://localhost:5005/my-events/${loggedInUser.email}`, {
				method  : 'GET',
				headers : {
					'Content-Type' : 'application/json'
				}
			})
				.then((response) => response.json())
				.then((result) => {
					setMyEvents(result);
				});
		},
		[ loggedInUser.email ]
	);

	const deleteEvent = (id) => {
		fetch(`http://localhost:5005/delete/${id}`, {
			method  : 'DELETE',
			headers : {
				'Content-Type' : 'application/json'
			}
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					const remaining = myEvents.filter((event) => event._id !== id);
					setMyEvents(remaining);
				}
			});
	};

	return (
		<EventBox className="event-box">
			<div className="container">
				<div className="row justify-content-center">
					{myEvents.map((event) => {
						return <EventsList key={event._id} event={event} deleteEvent={deleteEvent} />;
					})}
				</div>
			</div>
		</EventBox>
	);
};

export default Events;
