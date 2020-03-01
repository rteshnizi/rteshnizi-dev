import * as React from 'react';
import ComponentBase from '../Base/ComponentBase';
import { Title } from './Title';
import { Links } from './Links';
import { Description } from './Description';

interface State {
	emailAnchor: HTMLAnchorElement | null;
}

export class Bio extends ComponentBase<{}, State> {
	public constructor(props: {}) {
		super(props);
		this.state = {
			emailAnchor: null,
		};
	}

	public render(): JSX.Element {
		return (
			<header>
				<Title />
				<Links />
				<Description />
			</header>
		);
	}
}
