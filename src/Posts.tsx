import * as React from 'react';
import * as Mui from '@material-ui/core';
// @ts-ignore
import LoadingOverlay from 'react-loading-overlay';
import ComponentBase from './Base/ComponentBase';
import { Medium, MediumPost } from './Services/Medium';
import Post from './Components/Post';

const styles = {
	div: {
		margin: '1vh 2vw',
	} as React.CSSProperties,
};

export interface PostsState {
	loaded: boolean;
	posts: MediumPost[];
}

export default class Posts extends ComponentBase<{}, PostsState> {
	public constructor(props: {}) {
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
			<LoadingOverlay active={!this.state.loaded} spinner={true}>
				<div style={styles.div}>
					<Mui.Typography variant="subtitle1">
						Medium Posts
					</Mui.Typography>
				</div>
				<Mui.Grid container={true}>
					{this.state.posts.map((post) => (<Post key={post.url} post={post} />))}
				</Mui.Grid>
			</LoadingOverlay>
		);
	}
}
