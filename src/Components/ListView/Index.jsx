import React from 'react';
import {ListGroupItem,CustomInput,Button, ListGroup} from 'reactstrap';
import Todos from '../todos/Index';
import PropTypes from 'prop-types'

function ListItem({todo,toggleSelect,toggleComplete}) {
    return (
        <div className='m-2'>
            <ListGroupItem className='d-flex align-items-center'>
                <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=>toggleSelect(todo.id)}


                />
                <div className='mx-3 '>
                    <h4>{todo.text}</h4>
                    <p>{todo.time.toDateString()}</p>

                </div>
                <Button 
                className='ml-auto' 
                color={todo.isComplete? 'danger': 'success'} 
                onClick={()=>toggleComplete(todo.id)}
                >

                    {todo.isComplete? 'Completed':'Running'}

                    </Button>

                
            </ListGroupItem>
        </div>
    )
}
ListItem.propTypes={
    todo:PropTypes.object.isRequired,
    toggleComplete:PropTypes.func.isRequired,
    toggleSelect:PropTypes.func.isRequired,


}

 

let ListView=({todos,toggleSelect,toggleComplete})=>{
    return(
        <ListGroup>
            {todos.map( todo=>(
                <ListItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                toggleSelect={toggleSelect}
                />
            )

            )}
        </ListGroup>
    )
}

 ListView.propTypes={
    todos:PropTypes.object.isRequired,
    toggleComplete:PropTypes.func.isRequired,
    toggleSelect:PropTypes.func.isRequired,

    
 }
 export default ListView;
