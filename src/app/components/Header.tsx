import React, { FC } from 'react';

export const Header: FC<{ titel: string }> = ({ titel }) => {
	return (
		<div className="py-4 border-bottom border-2">
			<span className="fs-2 text-danger mx-4">{titel}</span>
		</div>
	);
};
