function todoMaker() {
  let toDoList = [];

  return {
    listToDos() {
      return toDoList;
    },
    addTask(newTodo) {
      toDoList = [...toDoList, newTodo];
      return toDoList;
    },
    removeToDo() {
      return undefined;
    },
  }
}

module.exports = todoMaker;
