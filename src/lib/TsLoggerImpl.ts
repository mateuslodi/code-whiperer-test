import { Logger } from "ts-log";

export class TsLogger implements Logger {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	trace(message?: string, ...optionalParams: object[]): void {
		console.trace(`[${this.name}] [TRACE] ${message} ${optionalParams}`);
	}

	[x: string]: unknown;

	info(message: string): void {
		console.info(
			`[${this.name}] ${new Date().toLocaleString()}  [INFO] ${message}`
		);
	}

	debug(message: string): void {
		console.debug(
			`[${this.name}] ${new Date().toLocaleString()} [DEBUG] ${message}`,
			{}
		);
	}

	warn(message: string): void {
		console.warn(
			`[${this.name}] ${new Date().toLocaleString()} [WARN] ${message}`
		);
	}

	error(message: string, error?: Error): void {
		console.error(
			`[${this.name}] ${new Date().toLocaleString()} [ERROR] ${message}`,
			error?.message
		);
	}
}
