import React, { useEffect } from 'react';
import { Scoreboard } from '@/pages/Home/components/Scoreboard';
import { Summary } from '@/pages/Home/components/Summary';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './styles/Home.scss';
import { addMatch } from '@/redux/states';
import { useDispatch } from 'react-redux';
import { data } from '@/data/data';

export interface HomeInterface {}
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const Home : React.FC<HomeInterface> = () => {
	const dispatch = useDispatch();

	// Get list of matches and store them into Redux
	useEffect(() => {
		dispatch(addMatch(data));
	  }, []);

	return (
		<Box sx={{ flexGrow: 1 }} className="home">
			<Grid container className="grid-container" spacing={2}>
				<Grid xs={6}>
					<Item>
						<Scoreboard />	
					</Item>
				</Grid>
				<Grid xs={6}>
					<Item>
						<Summary />	
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
