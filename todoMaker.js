function todoMaker() {
  const toDoList = ['make the bad'];

  return {
    listToDos: function() {
      return toDoList;
    }
  }
}

module.exports = todoMaker;
