const todoMaker = require('./todoMaker');

describe('The todoMaker', () => {
  test('can get a list of todos', () => {
    const todo = todoMaker();
    expect(todo.listToDos()).toEqual(['make the bed']);
  });
});
