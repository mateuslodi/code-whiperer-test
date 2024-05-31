import { Task } from "./Task";

export interface ITaskService {
	getTaskList(): Array<Task>;
	getTaskById(id: number): Task;
	createTasks(task: Task[]): Task[];
	updateTask(task: Task): Task;
	deleteTask(id: number): void;
}
