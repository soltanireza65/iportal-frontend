import { createTheme } from '@material-ui/core';

export const theme = createTheme({
	direction: 'rtl',
	typography: {
		fontFamily: 'IRANSans'
	},
	overrides: {
		MuiButton: {
			root: {
				borderRadius: 20
			}
		},
		MuiOutlinedInput: {
			root: {
				borderRadius: 999,
				'& input::placeholder': {
					color: '#6b6b6b',
					fontSize: '16px',
					opacity: 1
				}
			}
		}
	}
});
