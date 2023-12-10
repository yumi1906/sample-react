import React from "react";
import {TodoItemType} from "./App";

type Props = {
    todoList: TodoItemType[];
};

export const TodoItem:React.FC<Props> = (props) => {
    const {todoList} = props;
    const onClick = (task: string) => {
        console.log(task);
    };

    return (
        <>
            {todoList.map((i) => {
                return (
                    <div key={i.id}>
                        <input type="checkbox" />
                        <label>{i.task}</label>
                        <button onClick={() =>onClick(i.task)}>delete</button>
                    </div>);
            })}
        </>
    );
};