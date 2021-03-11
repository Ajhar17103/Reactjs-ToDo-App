import React from 'react'
import { CustomInput, Label } from 'reactstrap';
import PropTypes from 'prop-types';


function ViewControlle({view, changeView}) {
    return (
        <div className='d-flex'>
            <Label for='list-view' className='mr-4 text-center'>
            <CustomInput
             type='radio'
             name='view'
             value='list'
             id='list-view'
             onChange={changeView}
             className='d-inlline-block'
             checked={view==='list'}
            
            />
            List View
            </Label>
            <Label for='table-view' className='mr-4'>
            <CustomInput
             type='radio'
             name='view'
             value='table'
             id='table-view'
             onChange={changeView}
             className='d-inlline-block'
             checked={view==='table'}
            
            />
           Table View
            </Label>
            

            
            
        </div>
    )
}

ViewControlle.propTypes={
    view:PropTypes.string.isRequired,
    changeView:PropTypes.func.isRequired

}

export default ViewControlle
