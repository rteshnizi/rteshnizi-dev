import * as Mui from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import React from 'react';
import ComponentBase from '../Base/ComponentBase';
import Theme from '../Base/Theme';
import PublicationData from '../DataStrcutures/PublicationData';

const MY_LNAME = "TESHNIZI";

interface Props {
	texKey: string;
	publicationData: PublicationData;
}

interface State {
	showDetails: boolean;
}

const styles = {
	div: {
		padding: '1vh 2vw',
		display: 'flex',
	} as React.CSSProperties,
	spacedText: {
		padding: '0px 5px',
	} as React.CSSProperties,
	acceptanceRate: {
		color: Theme.Colors.unimportantText,
	} as React.CSSProperties,
	closeButton: {
		position: 'absolute',
		right: Theme.MuiTheme.spacing(1),
		top: Theme.MuiTheme.spacing(1),
		color: Theme.MuiTheme.palette.grey[500],
	} as React.CSSProperties,
	appBar:{
		position: "relative",
	} as React.CSSProperties,
	pdf: {
		height: "100%",
	} as React.CSSProperties,
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
	return <Mui.Slide direction="up" ref={ref} {...props} />;
});

export class Publication extends ComponentBase<Props, State> {
	public constructor(props: Props) {
		super(props);
		this.state = {
			showDetails: false,
		};
	}

	private closeModal(): void {
		this.setState({ showDetails: false });
	}

	private openModal(): void {
		this.setState({ showDetails: true });
	}

	public render(): React.ReactNode {
		return (
			<Mui.Grid item={true} xs={12}>
				<Mui.Paper>
					<Mui.Link href="#" style={{ color: 'unset', textDecoration: 'unset' }} onClick={this.openModal}>
						<div style={styles.div}>
							<div>
								<Mui.Typography variant="subtitle2" component="span">
									{
										this.props.publicationData.authors.map((author, ind) => {
											if (author.lName.toUpperCase() === MY_LNAME) {
												return <b key={ind} style={styles.spacedText}>{author.fName} {author.lName}</b>;
											}
											return <span key={ind} style={styles.spacedText}>{author.fName} {author.lName}</span>;
										})
									}
									<b style={styles.spacedText}>{"\""}{this.props.publicationData.title}{"\""}</b>
									{this.props.publicationData.venue ? <span style={styles.spacedText}>{this.props.publicationData.venue}</span> : null}
								</Mui.Typography>
								<span style={styles.spacedText}>{this.props.publicationData.date.format("MMM YYYY")}</span>
								{
									this.props.publicationData.acceptance ?
										<Mui.Typography variant="caption" component="span" style={{ ...styles.spacedText, ...styles.acceptanceRate }}>
											[Acceptance Rate: {this.props.publicationData.acceptance}%]
										</Mui.Typography>
										:
										null
								}
							</div>
						</div>
					</Mui.Link>
				</Mui.Paper>
				<Mui.Dialog
					fullScreen={true}
					open={this.state.showDetails}
					onClose={this.closeModal}
					TransitionComponent={Transition}
				>
					<Mui.AppBar style={styles.appBar}>
						<Mui.Toolbar>
							<Mui.IconButton edge="start" color="inherit" onClick={this.closeModal} aria-label="close"><CloseIcon /></Mui.IconButton>
							<Mui.Typography variant="h6">{this.props.publicationData.title}</Mui.Typography>
						</Mui.Toolbar>
					</Mui.AppBar>
					<object data={this.props.publicationData.file} type="application/pdf" style={styles.pdf}>
						<embed src={this.props.publicationData.file} type="application/pdf" />
					</object>
				</Mui.Dialog>
			</Mui.Grid>
		);
	}
}
