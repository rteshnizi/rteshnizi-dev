import * as React from 'react';
import ComponentBase from './Base/ComponentBase';

export class Footer extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<footer>
				<p>
					Copyright &copy; Reza Teshnizi, All rights reserved.
					Logos provided by <a href="https://clearbit.com" target="_blank" rel="noopener noreferrer" >Clearbit</a>
				</p>
			</footer>
		);
	}
}
