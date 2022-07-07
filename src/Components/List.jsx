import React from 'react'

function List(props) {
    return (
        <div>
            {props.itemList.map((itemObj) => {
               return <p style={{textTransform:"capitalize"}}>{itemObj.item}</p>
            })}
        </div>
    )
}

export default List;