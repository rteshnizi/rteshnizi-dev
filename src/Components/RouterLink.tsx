import React from 'react';
import ComponentBase from '../Base/ComponentBase';
import { Link, LinkProps } from 'react-router-dom';

/** This calls just removes the browser styling from the link element */
export default class RouterLink extends ComponentBase<LinkProps> {
	public render(): React.ReactNode {
		return (
			<Link {...this.props} style={{ color: "unset", textDecoration: "unset" }}/>
		);
	}
}
