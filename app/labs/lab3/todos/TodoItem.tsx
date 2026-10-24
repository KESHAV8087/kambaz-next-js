type Todo = { _id: string; title: string; done: boolean; status: string };

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="wd-todo-item">
      <input type="checkbox" defaultChecked={todo.done} /> {todo.title} ({todo.status})
    </li>
  );
}
