import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { ReactChild } from 'react';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

interface Props {
	children: ReactChild;
}

export function RTL({ children }: Props) {
	return <StylesProvider jss={jss}>{children}</StylesProvider>;
}
