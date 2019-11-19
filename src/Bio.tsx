import * as React from 'react';
import * as Mui from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ComponentBase from './Base/ComponentBase';
import ProfilePic from './assets/profile-pic-2.jpeg';
import Theme from './Base/Theme';
import IconLink from './Components/IconLink';

const styles = {
	links: {
		textDecoration: 'unset',
		cursor: 'pointer',
	} as React.CSSProperties,
	popoverPaper: {
		padding: Theme.spacing(2),
	} as React.CSSProperties,
};

interface State {
	emailAnchor: HTMLAnchorElement | null;
}

export class Bio extends ComponentBase<{}, State> {
	public constructor(props: {}) {
		super(props);
		this.state = {
			emailAnchor: null,
		};
	}

	private hideEmail(): void {
		this.setState({ emailAnchor: null });
	}

	private showEmail(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
		this.setState({ emailAnchor: event.currentTarget });
	}

	private getEmail(): string {
		return "moc.liamg@izinhset.azer";
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
					<Mui.CardContent>
						<Mui.Grid container={true} spacing={3}>
							<Mui.Popover
								open={!!this.state.emailAnchor}
								onClose={this.hideEmail}
								anchorEl={this.state.emailAnchor}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
								PaperProps={{
									style: styles.popoverPaper,
								}}
							>
								<Mui.Typography className="secret-stuff">
									{this.getEmail()}
								</Mui.Typography>
							</Mui.Popover>
							<Mui.Grid item={true}>
								<IconLink
									icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}
									label="Email"
									onClick={this.showEmail}
								/>
							</Mui.Grid>
							<Mui.Grid item={true}>
								<IconLink
									icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" />}
									label="Google Scholar Profile"
									url="https://scholar.google.com/citations?user=s10QCcoAAAAJ&hl=en"
								/>
							</Mui.Grid>
							<Mui.Grid item={true}>
								<IconLink
									icon={<FontAwesomeIcon icon={faLinkedin} size="lg" />}
									label="Linkedin Profile"
									url="https://www.linkedin.com/in/rteshnizi/"
								/>
							</Mui.Grid>
							<Mui.Grid item={true}>
								<IconLink
									icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
									label="Github Profile"
									url="https://github.com/rteshnizi"
								/>
							</Mui.Grid>
						</Mui.Grid>
					</Mui.CardContent>
				</Mui.Card>
			</header>
		);
	}
}
