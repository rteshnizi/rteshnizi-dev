import * as React from 'react';
import * as Mui from '@material-ui/core';
import { BindMemberMethods } from '../utils/react';

export class Home extends React.Component {
	constructor(props: {}) {
		super(props);
		BindMemberMethods(Home.prototype, this);
	}

	render() {
		return (
			<div>
				<header className="App-header">
					<p> Reza Teshnizi </p>
					<p> Content will be added here! </p>
					<div>
						<Mui.IconButton></Mui.Button>
					</div>
				</header>
			</div>
		);
	}
}