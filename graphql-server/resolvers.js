const doingTodos = require('./fixtures').doingTodos;
const doneTodos = require('./fixtures').doneTodos;
const newTodo = require('./fixtures').newTodo;

module.exports = {
  Query: {
    async todo() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return doingTodos[0];
    },
    async todos() {
      await new Promise(resolve => setTimeout(resolve, 3000));
      return doingTodos.concat(doneTodos);
    }
  },
  Mutation: {
    async createTodo() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return newTodo;
    }
  }
};
