import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { Bio } from './Bio';
import ComponentBase from './Base/ComponentBase';
import Theme from './Base/Theme';
import Posts from './Posts';
import { Footer } from './Footer';
import { Description } from './Description';
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
			<MuiThemeProvider theme={Theme}>
				<CssBaseline />
				<div style={{ display: "flex" }}>
					{/* <SideNav /> */}
					<main style={{ flexGrow: 1 }}>
						<Bio />
						<Description />
						<Posts />
					</main>
				</div>
				<Footer />
			</MuiThemeProvider>
		);
	}
}
