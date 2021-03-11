import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types'

function FilterController({handleFilter}) {
    return (
        <div>
            <ButtonGroup>
                <Button color='success' onClick={()=>handleFilter('all')}>
                 All
                </Button>
                <Button  color='primary' onClick={()=>handleFilter('running')}>
                 Running
                </Button>
                <Button color='danger' onClick={()=>handleFilter('completed')}>
                 Completed
                </Button>
            </ButtonGroup>
        </div>
    )
}
FilterController.propTypes={
    handleFilter:PropTypes.func.isRequired
}

export default FilterController
