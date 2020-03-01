import { BibEntry } from 'bibtex';
import moment from 'moment';

interface Author {
	fName: string;
	lName: string;
}

export default class PublicationData {
	public key: string;
	public authors: Author[];
	public title: string;
	public abstract: string;
	public date: moment.Moment;
	public venue: string;
	public acceptance: number;
	public doi?: string;
	public url?: string;
	public file?: string;
	public constructor(bibEntry: BibEntry, public texKey: string) {
		const bibAuthor = bibEntry.getAuthors();
		const authors: Author[] = [];
		if (bibAuthor) {
			bibAuthor.authors$.forEach((bibAuthor) => {
				authors.push({
					fName: bibAuthor.firstNames.join(" "),
					lName: bibAuthor.lastNames.join(" "),
				});
			});
		}
		this.key = texKey;
		this.authors = authors;
		this.title = `${bibEntry.getFieldAsString("title")}`;
		this.abstract = `${bibEntry.getFieldAsString("abstract")}`;
		this.date = moment(`${bibEntry.getFieldAsString("year")}-${bibEntry.getFieldAsString("month")}`, "YYYYMM");
		this.venue = bibEntry.getFieldAsString("booktitle") as string || "";
		this.acceptance = Number(bibEntry.getFieldAsString("acceptance"));
	}
}
