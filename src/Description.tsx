import * as React from 'react';
import ComponentBase from './Base/ComponentBase';

export class Description extends ComponentBase {
	public constructor(props: {}) {
		super(props);
	}

	public render(): React.ReactNode {
		let k = 0;
		return [
			<p key={k++}>
				I am a PhD student in <a href="https://engineering.tamu.edu/cse/index.html">Computer Science</a> under the supervision of <a href="http://robotics.cs.tamu.edu/dshell/">Dr. Dylan Shell</a> at <a href="https://tamu.edu/">Texas A&amp;M University</a>.<br />
				My research interest include Robotics, Artificial Intelligence, and Machine Learning. I enjoys studying Motion Planning and Reinforcement Learning.
			</p>,
			<p key={k++}>
				I received my BSc in 2012 from <a href="https://aut.ac.ir/">Amirkabir University of Technology (Tehran Polytechnic)</a> in Computer Engineering and my MS in 2015 from <a href="https://tamu.edu/">Texas A&amp;M University</a> in Computer Science.
				My master's thesis is titled <a href="https://oaktrust.library.tamu.edu/handle/1969.1/155694"><b>"Motion Planning for a Tethered Mobile Robot"</b></a>.
				I have experience as a Software Engineer and manager.
			</p>,
			<p key={k++}>
				My dog's name is Ashk. Literally <a href="https://translate.google.com/?client=firefox-a&hl=en#view=home&op=translate&sl=auto&tl=en&text=%D8%A7%D8%B4%DA%A9">translated</a> from persian, it means teardrop.
				However, the name for me is derived from the <a href="https://en.wikipedia.org/wiki/Parthian_Empire">Parthian Empire</a>, which in Persian is called the "Ashkani" Empire.
			</p>,
			<p key={k++}>
				Side note: I also use this page as a playground to do some coding experiments.
			</p>,
		];
	}
}
