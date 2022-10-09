import React, { useState } from 'react';
import './styles/Match.scss';
import { Match as Game} from "@/models/models";
import { GameModal } from '@/components/GameModal';

export interface MatchInterface {}

const Match = ({ game }: { game: Game }) => {
	const [openPopup, setOpenPopup] = useState(false);
	const handleClick = () => {
		setOpenPopup(true);
	}

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
		<button onClick={() => setOpenPopup(true)}>Start Game</button>


		<GameModal openPopup={openPopup} setOpenPopup={setOpenPopup}></GameModal>
	</div >);
};

export default Match;
