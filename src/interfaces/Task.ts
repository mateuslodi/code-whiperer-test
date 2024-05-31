import { TaskStatusEnum } from "../enums/TaskStatusEnum";
import { User } from "./User";

export interface Task {
	id: number;
	user: User;
	title: string;
	description?: string;
	status: TaskStatusEnum;
	createdAt?: Date;
	updatedAt?: Date;
}
