import React from 'react'
import { useState } from 'react';
import List from './List';

function TodoList() {
    const [currentItem, setcurrentItem] = useState(null);
    const [itemList, updateitemList] = useState([]);
    const onChangeHandler = (e) => {
        console.log("current value", e.target.value);
        setcurrentItem(e.target.value);
    }
    const addItemToList = () => {
        updateitemList([...itemList, { item: currentItem, key:Date.now}]);
        setcurrentItem("");
    }
    return (
        <>
            <div className='wrapper'>
                <div className='main-input'>
                    <form action="">
                        <input type="text" placeholder='type anyting here' value={currentItem} onChange={onChangeHandler}  />
                        <button type="submit" onClick={addItemToList}>+</button>
                    </form>
                </div>
                <List itemList={itemList} />
            </div>
        </>
    )
}

export default TodoList;
