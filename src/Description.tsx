import * as React from 'react';
import * as Mui from '@material-ui/core';
import ComponentBase from './Base/ComponentBase';

export class Description extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<Mui.Grid container={true} spacing={2} style={{ flexGrow: 1 }}>
				<Mui.Grid item={true} xs={1}>&nbsp;</Mui.Grid>
				<Mui.Grid item={true} xs={10}>
					<p>
						Reza Teshnizi is a PhD student under the supervision of <a href="http://robotics.cs.tamu.edu/dshell/">Dr. Dylan Shell</a> in <a href="https://engineering.tamu.edu/cse/index.html">Computer Science</a> at <a href="https://tamu.edu/">Texas A&amp;M University</a>.<br />
						His research interest involves Artificial Intelligence and Machine Learning.
						He enjoys studying Motion Planning and Reinforcement Learning.
						He has studied motion planning algorithms for tethered robots.

						Reza received his BSc in 2012 from <a href="https://aut.ac.ir/">Amirkabir University of Technology (Tehran Polytechnic)</a> in Computer Engineering.
						In 2015, he defended his master's thesis titled <b>"Motion Planning for a Tethered Mobile Robot"</b> to receive MS in Computer Science from Texas A&amp;M University.
						He has experience as a Software Engineer and manager in FactSet Research Systems, inc.
					</p>
				</Mui.Grid>
				<Mui.Grid item={true} xs={1}>&nbsp;</Mui.Grid>
			</Mui.Grid>
		);
	}
}
