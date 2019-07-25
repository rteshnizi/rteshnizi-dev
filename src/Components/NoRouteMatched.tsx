import { Typography } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ComponentBase from '../Base/ComponentBase';

type NoRouteMatchedProps = RouteComponentProps

export default class NoRouteMatched extends ComponentBase<NoRouteMatchedProps, {}> {
	public render(): React.ReactNode {
		return (
			<div style={{
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}>
				<Typography variant="h2"> 404 </Typography>
				<Typography variant="h4">The application is in an unknown state:</Typography>
				<code>{this.props.location.pathname}</code>
			</div>
		);
	}
}
