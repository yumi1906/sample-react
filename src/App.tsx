import React from "react";
import "./styles.css";

const todoList = [
    {id: 1, task: "Learning Browser", completed: true},
    {id: 2, task: "Learning JavaScript/TypeScript", completed: true},
    {id: 3, task: "Learning React", completed: false},
    {id: 4, task: "Learning Next.js", completed: false},
];

export default function App() {
  return (
      <>
          {todoList.map((i) =>{
              return (
                  <div key={i.id}>
                      <input type="checkbox" />
                      <label>{i.task}</label>
                  </div>
              );
          })}
      </>
  );
}
