import { createLogger, format, transports } from "winston";

export class WinstonLogger {
	logger = createLogger({
		format: format.combine(
			format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
			format.printf(({ level, message, timestamp }) => {
				return `${timestamp} [${level}]: ${message}`;
			})
		),
		transports: [
			new transports.Console(),
			new transports.File({ filename: "app.log" })
		]
	});

	public debug(message: string): void {
		this.logger.debug(message);
	}

	public warn(message: string): void {
		this.logger.warn(message);
	}

	public info(message: string): void {
		this.logger.info(message);
	}

	public error(message: string): void {
		this.logger.error(message);
	}
}
