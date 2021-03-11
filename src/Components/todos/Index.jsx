import React, { Component } from 'react';
import ListView from '../ListView/Index';
import TableView from '../TableView/Index';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import CreateTodoForm from '../CreateTodoForm/Index';
import Controller from '../Controllers/Index';
import shortid from 'shortid';
 

class Todos extends Component {
    state={
        todos:[
            {
            id:'01',
            text:'Create Your Own TO-do List',
            description:'describe YOur Task',
            time: new Date(),
            isComplete:false,
            isSelect:false,
        },
        
    ],
    isOpenTodoForm:false,
    searchTerm:'',
    view:'list',
    filter:'all',



    }
    toggleSelect=(todoId)=>{
        let todos=[...this.state.todos]
        let todo=todos.find(t=>t.id==todoId)
        todo.isSelect=!todo.isSelect
        this.setState(
            {
                todos
            }
        )

    }
    toggleComplete =(todoId)=>{
        let todos=[...this.state.todos]
        let todo=todos.find(t=>t.id==todoId)
        todo.isComplete=!todo.isComplete
        this.setState(
            {
                todos
            }
        )

    }
    toggleForm=()=>{
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })

    }
    handleSearch=value=>{
        this.setState({
            SearchTerm: value
        })
}
    createTodo=(todo)=>{
        todo.id=shortid.generate();
        todo.time=new Date();
        todo.isComplete=false;
        todo.isSelect=''
        let todos=[todo, ...this.state.todos];
        this.setState({
            todos
        })
        this.toggleForm();

    }
    handleFilter=(filter)=>{
        this.setState({
            filter
        })

    }
    changeView=(e)=>{
        this.setState(
            {
               view: e.target.value
            }
         )
    }
    clearSelected=()=>{
      let todos=this.state.todos.filter(todo=>!todo.isSelect);
      this.setState({
          todos
      })

    }
    clearCompleted=()=>{
        let todos=this.state.todos.filter(todo=>!todo.isComplete);
        this.setState({
            todos
        })
    }
    reset=()=>{
        this.setState({
            view:'list',
            filter:'all',
            isOpenTodoForm:false
        })

    }
    performSearch=()=>{
        return this.state.todos.filter(todo=>
            todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );
        }
    performFilter=(todos)=>{
        let {filter}=this.state
        if(filter=='completed'){
            return todos.filter(todo=>todo.isComplete)
        } else if(filter=='running'){
            return todos.filter(todo=> !todo.isComplete)
        }
        else{
            return todos
        }
    }
    getView=()=>{
        let todos= this.performSearch()
        todos=this.performFilter(todos)
        return this.state.view == 'list' ? (<ListView
        todos={ todos} 
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
        /> ):(<TableView
        todos={ todos} 
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
        />)
    }

    render() {
        return (
            <div>
                <div className=' text-center mb-5 '>
                <h1 className='display-4 text-primary'>
                    To-Do List App
                </h1>
                <span>Develop By: Muhammad Azharul Islam</span>
                 
                <hr className='bg-danger' />
                
                
                </div>
                
                
                <Controller
            handleSearch={this.handleSearch}
            toggleForm={this.toggleForm}
            term={this.state.searchTerm}
            view={this.state.view}
            changeView={this.changeView}
            handleFilter={this.handleFilter}
            clearCompleted={this.clearCompleted}
            clearSelected={this.clearSelected}
            reset={this.reset}
            />
               
          
             
                <div>
                    {this.getView()}
                </div>
                 <Modal
                 isOpen={this.state.isOpenTodoForm}
                 toggle={this.toggleForm}
                 >
                     <ModalHeader toggle={this.toggleForm}>
                         Create New Todo Item

                     </ModalHeader>
                     <ModalBody>
                   <CreateTodoForm createTodo={this.createTodo}/>
                     </ModalBody>

                 </Modal>
            </div>
        )
    }
}

export default Todos;

 