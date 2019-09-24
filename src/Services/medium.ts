import RssParser from 'rss-parser';

export class MediumPost {
	public date: Date;
	public url: string;

	public title: string;
	public get shortTitle(): string {
		if (this.title.length < 25) return this.title;
		return `${this.title.substr(0, 22)}...`;
	}

	public constructor(post: RssParser.Item) {
		this.title = post.title || "";
		this.date = new Date(post.pubDate || Date.now());
		this.url = post.link || "";
	}
}

export class Medium {
	private static readonly parser = new RssParser();
	public static async fetchPosts(): Promise<RssParser.Output> {
		return this.parser.parseURL("https://cors-anywhere.herokuapp.com/https://medium.com/feed/@reza.teshnizi");
	}

	private static _posts: MediumPost[] = [];
	public static get posts(): MediumPost[] {
		return this._posts;
	}

	public static updatePosts(feed: RssParser.Output): void {
		this._posts = [];
		feed.items && feed.items.forEach((post) => {
			this._posts.push(new MediumPost(post));
		});
	}
}
