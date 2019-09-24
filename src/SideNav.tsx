import * as React from 'react';
// import * as Router from 'react-router-dom';
import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';

export class SideNav extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<nav aria-label="mailbox folders">
				<Mui.Drawer variant="permanent">
					Yes
				</Mui.Drawer>
			</nav>
		);
	}
}
