import * as Mui from '@material-ui/core';
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
				<Mui.CssBaseline />
				{/* <SideNav /> */}
				<main>
					<Bio />
					<Mui.Grid container={true} style={{ flexGrow: 1 }}>
						<Mui.Grid item={true} xs={1}>&nbsp;</Mui.Grid>
						<Mui.Grid item={true} xs={10}>
							<Description />
							<Posts />
						</Mui.Grid>
						<Mui.Grid item={true} xs={1}>&nbsp;</Mui.Grid>
					</Mui.Grid>
					<Footer />
				</main>
			</MuiThemeProvider>
		);
	}
}
