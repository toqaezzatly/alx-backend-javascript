export default function taskBlock(trueOrFalse) {
  const task = false; // Changed var to let
  const task2 = true; // Changed var to let

  if (trueOrFalse) {
    const task = true; // This task is block-scoped and does not overwrite the outer task
    const task2 = false; // This task2 is block-scoped and does not overwrite the outer task2
  }

  return [task, task2]; // Returns the outer task and task2
}
