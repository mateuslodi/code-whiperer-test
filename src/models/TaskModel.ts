import { TaskStatusEnum } from "../enums/TaskStatusEnum";
import { ITask } from "../interfaces/ITask";
import { IUser } from "../interfaces/IUser";
import { v4 as uuid } from "uuid";

export class Task implements ITask {
	id: string;
	title: string;
	description?: string;
	status: TaskStatusEnum;
	user: IUser;
	createdAt: Date;
	updatedAt: Date;

	constructor(
		title: string,
		description: string,
		status: TaskStatusEnum,
		user: IUser
	) {
		this.id = uuid();
		this.title = title;
		this.description = description;
		this.status = status;
		this.user = user;
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}
