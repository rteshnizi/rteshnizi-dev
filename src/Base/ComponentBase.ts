import React from 'react';

/** The Base Class for All Components */
export default abstract class ComponentBase<PropsType = {}, StateType = {}> extends React.Component<PropsType, StateType> {
	public constructor(props: PropsType) {
		super(props);
		this.BindSubclassMembers();
	}

	private BindSubclassMembers(): void {
		Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((method) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(this as any)[method] = (this as any)[method].bind(this);
		});
	}
}
