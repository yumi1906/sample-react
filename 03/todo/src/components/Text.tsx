import React ,{useState} from "react";
import {TodoItemType} from "../App";

type Props = {
    todoList: TodoItemType[];
};

export const Text:React.FC<Props> = (props) => {
    const {todoList} = props;
    const [text, setText] = useState("");
    const [addTask, setAddTask] = useState("");

    const handleChangeText:React.ChangeEventHandler<HTMLInputElement> =
        (event) => setText(event.currentTarget.value);

    const onClick = () => {

    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChangeText} />
            <button onClick={onClick}>add</button>
        </div>
    );
};