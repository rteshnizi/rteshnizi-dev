import * as React from 'react';
import ComponentBase from './Base/ComponentBase';

export class Description extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<p>
				More Content to be added. For now, please follow me on Medium.
			</p>
		);
	}
}
