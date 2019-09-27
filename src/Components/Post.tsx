import * as React from 'react';
import * as Mui from '@material-ui/core';
import ComponentBase from '../Base/ComponentBase';
import { MediumPost } from '../Services/edium';

interface PostProps {
	post: MediumPost;
}

export default class Post extends ComponentBase<PostProps> {
	public constructor(props: PostProps) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<Mui.GridListTile>
			<img src={tile.img} alt={tile.title} />
			<GridListTileBar
			title={tile.title}
			subtitle={<span>by: {tile.author}</span>}
			actionIcon={
				<IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
				<InfoIcon />
				</IconButton>
			}
			/>
			</Mui.GridListTile>
		);
	}
}
