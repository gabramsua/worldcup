import React from 'react';
import './styles/Match.scss';
import { Match as Game} from "@/models/models";

export interface MatchInterface {}

const Match = ({ game }: { game: Game }) => {
	return (
	<div className='match'>
		<div className="match-team">
			<img className='match-flag' src={game.homeFlag} /><span>{game.homeTeam}</span>
		</div>
			
		<div className="match-team">
			<img className='match-flag' src={game.awayFlag} /><span>{game.awayTeam}</span>
		</div>
		<button>PLAY</button>
	</div >);
};

export default Match;
