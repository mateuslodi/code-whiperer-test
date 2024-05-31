import { Task } from "../interfaces/Task";
import { ITaskService } from "../interfaces/ITaskService";
import { WinstonLogger } from "../lib/WinstonLogger";

export class TaskServiceImpl implements ITaskService {
	private taskList: Task[] = [];
	private winstonLogger: WinstonLogger = new WinstonLogger();

	getTaskList(): Task[] {
		this.winstonLogger.info("Getting task list");
		return this.taskList;
	}

	getTaskById(id: number): Task {
		this.winstonLogger.info("Getting task by id");
		const task = this.taskList.find((task) => task.id === id);
		if (task) {
			this.winstonLogger.info(`Getting task with id ${id}`);
			return task;
		}
		this.winstonLogger.error(`Task with id ${id} not found`);
		throw new Error(`Task with id ${id} not found`);
	}

	createTasks(task: Task[]): Task[] {
		this.winstonLogger.info("Creating tasks");
		for (const t of task) {
			t.id = this.taskList.length + 1;
			t.createdAt = new Date();
			t.updatedAt = new Date();
			this.taskList.push(t);
		}
		return task;
	}

	updateTask(pTask: Task): Task {
		this.winstonLogger.info("Updating task");
		const task = this.taskList.find((task) => task.id === pTask.id);
		if (task) {
			task.title = pTask.title;
			task.description = pTask.description;
			task.status = pTask.status;
			task.updatedAt = new Date();

			this.winstonLogger.info(`Updating task with id ${pTask.id}`);
			return task;
		}
		this.winstonLogger.error(`Task with id ${pTask.id} not found`);
		throw new Error(`Task with id ${pTask.id} not found`);
	}

	deleteTask(id: number): void {
		this.winstonLogger.info("Deleting task");
		const initialLength = this.taskList.length;
		this.taskList = this.taskList.filter((task) => task.id !== id);
		if (this.taskList.length < initialLength) {
			this.winstonLogger.debug(`Deleting task with id ${id}`);
		} else {
			this.winstonLogger.error(`Task with id ${id} not found`);
			throw new Error(`Task with id ${id} not found`);
		}
	}
}
