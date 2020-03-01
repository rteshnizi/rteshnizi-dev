import * as React from 'react';
import * as Mui from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ComponentBase from '../Base/ComponentBase';
import Theme from '../Base/Theme';
import IconLink from '../Components/IconLink';

const styles = {
	links: {
		textDecoration: 'unset',
		cursor: 'pointer',
	} as React.CSSProperties,
	popoverPaper: {
		padding: Theme.MuiTheme.spacing(2),
	} as React.CSSProperties,
};

interface State {
	emailAnchor: HTMLAnchorElement | null;
}

export class Links extends ComponentBase<{}, State> {
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
									url="https://scholar.google.com/citations?user=s10QCcoAAAAJ"
								/>
							</Mui.Grid>
							<Mui.Grid item={true}>
								<IconLink
									icon={<Mui.Avatar src="https://logo.clearbit.com/ieee.org?greyscale=true" style={{ width: 30, height: 30 }} />}
									label="IEEE Xplore Profile"
									url="https://ieeexplore.ieee.org/author/37085347277"
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
