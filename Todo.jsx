import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const inputItem = (event) => {
    setItem(event.target.value);
  };

  const itemsList = () => {
    setList((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    // console.log("deleted" + id);
    setList((oldItems) => {
      return oldItems.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="image">
        <div className="main">
          <div className="center">
            <h1>ToDo List</h1>
            <br />
            <div className="inp">
              <input
                type="text"
                placeholder="Add a Item"
                onChange={inputItem}
                value={item}
              />
              <button onClick={itemsList}> + </button>
            </div>

            <ol>
              {list.map((curItem, index) => {
                return (
                  <TodoList
                    text={curItem}
                    key={index}
                    id={index}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
