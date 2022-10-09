import React from 'react';
import { data } from '@/data/data';
import { Match } from '../Match';

export interface ScoreboardInterface {}

const Scoreboard : React.FC<ScoreboardInterface> = () => {
	return <>
		<h1>Scoreboard</h1>
		{data.map((match => (
			<Match />
		))) }
		</>;
};

export default Scoreboard;
