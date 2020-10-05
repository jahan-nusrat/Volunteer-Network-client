import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Loading from '../../../components/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

let styles = {
	height    : '100vh',
	marginTop : '5rem'
};

const useStyles = makeStyles({
	table : {
		minWidth : 650
	},
	head  : {
		fontWeight : 'bold'
	}
});

const VolunteerList = () => {
	const classes = useStyles();
	const [ volunteers, setVolunteers ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		fetch('https://pure-plateau-94061.herokuapp.com/all-events').then((res) => res.json()).then((data) => {
			setIsLoading(false);
			setVolunteers(data);
		});
	}, []);

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
					const remaining = volunteers.filter((event) => event._id !== id);
					toast.info('Delete Register Person Successfully');
					setVolunteers(remaining);
				}
			})
			.catch((err) => {
				toast.error(err);
			});
	};

	return (
		<div>
			<div className="volunteer-title pt-3" style={{ textTransform: 'uppercase' }}>
				<h3>Volunteer Register List</h3>
			</div>
			<hr />
			{isLoading ? (
				<Loading styles={styles} />
			) : (
				<TableContainer
					component={Paper}
					style={{
						backgroundColor : 'transparent',
						marginTop       : '3rem',
						borderRadius    : '0px',
						boxShadow       : '0 0 0 0 transparent'
					}}
				>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell className={classes.head}>NAME</TableCell>
								<TableCell align="left" className={classes.head}>
									EMAIL ID
								</TableCell>
								<TableCell align="left" className={classes.head}>
									REGISTER DATE
								</TableCell>
								<TableCell align="left" className={classes.head}>
									VOLUNTEER LIST
								</TableCell>
								<TableCell align="left" className={classes.head}>
									ACTION
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{volunteers.map((event) => (
								<TableRow key={event._id}>
									<TableCell component="th" scope="row">
										{event.name}
									</TableCell>
									<TableCell align="left">{event.email}</TableCell>
									<TableCell align="left">{event.date}</TableCell>
									<TableCell align="left">{event.event}</TableCell>
									<TableCell align="center">
										<FaTrashAlt
											onClick={() => deleteEvent(event._id)}
											style={{ fontSize: '1.2rem', color: 'DD5145', cursor: 'pointer' }}
										/>
										<ToastContainer
											position="top-center"
											autoClose={2000}
											hideProgressBar={false}
											newestOnTop={false}
											closeOnClick
											rtl={false}
											pauseOnFocusLoss
											draggable
											pauseOnHover
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</div>
	);
};

export default VolunteerList;
