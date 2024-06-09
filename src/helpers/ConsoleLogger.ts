import { ILogger } from "../interfaces/ILogger";

export class ConsoleLogger implements ILogger {
	private static instance: ConsoleLogger;

	private constructor() {
		// private constructor to prevent instantiation from outside the class
	}

	public static getInstance(): ConsoleLogger {
		if (!ConsoleLogger.instance) {
			ConsoleLogger.instance = new ConsoleLogger();
		}
		return ConsoleLogger.instance;
	}

	public debug(message: string): void {
		console.log(message);
	}

	public log(message: string): void {
		console.log(message);
	}

	public info(message: string): void {
		console.info(message);
	}

	public warn(message: string): void {
		console.warn(message);
	}

	public error(message: string): void {
		console.error(message);
	}
}
