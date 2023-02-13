import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);
  const [arr, setArr] = useState([]);

  const handleSented = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setArr([...arr, text]);
    setText("");
    setBlur(false);
  };

  const handleBlur = () => {
    setBlur(true);
  };

  const handleDelete = (i) => {
    setArr(
      arr.filter((item, index) => {
        return index !== i;
      })
    );
  };

  return (
    <div className="divMain">
      <form className="form" onSubmit={handleClick}>
        <input
          className="inp"
          type="text"
          value={text}
          onChange={handleSented}
          onBlur={handleBlur}
        />
        <button className="btn" disabled={!text}>Отправить</button>
      </form>
      {!text && blur && (
        <div className="divTextBlur">Поле ввода не должно быть пустым</div>
      )}
      <div className="divArr">
        {arr.map((item, index) => {
          return (
            <div className="divElementArray">
              <div className="divTextArray">{item}</div>
              <div className="divBtn">
                <button
                  className="btnArray"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
