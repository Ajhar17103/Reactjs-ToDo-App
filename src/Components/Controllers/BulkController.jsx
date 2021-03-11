import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types'

function BulkController({clearSelected,clearCompleted,reset}) {
    return (
        <div   >
            <ButtonGroup>
                <Button color='danger' onClick={()=> clearSelected('clearSelected')}>
                Clear Selected
                </Button>
                <Button  color='danger' onClick={()=>clearCompleted('clearCompleted')}>
                Clear Completed
                </Button>
                <Button color='danger' onClick={()=>reset('reset')}>
                Reset
                </Button>
            </ButtonGroup>
        </div>
    )
}
BulkController.propTypes={
    clearSelected:PropTypes.func.isRequired,
    clearCompleted:PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired,

}

export default BulkController;
