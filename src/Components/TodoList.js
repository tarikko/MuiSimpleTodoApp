import React from 'react'

export const TodoList = (props) => {
    return (
        <div className="TodoList">
            <ul>
                {props.children}
            </ul>
        </div>
    )
}