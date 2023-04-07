// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

//[BETTER]
//1. make those array above to an oop
function newTask(title, desc) {
	const task = {
		title: title,
		desc: desc,
		complete: false,

		logTaskState: function () {
			console.log(
				`${this.title} has${this.complete ? " " : " not "}been completed`
			);
		},

		completeTask: function () {
			this.complete = true;
		},
	};
	return task;
}

//[WORSE]
// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
// 	taskTitles.push(title);
// 	taskComplete.push(false);
// }

//[BETTER]
// function completeTask(task) {
// 	task.complete = true;
// }

//WORSE
// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
// 	taskComplete[taskIndex] = true;
// }

//[BETTER]
// function logTaskState(task) {
// 	console.log(
// 		`${task.title} has${task.complete ? " " : " not "}been completed`
// 	);
// }

//WORSE
// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
// 	const title = taskTitles[taskIndex];
// 	const complete = taskComplete[taskIndex];
// 	console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask(
	"Clean Cat Litter",
	"Take all the 💩 out of the litter box"
); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1

const tasks = [task1, task2];
console.log(tasks);

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed

//[BETTER]
// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

//[WORSE]
// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
