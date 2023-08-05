// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];
//
// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskComplete.push(false);
//   taskDescription.push(description);
// }
//
//
// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }
//
// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }
//
// // DRIVER CODE BELOW
//
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
//
// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed


const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}completed.`)
    },

    markCompleted: function()  {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask('write code', 'finish function implementation');

task1.logState();
task1.markCompleted();
task1.logState();


