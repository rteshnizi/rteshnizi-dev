import * as React from 'react';
import { kebabCase } from 'lodash';
// import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';
import Guides from './Posts/Guides';
import Post from './Components/Post';

export class Posts extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<div>
				{
					Guides.map((data) => <Post key={kebabCase(data.title)} data={data} />)
				}
			</div>
		);
	}
}
