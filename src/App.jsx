import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [imcompleteTodos, setimcompleteTodos] = useState(["hi", "hii"]);
  const [completeTodos, setcompleteTodos] = useState(["complete"]);
  return (
    <>
      <div className="taskadd-area">
        <input type="text" />
        <button>追加</button>
      </div>

      <div className="imcomplete-area">
        <p className="title">未完了のタスク</p>
        <ul>
          {imcompleteTodos.map((todo) => {
            return (
              <div key={todo} className="flex">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了タスク</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="flex">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
