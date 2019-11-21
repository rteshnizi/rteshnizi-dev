import * as React from 'react';
import * as Mui from '@material-ui/core';
import ComponentBase from '../Base/ComponentBase';
import { MediumPost } from '../Services/Medium';

const styles = {
	avatar: {
		margin: '0 1vw',
	} as React.CSSProperties,
	div: {
		padding: '1vh 2vw',
		display: 'flex',
	} as React.CSSProperties,
};

interface PostProps {
	post: MediumPost;
}

export default class Post extends ComponentBase<PostProps> {
	public constructor(props: PostProps) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<Mui.Grid item={true} xs={12}>
				<Mui.Paper>
					<Mui.Link href={this.props.post.url} target="_blank" rel="noopener" style={{ color: 'unset', textDecoration: 'unset' }}>
						<div style={styles.div}>
							<Mui.Avatar src="https://logo.clearbit.com/medium.com" style={styles.avatar} title="Medium.com" />
							<div>
								<Mui.Typography variant="subtitle2">{this.props.post.title}</Mui.Typography>
								<Mui.Typography variant="caption">{this.props.post.date.toLocaleString()}</Mui.Typography>
							</div>
						</div>
					</Mui.Link>
				</Mui.Paper>
			</Mui.Grid>
		);
	}
}
