import * as React from 'react';
// import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';

export default class Posts extends ComponentBase<{}> {
	public constructor(props: {}) {
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
