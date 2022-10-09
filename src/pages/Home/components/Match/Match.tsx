import React from 'react';
import './styles/Match.scss';
import { Match as Game} from "@/models/models";

export interface MatchInterface {}

const Match = ({ game }: { game: Game }) => {
	return <div className='match'>
		{game.homeTeam} - {game.awayTeam}
	</div >;
};

export default Match;
