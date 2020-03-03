import * as React from 'react';
import { parseBibFile } from 'bibtex';
import ComponentBase from '../Base/ComponentBase';
import LinkContainer from '../Components/LinkContainer';
import { Publication } from '../Components/Publication';
import bibFilePath from '../assets/bibtex.bib';
import { map } from 'lodash';
import PublicationData from '../DataStrcutures/PublicationData';
import { TexKey } from '../Base/PublicationMap';

export interface PostsState {
	loaded: boolean;
	publicationEls: React.ReactElement[];
}

export default class Publications extends ComponentBase<{}, PostsState> {
	public constructor(props: {}) {
		super(props);
		this.state = {
			loaded: false,
			publicationEls: [],
		};
	}

	public componentDidMount(): void {
		fetch(bibFilePath)
			.then((r) => r.text())
			.then((text) => {
				const bibFile = parseBibFile(text);
				const publications = map(bibFile.entries$, (val, key) => new PublicationData(val, key as TexKey));
				publications.sort((pub1, pub2) => pub2.date.year() - pub1.date.year());
				this.setState({
					publicationEls: publications.map((pub) => <Publication key={pub.texKey} texKey={pub.texKey} publicationData={pub} />),
					loaded: true,
				});
			});
	}

	public render(): React.ReactNode {
		return (
			<LinkContainer loading={!this.state.loaded} title={"Publications"}>
				{this.state.publicationEls}
			</LinkContainer>
		);
	}
}
