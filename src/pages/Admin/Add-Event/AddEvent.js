import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer } from './Event.style';

const AddEvent = () => {
	const colors = [ '#FFBD3E', '#FF7044', '#3F90FC', '#421FCF', '#DB5043' ];
	const images = [
		'https://i.ibb.co/n8fpVtP/child-Support.png',
		'https://i.ibb.co/yPLHZCj/refuse-Shelter.png',
		'https://i.ibb.co/0JGBVxV/food-Charity.png',
		'https://i.ibb.co/N6KShCf/cloth-Swap.png'
	];
	const [ addEvent, setAddEvent ] = useState({
		title       : '',
		img         : images[Math.floor(Math.random() * 4)],
		date        : new Date().toDateString('mm/dd/yyyy'),
		description : '',
		color       : colors[Math.floor(Math.random() * 5)]
	});

	const handleInput = (e) => {
		setAddEvent({
			...addEvent,
			[e.target.name]: e.target.value
		});
	};

	const history = useHistory();

	const handleForm = (e) => {
		e.preventDefault();
		fetch('https://pure-plateau-94061.herokuapp.com/addCategories', {
			method  : 'POST',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(addEvent)
		}).then((result) => {
			console.log(result);
		});
		history.push('/');
	};

	return (
		<FormContainer className="container">
			<div className="addEvent-title">
				<h3>Add Event</h3>
			</div>
			<hr />
			<form className="row py-3" onSubmit={handleForm}>
				<div className="form-group col-lg-5">
					<label htmlFor="name">Event Title</label>
					<input
						type="text"
						name="title"
						onChange={handleInput}
						value={addEvent.title}
						className="form-control"
						required
					/>
				</div>
				<div className="form-group col-lg-5">
					<label htmlFor="date">Event Date</label>
					<input
						type="date"
						name="date"
						onChange={handleInput}
						value={addEvent.date}
						className="form-control"
					/>
				</div>
				<div className="form-group col-lg-5">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						name="description"
						onChange={handleInput}
						value={addEvent.description}
						className="form-control"
					/>
				</div>
				<div className="form-group col-lg-5">
					<label htmlFor="banner">Banner</label>
					<br />
					<input type="file" name="img" className="banner" />
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</FormContainer>
	);
};

export default AddEvent;
