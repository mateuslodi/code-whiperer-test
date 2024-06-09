import { ITaskService } from "../interfaces/ITaskService";
import { WinstonLogger } from "../helpers/WinstonLogger";
import { Task } from "../models/TaskModel";
import { TaskRepository } from "../repositories/TaskRepository";

export class TaskService implements ITaskService {
	private winstonLogger: WinstonLogger = new WinstonLogger();
	private taskRepository: TaskRepository = new TaskRepository();

	getTaskList(): Task[] {
		this.winstonLogger.info(`Getting task list`);
		const taskList: Task[] = this.taskRepository.getTaskList();
		this.winstonLogger.info(`Found ${JSON.stringify(taskList)} tasks`);

		return taskList;
	}

	getTaskById(id: string): Task | undefined {
		this.winstonLogger.info(`Getting task id ${id}`);
		const task: Task | undefined = this.taskRepository.getTaskById(id);
		if (task) {
			this.winstonLogger.info(
				`Found task with id ${id} and title ${task.title}`
			);
			return task;
		}
		this.winstonLogger.warn(`Task with id ${id} not found`);
		return undefined;
	}

	createTasks(tasks: Task[]): Task[] {
		this.winstonLogger.info(`Creating tasks ${JSON.stringify(tasks)}`);
		this.taskRepository.createTasks(tasks);
		this.winstonLogger.info(`Created tasks ${JSON.stringify(tasks)}`);
		return tasks;
	}

	updateTask(pTask: Task): Task | void {
		this.winstonLogger.info(`Updating task with id ${pTask.id}`);
		return this.taskRepository.updateTask(pTask);
	}

	deleteTaskById(id: string): void {
		this.winstonLogger.info(`Deleting task with id ${id}`);
		this.taskRepository.deleteTaskById(id);
	}
}
