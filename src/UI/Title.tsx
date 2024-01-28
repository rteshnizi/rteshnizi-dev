import * as React from 'react';
import * as Mui from '@material-ui/core';
import ComponentBase from '../Base/ComponentBase';
import ProfilePic from '../assets/profile-pic-2.jpeg';

interface State {
	emailAnchor: HTMLAnchorElement | null;
}

export class Title extends ComponentBase<Record<string, never>, State> {
	public constructor(props: Record<string, never>) {
		super(props);
		this.state = {
			emailAnchor: null,
		};
	}

	public render(): JSX.Element {
		return (
			<header>
				<Mui.Card>
					<Mui.CardHeader
						title={
							<div className="name">
								Reza Teshnizi
							</div>
						}
						subheader={
							<div>
								<div>Dog Dad</div>
								<div>PhD Candidate @ Texas A&amp;M University</div>
								<div>Robotics and AI Researcher</div>
								<div>Senior Software Engineer and Manager</div>
							</div>
						}
						avatar={
							<Mui.Card>
								<Mui.CardMedia image={ProfilePic} title="Me and my dog, Ashk" className="avatar" />
							</Mui.Card>
						}
					/>
				</Mui.Card>
			</header>
		);
	}
}
