import React, { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const [inputComment, setInputComment] = useState("");

  function clickHandler() {
    if (!inputComment.trim()) {
      return;
    }
    setComments([
      ...comments,
      {
        id: comments.length === 0 ? 1 : comments[comments.length - 1].id + 1,
        text: inputComment,
      },
    ]);
    setInputComment("");
  }

  function delComment(event) {
    if (comments.length === 0) {
      return;
    }
    setComments(
      comments.filter((comment) => comment.id !== +event.target.dataset.id)
    );
  }

  return (
    <div className="CommentsList">
      <h2>Введите комментарий</h2>
      <input
        value={inputComment}
        onChange={(event) => setInputComment(event.target.value)}
      ></input>
      <button onClick={clickHandler}>Добавить комментарий</button>

      <h2>Список комментариев</h2>
      {comments.map((item) => (
        <div className="Comment">
          <div>{item.text}</div>
          <button key={item.id} data-id={item.id} onClick={delComment}>
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
