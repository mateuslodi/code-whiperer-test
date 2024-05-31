// implemente um logger utilizando ILogger.ts

import { ILogger } from "../interfaces/ILogger";

export class ConsoleLoggerImpl implements ILogger {
	private static instance: ConsoleLoggerImpl;

	private constructor() {
		// private constructor to prevent instantiation from outside the class
	}

	public static getInstance(): ConsoleLoggerImpl {
		if (!ConsoleLoggerImpl.instance) {
			ConsoleLoggerImpl.instance = new ConsoleLoggerImpl();
		}
		return ConsoleLoggerImpl.instance;
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
