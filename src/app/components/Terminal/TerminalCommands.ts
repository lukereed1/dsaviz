export function getTerminalCommand(input: string) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: display array general information\n  - time: display time complexities for array operations\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files";
			break;
		case "info":
			return "info";
			break;
		case "time":
			return "time";
			break;
		default:
			return `  "${input}" command not found`;
			break;
	}
}
