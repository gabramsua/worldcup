import { FinalizedMatch } from '@/models/models';
import './styles/SummaryItem.scss';

export interface SummaryItemInterface {}

const SummaryItem = ({ finalizedMatch }: { finalizedMatch: FinalizedMatch }) => {
	return <>
	
	<div className='summary-item'>
		<span>
			{finalizedMatch.match.homeTeam} {finalizedMatch.homeScore} - {finalizedMatch.awayScore} {finalizedMatch.match.awayTeam}
		</span>
	</div>
	</>;
};

export default SummaryItem;
