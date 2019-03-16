const todoMaker = require('./todoMaker');

describe('The todoMaker', () => {
  it('can add a ToDo', () => {
    const todo = todoMaker();
    todo.addTask('take out the trash');

    expect(todo.listToDos()).toContainEqual('take out the trash');
  });

  it('can get a list of todos', () => {
    const todo = todoMaker();
    todo.addTask('take out the trash');
    todo.addTask('feed the cat');

    expect(todo.listToDos()).toEqual(['take out the trash', 'feed the cat']);
  });

  it('can remove a todo', () => {
    const todo = todoMaker();
    // todo.addTask('take out the trash');
    // todo.addTask('feed the cat');
    // todo.removeToDo('feed the cat');

    const todo
    expect(todo.listToDos().length).toEqual(1);
  });
});
