import React from 'react';
import './styles/Match.scss';
import { Match as Game} from "@/models/models";

export interface MatchInterface {}

const Match = ({ game }: { game: Game }) => {
	return (
	<div className='match'>
		<div className="match-teams">
			<div className="match-team">
				<img className='match-flag' src={game.homeFlag} /><span>{game.homeTeam}</span>
			</div>
				
			<div className="match-team">
			<span>{game.awayTeam}</span><img className='match-flag' src={game.awayFlag} />
			</div>
		</div>
		<button>Start Game</button>
	</div >);
};

export default Match;
