import React from 'react';
import ComponentBase from '../Base/ComponentBase';
import { kebabCase } from 'lodash';

export interface PostContents {
	title: string;
	date: Date;
	/** Whether to not display this post */
	hide?: boolean;
	filename: string;
	content: () => React.ReactNode;
}

interface PostProps {
	data: PostContents;
}

export default class Post extends ComponentBase<PostProps, {}> {
	public render(): React.ReactNode {
		const { data } = this.props;
		return data.hide ? null : <div id={kebabCase(data.title)}> {data.content()} </div>;
	}
}
