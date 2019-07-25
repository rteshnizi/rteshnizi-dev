import { Typography } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ComponentBase from '../Base/ComponentBase';
import CenteredContainer from './CenteredContainer';

type NoRouteMatchedProps = RouteComponentProps

export default class NoRouteMatched extends ComponentBase<NoRouteMatchedProps, {}> {
	public render(): React.ReactNode {
		return (
			<CenteredContainer>
				<Typography variant="h2"> 404 </Typography>
				<Typography variant="h4">The application is in an unknown state:</Typography>
				<code>{this.props.location.pathname}</code>
			</CenteredContainer>
		);
	}
}
