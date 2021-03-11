import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types'

  class CreateTodoForm extends Component {
      state={
          text:'',
          description:''

      }
      handleChange=(e)=>{
          this.setState({
              [e.target.name]:e.target.value
          })

      }
      handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createTodo(this.state);
        e.target.reset();
        this.setState({
            text:'',
           description:''

        })
      }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Your Task</Label>
                    <Input
                      type='text'
                     text='text'
                     name='text'
                     placeholder='Do Some Code'
                     value={this.state.text}
                     onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enter Your Task</Label>
                    <Input
                    name='description'
                    type='textarea'
                    placeholder='Do Some Code'
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit'>Create Task</Button>
            </Form>
        )
    }
}
CreateTodoForm.propTypes={
    handleChange:PropTypes.func.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    createTodo:PropTypes.func.isRequired,
}

export default CreateTodoForm;
