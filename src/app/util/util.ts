export function openNewTab(url: string) {
	window.open(url, "_blank", "noopener, noreferrer");
}

export function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateRandomArray(length: number) {
	const arr = [];
	for (let i = 0; i < length; i++) {
		const randomNum = Math.floor(Math.random() * 100 + 1);
		arr.push(randomNum);
	}
	return arr;
}
