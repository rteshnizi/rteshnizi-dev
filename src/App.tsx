import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { Home } from './Home';
import ComponentBase from './Base/ComponentBase';
import Theme from './Base/Theme';
import Posts from './Posts';
// import { SideNav } from './SideNav';

interface AppState {
	MenuIsOpen: boolean;
}

export default class App extends ComponentBase<{}, AppState> {
	public constructor(props: {}) {
		super(props);
		this.state = {
			MenuIsOpen: false,
		};
	}

	public render(): JSX.Element {
		return (
			<div style={{ display: "flex" }}>
				<MuiThemeProvider theme={Theme}>
					<CssBaseline />
					{/* <SideNav /> */}
					<main style={{ flexGrow: 1 }}>
						<Home />
						<Posts />
					</main>
				</MuiThemeProvider>
			</div>
		);
	}
}
