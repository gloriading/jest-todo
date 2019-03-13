function todoMaker() {
  const toDoList = ['make the bed'];

  return {
    listToDos: function () {
      return toDoList;
    }
  }
}

module.exports = todoMaker;
