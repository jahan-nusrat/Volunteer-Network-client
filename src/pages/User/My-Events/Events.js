import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { EventBox } from './Events.style';
import EventsList from './EventsList';

const Events = () => {
	const loggedInUser = useSelector((state) => state.userInfo);
	const [ myEvents, setMyEvents ] = useState([]);

	useEffect(
		() => {
			fetch(`https://pure-plateau-94061.herokuapp.com/my-events/${loggedInUser.email}`, {
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
		fetch(`https://pure-plateau-94061.herokuapp.com/delete/${id}`, {
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
				{!loggedInUser.email ? (
					<div
						className="not-register mt-5 py-5"
						style={{ width: '700px', margin: 'auto', textAlign: 'center' }}
					>
						<h1>You are not logged in yet. First Login then Register for a event</h1>
					</div>
				) : (
					<div className="row justify-content-center">
						{myEvents.map((event) => {
							return <EventsList key={event._id} event={event} deleteEvent={deleteEvent} />;
						})}
					</div>
				)}
			</div>
		</EventBox>
	);
};

export default Events;
