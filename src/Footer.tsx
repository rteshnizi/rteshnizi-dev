import * as React from 'react';
// import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';
// import CenteredContainer from './Components/CenteredContainer';

export class Footer extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<footer>
				<p>
					Copyright © Reza Teshnizi, All rights reserved.
					Logos provided by <a href="https://clearbit.com" target="_blank" rel="noopener noreferrer" >Clearbit</a>
				</p>
			</footer>
		);
	}
}
