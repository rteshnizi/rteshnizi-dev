import * as React from 'react';
import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';

export class Guides extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<div>
				<header className="App-header">
					<p> X11 Windows to Ubuntu </p>
					<div>
						{/* <Mui.IconButton></Mui.IconButton> */}
					</div>
				</header>
			</div>
		);
	}
}
