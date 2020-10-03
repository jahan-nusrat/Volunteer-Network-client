import React from 'react';
import Hero from '../../../components/Hero/Hero';
import NavBar from '../../../components/Nav/NavBar';
import { MainComponent } from './Home.style';
import bg from '../../../Images/bg.jpg';
import ServiceList from '../../../components/Services-List/ServiceList';

const Home = () => {
	return (
		<MainComponent>
			<header>
				<img src={bg} alt="bg" className="img-fluid bg" />
				<NavBar />
				<Hero />
			</header>
			<ServiceList />
		</MainComponent>
	);
};

export default Home;
