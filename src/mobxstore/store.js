import { decorate, observable, computed, action } from "mobx";

class Todo {
    id = Math.random();
    title = "";
    finished = false;
    todos = [];

    get unfinishedTodoCount() {
        return this.todos.length;
    }

    fetchTodos = () => {

    }
}
decorate(Todo, {
    todos: observable,
    unfinishedTodoCount: computed,
    fetchTodos: action.bound
})

export default Todo;