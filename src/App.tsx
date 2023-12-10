import React from "react";
import {TodoItem} from "./TodoItem";
import "./styles.css";

export type TodoItemType = {
    id: number,
    task: string,
    completed:boolean,
};

const todoList: TodoItemType[] = [
    {id: 1, task: "Learning Browser", completed: true},
    {id: 2, task: "Learning JavaScript/TypeScript", completed: true},
    {id: 3, task: "Learning React", completed: false},
    {id: 4, task: "Learning Next.js", completed: false},
];

export default function App() {
  return (
      <TodoItem todoList={todoList}/>
  );
}
