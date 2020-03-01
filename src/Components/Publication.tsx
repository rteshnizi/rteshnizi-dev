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

type State = {};

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
};

export class Publication extends ComponentBase<Props, State> {
	public render(): React.ReactNode {
		return (
			<Mui.Grid item={true} xs={12}>
				<Mui.Paper>
					<Mui.Link rel="noopener" style={{ color: 'unset', textDecoration: 'unset' }}>
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
											[Acceptance Rate: ${this.props.publicationData.acceptance}%]
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
