import * as React from 'react';
import ComponentBase from '../Base/ComponentBase';
import { Medium, MediumPost } from '../Services/Medium';
import Post from '../Components/Post';
import LinkContainer from '../Components/LinkContainer';

export interface PostsState {
	loaded: boolean;
	posts: MediumPost[];
}

export default class Posts extends ComponentBase<Record<string, never>, PostsState> {
	public constructor(props: Record<string, never>) {
		super(props);
		this.state = {
			loaded: false,
			posts: [],
		};
	}

	public componentDidMount(): void {
		Medium.updatePosts()
			.then(() => {
				this.setState({ loaded: true, posts: Medium.posts });
			})
			.catch(() => {
				this.setState({ loaded: true });
			});
	}

	public render(): React.ReactNode {
		return (
			<LinkContainer loading={!this.state.loaded} title={"Blog Posts"}>
				{this.state.posts.map((post) => (<Post key={post.url} post={post} />))}
			</LinkContainer>
		);
	}
}
