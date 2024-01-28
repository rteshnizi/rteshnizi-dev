import * as React from 'react';
import * as Mui from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LoadingOverlay from 'react-loading-overlay';
import ComponentBase from '../Base/ComponentBase';

const styles = {
	div: {
		margin: '1vh 2vw',
	} as React.CSSProperties,
};

interface Props {
	loading?: boolean;
	title: string;
}

interface State {
	loading: boolean;
}

export default class LinkContainer extends ComponentBase<Props, State> {
	public constructor(props: Props) {
		super(props);
		this.state = {
			loading: !!props.loading,
		};
	}

	public componentDidUpdate(prevProps: Props): void {
		if (prevProps.loading !== this.props.loading) {
			window.setTimeout(() => { this.setState({ loading: !!this.props.loading }); }, 500);
		}
	}

	public render(): React.ReactNode {
		return (
			<LoadingOverlay active={this.state.loading} spinner={true}>
				<div style={styles.div}>
					<Mui.Typography variant="subtitle1">
						{this.props.title}
					</Mui.Typography>
				</div>
				<Mui.Grid container={true}>
					{this.props.children}
				</Mui.Grid>
			</LoadingOverlay>
		);
	}
}
