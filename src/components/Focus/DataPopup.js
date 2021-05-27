import React, { useState } from 'react';
import './styles/DataPopup.scss';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';

function DataPopup({ session, open, handleClose }) {
	const studies = useSelector((state) => state.studyData.studies);
	const study_times = useSelector((state) => state.studyData.study_times);
	const short_breaks = useSelector((state) => state.studyData.short_breaks_taken);
	const long_breaks = useSelector((state) => state.studyData.long_breaks_taken);
	const session_times = useSelector((state) => state.studyData.session_times);

	return (
		<Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
			<Box className='container'>
				<Grid container justify='space-between' alignItems='baseline'>
					<Typography variant='h4' gutterBottom>
						Your Data
					</Typography>
					<IconButton aria-label='close' onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</Grid>
				<div>
					<Typography gutterBottom>Number of Pomodoro Sessions: {studies}</Typography>
					<Typography gutterBottom>Number of Short Breaks: {short_breaks}</Typography>
					<Typography gutterBottom>Number of Long Breaks: {long_breaks} </Typography>
					<Typography gutterBottom>
						Current Study Session Time: <span>{('0' + Math.floor((session.currentTime / (1000 * 60 * 60)) % 24)).slice(-2)}</span>:<span>{('0' + Math.floor((session.currentTime / 60000) % 60)).slice(-2)}</span>:<span>{('0' + Math.floor((session.currentTime / 1000) % 60)).slice(-2)}</span>
					</Typography>
					<Typography variant='h6' gutterBottom>
						Your Pomodoro Sessions:
						<ul>
							{study_times.map((time, id) => (
								<li key={id}>
									start: {time.start.hours}:{time.start.minutes}:{time.start.seconds}, end: {time.end.hours}:{time.end.minutes}:{time.end.seconds}
								</li>
							))}
						</ul>
					</Typography>
				</div>
				<Button autoFocus onClick={handleClose} color='primary'>
					Data Page
				</Button>
			</Box>
		</Dialog>
	);
}

export default DataPopup;
