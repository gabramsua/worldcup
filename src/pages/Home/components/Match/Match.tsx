import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { finishGame } from '@/redux/states';
import './styles/Match.scss';
import { Match as Game} from "@/models/models";
import { GameModal } from '@/components/GameModal';
import Button from '@mui/material/Button';

export interface MatchInterface {}

const Match = ({ game }: { game: Game }) => {
	const [openPopup, setOpenPopup] = useState(false);
	const [homeScore, setHomeScore] = useState(0);
	const [awayScore, setAwayScore] = useState(0);
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
		<Button variant="outlined" onClick={() => setOpenPopup(true)}>Start Game</Button>



		<GameModal 
			openPopup={openPopup} 
			setOpenPopup={setOpenPopup}
			title={`${game.homeTeam} - ${game.awayTeam}`}
		>
			<div className="container-modal">
					<img className='match-flag' src={game.homeFlag} />
					<span>{homeScore}</span>-<span>{awayScore}</span>
					<img className='match-flag' src={game.awayFlag} />
			</div>
			<div className="container-modal">
				<Button variant="outlined" className="button-goal" onClick={() => {setHomeScore(homeScore+1)} }>Goal</Button>
				<Button variant="outlined" className="button-goal" onClick={() => {setAwayScore(awayScore+1)} }>Goal</Button>
			</div>

		<Button variant="contained" className="button-endgame" onClick={handleClose}>End of Game</Button>
		</GameModal>
	</div >);
};

export default Match;
