import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import * as Router from 'react-router-dom';
import { Home } from './Home';
import ComponentBase from './Base/ComponentBase';
import Theme from './Base/Theme';
import NoRouteMatched from './Components/NoRouteMatched';
import { Guides } from './Guides';

interface AppState {
	MenuIsOpen: boolean;
}

class App extends ComponentBase<Router.RouteComponentProps, AppState> {
	public constructor(props: Router.RouteComponentProps) {
		super(props);
		this.state = {
			MenuIsOpen: false,
		};
	}

	public render(): JSX.Element {
		return (
			<div className="App">
				<MuiThemeProvider theme={Theme}>
					<CssBaseline />
					<Router.Switch>
						<Router.Route exact={true} path="/" component={Home} />
						<Router.Route exact={true} path="/guides" component={Guides} />
						<Router.Route component={NoRouteMatched} />
					</Router.Switch>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default Router.withRouter(App);
