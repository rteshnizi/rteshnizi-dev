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

	private static _posts: MediumPost[] = [];
	public static get posts(): MediumPost[] {
		return this._posts;
	}

	public static updatePosts(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.parser.parseURL("https://cors-anywhere.herokuapp.com/https://medium.com/feed/@reza.teshnizi")
				.then((feed: RssParser.Output<unknown>) => {
					this._posts = [];
					feed.items && feed.items.forEach((post) => {
						this._posts.push(new MediumPost(post));
					});
					resolve();
				})
				.catch((reason) => {
					reject(reason);
				});
		});
	}
}
