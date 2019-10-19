import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
	overrides: {
		MuiLink: {
			root: {
				color: 'unset',
			},
		},
	},
});
