import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
	palette: {
		type: 'dark',
	},
	overrides: {
		MuiLink: {
			root: {
				color: 'unset',
			},
		},
	},
});
