import { TaskStatusEnum } from "../enums/TaskStatusEnum";
import { IUser } from "./IUser";

export interface ITask {
	id: string;
	title: string;
	description?: string;
	status: TaskStatusEnum;
	user: IUser;
	createdAt: Date;
	updatedAt: Date;
}
