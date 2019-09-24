import * as React from 'react';
// import * as Router from 'react-router-dom';
// import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';
import CenteredContainer from './Components/CenteredContainer';

const headerStyle: React.CSSProperties = {
	fontSize: "calc(10px + 2vmin)",
};

export class Home extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<header className="App-header">
				<CenteredContainer style={headerStyle}>
					<p> Reza Teshnizi </p>
					<p> Content will be added here! </p>
					<div>
						{/* <Router.Link to='/posts'>Posts</Router.Link> */}
					</div>
				</CenteredContainer>
			</header>
		);
	}
}
