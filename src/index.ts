import { TsLogger } from "./lib/TsLoggerImpl";
import { ConsoleLoggerImpl } from "./lib/ConsoleLoggerImpl";
import { TaskStatusEnum } from "./enums/TaskStatusEnum";
import { Task } from "./interfaces/Task";
import { TaskServiceImpl } from "./services/TaskServiceImpl";

const taskService = new TaskServiceImpl();
const tsLogger: TsLogger = new TsLogger("handleTaskOperations");
const consoleLogger: ConsoleLoggerImpl = ConsoleLoggerImpl.getInstance();

handleTaskOperations();

function handleTaskOperations() {
	consoleLogger.info("Starting task operations");
	try {
		const user = {
			id: 1,
			name: "Mateus Lodi"
		};

		// Create tasks
		const initialTask: Task[] = [
			{
				id: 1,
				title: "My Task",
				description: "This is a task",
				status: TaskStatusEnum.PENDING,
				user
			},
			{
				id: 2,
				title: "My Task",
				description: "This is a task",
				status: TaskStatusEnum.PENDING,
				user
			}
		];

		const resultCreationTasks = taskService.createTasks(initialTask);
		tsLogger.debug(`Created task: ${JSON.stringify(resultCreationTasks)}`);

		const taskById = taskService.getTaskById(initialTask[0].id);
		tsLogger.debug(`Task: ${JSON.stringify(taskById)}`);

		const resultUpdateTask = taskService.updateTask({
			...initialTask[0],
			title: "Updated Task",
			description: "This is an updated task",
			status: TaskStatusEnum.DONE
		});
		tsLogger.debug(`Updated task: ${JSON.stringify(resultUpdateTask)}`);

		taskService.deleteTask(resultCreationTasks[0].id);
		tsLogger.debug(`Deleted task with ID: ${resultCreationTasks[0].id}`);

		const resultTaskList = taskService.getTaskList();
		tsLogger.debug(`Task list: ${JSON.stringify(resultTaskList)}`);
		consoleLogger.info("Ending task operations");
	} catch (error) {
		tsLogger.error(`Error occurred: ${error}`);
	}
}
