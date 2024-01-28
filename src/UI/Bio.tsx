import * as React from 'react';
import ComponentBase from '../Base/ComponentBase';
import { Title } from './Title';
import { Links } from './Links';
import { Description } from './Description';

interface State {
	emailAnchor: HTMLAnchorElement | null;
}

export class Bio extends ComponentBase<Record<string, never>, State> {
	public constructor(props: Record<string, never>) {
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
