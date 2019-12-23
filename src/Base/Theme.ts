import { createMuiTheme } from '@material-ui/core';
import TimeService from '../Services/Time';

export default createMuiTheme({
	palette: {
		type: TimeService.isDay ? 'light' : 'dark',
	},
	overrides: {
		MuiLink: {
			root: {
				color: 'unset',
			},
		},
	},
});
