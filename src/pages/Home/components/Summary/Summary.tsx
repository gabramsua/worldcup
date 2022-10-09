import React from 'react';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { FinalizedMatch } from '@/models/models';

export interface SummaryInterface {}

const Summary : React.FC<SummaryInterface> = () => {
	const stateResults = useSelector((store: AppStore) => store.results);
	
	return <>
		<h1>Summary</h1>

		{[...stateResults].sort((a, b) => b.goals - a.goals).map(((match: FinalizedMatch) => (
			<span key={match.match.id}>
				{match.match.homeTeam}{match.homeScore}-{match.awayScore}{match.match.awayTeam}
			</span>
		)))}

	</>;
};

export default Summary;
