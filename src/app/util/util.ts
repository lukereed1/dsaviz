export function openNewTab(url: string) {
	window.open(url, "_blank", "noopener, noreferrer");
}

export function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
