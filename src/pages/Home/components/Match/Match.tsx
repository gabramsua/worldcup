import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { finishGame } from '@/redux/states';
import './styles/Match.scss';
import { Match as Game} from "@/models/models";
import { GameModal } from '@/components/GameModal';

export interface MatchInterface {}

const Match = ({ game }: { game: Game }) => {
	const [openPopup, setOpenPopup] = useState(false);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(finishGame(game))

		setOpenPopup(false)
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



		<GameModal 
			openPopup={openPopup} 
			setOpenPopup={setOpenPopup}
			title="Ongoing Game"
		>
			
			<img className='match-flag' src={game.homeFlag} /><span>{game.homeTeam}</span>
		<button onClick={handleClose}>End of Game</button>
		</GameModal>
	</div >);
	//TODO: Template Modal
};

export default Match;
