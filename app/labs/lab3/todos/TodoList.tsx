import todos from "./todos.json";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div id="wd-todo-list">
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
