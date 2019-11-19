export default class TimeService {
	public static get isDay(): boolean {
		const time = new Date();
		const h = time.getHours();
		return h < 18 || h > 6;
	}
}
