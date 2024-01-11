import { useState } from "react";
import styles from "../assets/styles/Todos.module.css"
import { DATA_TODOS } from "../data";

export function Todos() {
    //todos app state içerisinde tutulacaklar???
    //todosData
    const [todosData, setTodosData] = useState(DATA_TODOS);
    function addTodo(newTodo) {
        const newTodosData = [...todosData, newTodo];
        setTodosData(newTodosData);
    }

    function deleteTodo(id) {
        const filteredTodosData = todosData.filter(todo => todo.id !== id);
        setTodosData(filteredTodosData);
    }

    return (
        <div className={styles.Todos}>
            <h1>Yapılacaklar Listesi Komponenti</h1>

            <FormAddTodo addTodo={addTodo} />
            <ul>
                {todosData.map(
                    todo => <TodoItem content={todo.content} id={todo.id} deleteTodo={deleteTodo} />
                )}
            </ul>
        </div>
    )
}

function FormAddTodo({ addTodo }) {
    const [todoContent, setTodoContent] = useState("");
    function handleChange(e) {
        setTodoContent(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        //todoContent -> "Spor yap
        const newTodo = { id: crypto.randomUUID(), content: todoContent, isCompleted: false }
        addTodo(newTodo);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={todoContent} type="text" placeholder="Yapılacak bir iş yazınız..." onChange={handleChange} />
            <button type="submit">Ekle</button>
        </form>
    )
}


function TodoItem({ content, id, deleteTodo }) {

    const viewTemplate = (
        <li>
            {content}
            <button onClick={handleClick}>Sil</button>
            <button>Düzenle</button>
        </li>
    );

    const editTemplate = (
        <li>
            <form>
                <input type="text" value={""} />
                <button type="submit">Kaydet</button>
            </form>
        </li>
    );




    function handleClick() {
        deleteTodo(id);
    }

    return (
        viewTemplate
    )
}