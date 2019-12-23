import React from 'react';
import * as Mui from '@material-ui/core';

import ComponentBase from '../Base/ComponentBase';

const styles = {
	links: {
		textDecoration: 'unset',
		cursor: 'pointer',
	} as React.CSSProperties,
};

interface IconLinkProps {
	label: string;
	icon: JSX.Element;
	url?: string;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default class IconLink extends ComponentBase<IconLinkProps> {
	private renderLink(label: string, icon: JSX.Element, onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void): React.ReactNode {
		return (
			<Mui.Link onClick={onClick} style={styles.links}>
				<Mui.Chip
					icon={icon}
					label={label}
					variant="outlined"
					clickable={true}
				/>
			</Mui.Link>
		);
	}

	private renderAnchor(label: string, icon: JSX.Element, url: string): React.ReactNode {
		return (
			<a href={url} target="_blank" rel="noopener noreferrer" style={styles.links}>
				<Mui.Chip
					icon={icon}
					label={label}
					variant="outlined"
					clickable={true}
				/>
			</a>
		);
	}

	public render(): React.ReactNode {
		if (this.props.url) {
			return this.renderAnchor(this.props.label, this.props.icon, this.props.url);
		} else if (this.props.onClick) {
			return this.renderLink(this.props.label, this.props.icon, this.props.onClick);
		} else {
			throw new Error("Either url or onClick should be present.");
		}
	}
}
