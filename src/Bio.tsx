import * as React from 'react';
import * as Mui from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ComponentBase from './Base/ComponentBase';
import ProfilePic from './assets/profile-pic-2.jpeg';

const styles = {
	avatar: {
		height: 200,
		width: 200,
	} as React.CSSProperties,
	links: {
		textDecoration: 'unset',
	} as React.CSSProperties,
};

export class Bio extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<header>
				<Mui.Card>
					<Mui.CardHeader
						title={
							<Mui.Typography variant="h4">
								Reza Teshnizi
							</Mui.Typography>
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
								<Mui.CardMedia image={ProfilePic} title="Me and my dog, Ashk" style={styles.avatar} />
							</Mui.Card>
						}
					/>
					<Mui.CardContent>
						<Mui.Grid container={true} spacing={3}>
							<Mui.Grid item={true}>
								<a href="https://www.linkedin.com/in/rteshnizi/" target="_blank" rel="noopener noreferrer" style={styles.links}>
									<FontAwesomeIcon title="Linkedin Profile" icon={faLinkedin} size="lg" />
								</a>
							</Mui.Grid>
							<Mui.Grid item={true}>
								<a href="https://scholar.google.com/citations?user=s10QCcoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon title="Google Scholar Profile" icon={faGraduationCap} size="lg" />
								</a>
							</Mui.Grid>
						</Mui.Grid>
					</Mui.CardContent>
				</Mui.Card>
			</header>
		);
	}
}
