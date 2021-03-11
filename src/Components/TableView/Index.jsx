import React from 'react';
import PropTypes from 'prop-types';
import {CustomInput, Button, Table} from 'reactstrap';


let RowIteam=({todo,toggleSelect,toggleComplete})=>{
    return (
        <tr>
            <td scope='row'>
            <CustomInput 
            type='checkbox'
             id={todo.id}
             checked={todo.isSelect}
             onChange={()=>toggleSelect(todo.id)}

            />
            </td>
            <td>
                {todo.time.toDateString()}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                <Button className='' onClick={()=>toggleComplete(todo.id)} color={todo.isComplete ? 'danger': 'success'}>
                    {
                        todo.isComplete ? 'Complete':'Running'
                    }
                </Button>
            </td>
        </tr>
    )
}
RowIteam.propTypes={
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired,
}

let TableView=({todos,toggleComplete,toggleSelect})=>{
    return(
        <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                 <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {todos.map(todo=>(
              <RowIteam
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              toggleSelect={toggleSelect}
              />
          ))}
        </tbody>
    </Table>
    )
    
}

TableView.propTypes={
    todos:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired,
}

export default TableView