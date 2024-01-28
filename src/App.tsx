import * as Mui from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import { CSSProperties as MuiCssProps } from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { Bio } from './UI/Bio';
import ComponentBase from './Base/ComponentBase';
import Theme from './Base/Theme';
import Posts from './UI/Posts';
import { Footer } from './UI/Footer';
import Publications from './UI/Publications';
// import { SideNav } from './SideNav';

interface AppState {
	MenuIsOpen: boolean;
}

// const styles = (theme: Mui.Theme): Record<never, MuiCssProps | (() => MuiCssProps)> => Mui.createStyles(
// 	{

// 	}
// );

// type AppProps = Mui.WithStyles<typeof styles>;
type AppProps = Record<string, never>;

class App extends ComponentBase<AppProps, AppState> {
	public constructor(props: AppProps) {
		super(props);
		this.state = {
			MenuIsOpen: false,
		};
	}

	public render(): JSX.Element {
		return (
			<MuiThemeProvider theme={Theme.MuiTheme}>
				<Mui.CssBaseline />
				{/* <SideNav /> */}
				<main>
					<Bio />
					<Mui.Grid container={true} style={{ flexGrow: 1 }}>
						<Mui.Grid item={true} xs={1}>&nbsp;</Mui.Grid>
						<Mui.Grid item={true} xs={10}>
							<Mui.Grid container={true} spacing={3}>
								<Mui.Grid item={true} xs={12} sm={6}>
									<Publications />
								</Mui.Grid>
								<Mui.Grid item={true} xs={12} sm={6}>
									<Posts />
								</Mui.Grid>
							</Mui.Grid>
						</Mui.Grid>
						<Mui.Grid item={true} xs={1}>&nbsp;</Mui.Grid>
					</Mui.Grid>
					<Footer />
				</main>
			</MuiThemeProvider>
		);
	}
}

export default App;
// export default Mui.withStyles(styles)(App);
