import * as React from 'react';
import * as Router from 'react-router-dom';
import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';

export class Home extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<div>
				<header className="App-header">
					<p> Reza Teshnizi </p>
					<p> Content will be added here! </p>
					<div>
						<Router.Link to='/guides'>Guides</Router.Link>
					</div>
				</header>
			</div>
		);
	}
}
