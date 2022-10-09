import React from 'react';
import './styles/GameModal.scss';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export interface GameModalInterface {}

const GameModal = (props: any) => {
	const { title, children, openPopup, setOpenPopup } = props;
	return (
		<Dialog open={openPopup}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent dividers>{children}</DialogContent>
		</Dialog>
	);
};

export default GameModal;
