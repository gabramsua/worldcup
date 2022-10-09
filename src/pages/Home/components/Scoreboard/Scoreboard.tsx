import { AppStore } from '@/redux/store';
import React from 'react';
import { Match } from '../Match';
import { useSelector } from 'react-redux';

export interface ScoreboardInterface {}

const Scoreboard : React.FC<ScoreboardInterface> = () => {
	const stateMatches = useSelector((store: AppStore) => store.matches);
	
	return <>
		<h1>Scoreboard</h1>
		{stateMatches.map((match => (
			<Match key={match.id} game={match} />
		))) }
		</>;
};

export default Scoreboard;
