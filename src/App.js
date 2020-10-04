import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import Admin from './pages/Admin/Admin';
import Home from './pages/User/Home/Home';
import Login from './pages/User/Login/Login';
import Events from './pages/User/My-Events/Events';
import Register from './pages/User/Volunteer-Register/Register';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register/:id">
					<Register />
				</Route>
				<Route path="/events">
					<NavBar />
					<Events />
				</Route>
				<Route path="/adminPanel">
					<Admin />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
