import { ITaskRepository } from "../interfaces/ITaskRepository";
import { Task } from "../models/TaskModel";
import { WinstonLogger } from "../helpers/WinstonLogger";

export class TaskRepository implements ITaskRepository {
	private tasks: Task[];
	winstonLogger: WinstonLogger = new WinstonLogger();

	constructor() {
		this.tasks = [];
	}

	getTaskList(): Task[] {
		return this.tasks;
	}

	getTaskById(id: string): Task | undefined {
		return this.tasks.find((tasks) => tasks.id === id);
	}

	createTasks(pTasks: Task[]): Task[] {
		for (const task of pTasks) {
			this.tasks.push(task);
		}
		return this.tasks;
	}

	updateTask(pTask: Task): void | Task {
		const task: Task | undefined = this.tasks.find(
			(task) => task.id === pTask.id
		);
		if (task) {
			task.title = pTask.title;
			task.description = pTask.description
				? pTask.description
				: task.description;
			task.status = pTask.status ? pTask.status : task.status;
			task.updatedAt = new Date();
		}
		return task;
	}

	deleteTaskById(id: string): void {
		const initialLength: number = this.tasks.length;
		this.tasks = this.tasks.filter((task) => task.id !== id);
		if (this.tasks.length < initialLength) {
			this.winstonLogger.debug(`Deleted task with id ${id}`);
		} else {
			this.winstonLogger.warn(`Task with id ${id} not found`);
		}
	}
}
