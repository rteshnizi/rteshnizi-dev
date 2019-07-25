import React from 'react';

import ComponentBase from '../Base/ComponentBase';

interface CenteredContainerProps {
	style?: React.CSSProperties;
}

export default class CenteredContainer extends ComponentBase<CenteredContainerProps, {}> {
	public render(): React.ReactNode {
		return (
			<div style={{
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				textAlign: "center",
				...this.props.style,
			}}>
				{this.props.children}
			</div>
		);
	}
}
