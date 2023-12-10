import React from "react";
import {TodoItemType} from "./App";

type Props = {
    todoList: TodoItemType[];
};

export const TodoItem:React.FC<Props> = (props) => {
    const {todoList} = props;

    return (
        <>
            {todoList.map((i) => {
                return (
                    <div>
                        <input type="checkbox" />
                        <label>{i.task}</label>
                    </div>);
            })}
        </>
    );
};