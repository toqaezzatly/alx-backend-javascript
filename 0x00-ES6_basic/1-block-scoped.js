export default function taskBlock(trueOrFalse) {
  let task = false; // Changed var to let
  let task2 = true; // Changed var to let

  if (trueOrFalse) {
    let task = true; // This task is block-scoped and does not overwrite the outer task
    let task2 = false; // This task2 is block-scoped and does not overwrite the outer task2
  }

  return [task, task2]; // Returns the outer task and task2
}
