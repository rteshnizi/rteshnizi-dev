import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
	palette: {
		type: 'light',
	},
	overrides: {
		MuiLink: {
			root: {
				color: 'unset',
			},
		},
	},
});
