import { TsLogger } from "./helpers/TsLogger";
import { ConsoleLogger } from "./helpers/ConsoleLogger";
import { TaskStatusEnum } from "./enums/TaskStatusEnum";
import { TaskService } from "./services/TaskService";
import { Task } from "./models/TaskModel";
import { RegisteredUser } from "./models/RegistredUserModel";

const tsLogger: TsLogger = new TsLogger("handleTaskOperations");
const consoleLogger: ConsoleLogger = ConsoleLogger.getInstance();

handleTaskOperations();

function handleTaskOperations() {
	const taskService = new TaskService();
	consoleLogger.info("Starting task operations");
	try {
		const user: RegisteredUser = new RegisteredUser(
			"Mateus Lodi",
			"test@abc.com"
		);

		const initialTask: Task[] = [
			new Task(
				"This is task 1",
				"This is task 1",
				TaskStatusEnum.IN_PROGRESS,
				user
			),
			new Task("This is task 2", "This is task 2", TaskStatusEnum.PENDING, user)
		];

		const resultCreationTasks = taskService.createTasks(initialTask);
		tsLogger.debug(`Created task: ${JSON.stringify(resultCreationTasks)}`);

		const taskById = taskService.getTaskById(initialTask[0].id);
		tsLogger.debug(`getTaskById Result: ${JSON.stringify(taskById)}`);

		const resultUpdateTask = taskService.updateTask({
			...initialTask[0],
			title: "Updated Task",
			description: "This is an updated task",
			status: TaskStatusEnum.DONE
		});
		tsLogger.debug(`Updated task: ${JSON.stringify(resultUpdateTask)}`);

		taskService.deleteTaskById(initialTask[0].id);
		tsLogger.debug(`Deleted task with ID: ${initialTask[0].id}`);

		const resultTaskList = taskService.getTaskList();
		tsLogger.debug(`Task list: ${JSON.stringify(resultTaskList)}`);
		consoleLogger.info("Ending task operations");
	} catch (error) {
		tsLogger.error(`Error occurred: ${error}`);
	}
}
