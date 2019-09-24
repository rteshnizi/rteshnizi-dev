import * as React from 'react';
import * as Router from 'react-router-dom';
// import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';

class Posts extends ComponentBase<Router.RouteComponentProps> {
	public constructor(props: Router.RouteComponentProps) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<div>
				Hello
			</div>
		);
	}
}

export default Router.withRouter(Posts);
