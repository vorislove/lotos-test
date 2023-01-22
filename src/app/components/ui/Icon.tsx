import React, { FC } from 'react';

interface IIcon {
	name: string;
	style?: any;
}

const Icon: FC<IIcon> = ({ name, style }) => {
	return <i className={`icon ti ti-${name} d-inline position-relative`} style={style}></i>;
};

export default Icon;
