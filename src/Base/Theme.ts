import { createTheme } from '@material-ui/core/styles';
import * as React from "react";
import TimeService from '../Services/Time';

const theme = {
	MuiTheme: createTheme({
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
	}),
	Colors: {
		unimportantText: TimeService.isDay ? "grey" : "lightgrey" as React.CSSProperties["color"],
	},
};

export default theme;
