import * as React from 'react';
import ComponentBase from '../Base/ComponentBase';
import { Link, Dialog, DialogTitle, DialogContent, DialogContentText, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
	link: { color: 'unset', textDecoration: 'underline', cursor: 'pointer' } as React.CSSProperties,
	closeButton: { position: 'absolute', right: 8 } as React.CSSProperties,
};

interface State {
	googleAnalyticsNode: React.ReactNode;
	showGADialog: boolean;
}

export class Footer extends ComponentBase<{}, State> {
	public constructor(props: {}) {
		super(props);
		this.state = {
			googleAnalyticsNode: null,
			showGADialog: false,
		};
		this.checkGoogleAnalytics();
	}

	private checkGoogleAnalytics(): void {
		setTimeout(() => {
			if (!gaLoaded) {
				console.warn("Google was yeeted!");
				return;
			}
			const googleAnalyticsNode = <Link style={styles.link} onClick={() => { this.setShowGaDialog(true); }}>&nbsp;I use Google Analytics.</Link>;
			this.setState({ googleAnalyticsNode });
		}, 1500);
	}

	private setShowGaDialog(val: boolean): void {
		this.setState({ showGADialog: val });
	}

	public render(): JSX.Element {
		return (
			<footer>
				<Dialog onClose={() => { this.setShowGaDialog(false); }} open={this.state.showGADialog}>
					<DialogTitle>
						&nbsp;
						<IconButton style={styles.closeButton} aria-label="close" onClick={() => { this.setShowGaDialog(false); }}>
							<CloseIcon />
						</IconButton>
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							I use Google Analytics on this page just for my own curiosity.
							I will not share any data with any entity and I have set my&nbsp;
							<a href="https://support.google.com/analytics/answer/1011397?hl=en" target="_blank" rel="noopener noreferrer">data sharing settings</a>&nbsp;
							to not share data with Google or its third-party entities.
							If you are not comfortable with this, I recommend using Firefox browser as it provides&nbsp;
							<a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?as=u&amp;utm_source=inproduct" target="_blank" rel="noopener noreferrer">tracking protection</a>.
							You may additionally use an ad blocker for further protection.
							I recommend&nbsp;
							<a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/" target="_blank" rel="noopener noreferrer">uBlock Origin</a>&nbsp;
							as it is available for Firefox on both Desktop and Android Phones.
						</DialogContentText>
					</DialogContent>
				</Dialog>
				<p>
					Copyright &copy; 2019 Reza Teshnizi, All rights reserved.
					Logos provided by <a href="https://clearbit.com" target="_blank" rel="noopener noreferrer">Clearbit</a>.
					I encourage using <a href="https://firefox.com" target="_blank" rel="noopener noreferrer">Firefox</a> as your main browser.
					{this.state.googleAnalyticsNode}
				</p>
			</footer>
		);
	}
}
