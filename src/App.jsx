import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { ImcompleteTodos } from "./components/ImcompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  // console.log("first");
  const [todoText, settodoText] = useState("");
  const [imcompleteTodos, setimcompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      ></InputTodo>
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録上限に達しました</p>
      )}
      <ImcompleteTodos
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      ></ImcompleteTodos>

      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
      ></CompleteTodos>
    </>
  );
};
