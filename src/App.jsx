import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // console.log("first");
  const [todoText, settodoText] = useState("");
  const [imcompleteTodos, setimcompleteTodos] = useState(["hi", "hii"]);
  const [completeTodos, setcompleteTodos] = useState(["complete"]);

  //inputのchangeイベント
  const onChangeTodoText = (e) => settodoText(e.target.value);

  //タスク追加処理
  const onClickAdd = () => {
    const newTodos = [...imcompleteTodos, todoText];
    setimcompleteTodos(newTodos);
    settodoText("");
    // alert(todoText);
  };

  //タスク削除処理
  const onClickDelete = (index) => {
    deleteCommon(index, imcompleteTodos);
  };

  //タスク完了処理
  const onClickComplete = (index) => {
    deleteCommon(index, imcompleteTodos);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setcompleteTodos(newCompleteTodos);
  };

  //戻る処理
  const onClickBack = (index) => {
    deleteCommon(index, completeTodos, true);

    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
    setimcompleteTodos(newImcompleteTodos);
  };

  //削除処理（共通）
  const deleteCommon = (index, targetTodos, completeFlg = false) => {
    const newTodos = [...targetTodos];
    newTodos.splice(index, 1);

    completeFlg ? setcompleteTodos(newTodos) : setimcompleteTodos(newTodos);
  };

  return (
    <>
      <div className="taskadd-area">
        <input type="text" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="imcomplete-area">
        <p className="title">未完了のタスク</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="flex">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了タスク</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div className="flex">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
