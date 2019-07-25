import React from 'react';

/** The Base Class for All Synchrogrid Components */
export default abstract class ComponentBase<PropsType = {}, StateType = {}> extends React.Component<PropsType, StateType> {
	constructor(props: PropsType) {
		super(props);
		this.BindSubclassMembers();
	}

	private BindSubclassMembers(): void {
		Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((method) => {
			(this as any)[method] = (this as any)[method].bind(this);
		});
	}
}
