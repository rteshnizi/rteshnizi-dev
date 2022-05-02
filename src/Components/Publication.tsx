import * as Mui from '@material-ui/core';
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

export class Publication extends ComponentBase<Props, State> {
	public constructor(props: Props) {
		super(props);
		this.state = {
			showDetails: false,
		};
	}

	public render(): React.ReactNode {
		let firstAuthor = true;
		return (
			<Mui.Grid item={true} xs={12}>
				<Mui.Paper>
					<Mui.Link href={this.props.publicationData.file} target="_blank" style={{ color: 'unset', textDecoration: 'unset' }}>
						<div style={styles.div}>
							<div>
								<Mui.Typography variant="body2" component="span">
									{
										this.props.publicationData.authors.map((author, ind) => {
											let andString = "and ";
											if (firstAuthor) {
												andString = "";
												firstAuthor = false;
											}
											if (author.lName.toUpperCase() === MY_LNAME) {
												return <b key={ind} style={styles.spacedText}>{andString}{author.fName} {author.lName}</b>;
											}
											return <span key={ind} style={styles.spacedText}>{andString}{author.fName} {author.lName}</span>;
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
			</Mui.Grid>
		);
	}
}
