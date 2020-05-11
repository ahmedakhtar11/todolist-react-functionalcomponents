import React from 'react'

export default ({description, id, deleteTodo}) => (
<div className = "Todo">
    <p>
    {description} | id: {id}
    </p>
<button onClick={() => deleteTodo(id)}>Delete Task</button>
</div>
)
