export class GScholar {
	constructor() {
		fetch('https://cors-anywhere.herokuapp.com/https://scholar.google.com/citations?user=s10QCcoAAAAJ&hl=en')
			.then((response) => {
				response.text().then((j) => {
					console.log(j);
				});
			})
			.catch((reason) => {
				console.error(reason);
			});
	}
}
