import React from 'react';
import SearchPanel from './Search-Panel';
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import FilterController from './FilterController';
import ViewControlle from './ViewControlle';
import BulkController from './BulkController';

let Controller=({term,handleSearch,toggleForm,handleFilter,view,changeView,clearCompleted,clearSelected,reset})=>(
    <div>
        <SearchPanel
           term={term}
           handleSearch={handleSearch}
           toggleForm={toggleForm}
        />
         <Row className='my-4'>
        <Col md={{size:4}}>

                <FilterController handleFilter={handleFilter}/>  
       </Col>

        <Col md={{size:4}} text='center'> 

                  <ViewControlle
                  view={view}
                  changeView={changeView}
                  />
        </Col>


        <Col md={{size:4}} className='d-flex'> 
                      <div className=' ml-auto'>
                      <BulkController
                      clearCompleted={clearCompleted}
                      clearSelected={clearSelected}
                      reset={reset}
                      />
                      </div>
        </Col>
    </Row>

    </div>
   
);
Controller.propTypes={
    toggleForm:PropTypes.func.isRequired,
    handleSearch:PropTypes.func.isRequired,
    term:PropTypes.string.isRequired,
    handleFilter:PropTypes.func.isRequired,
    view:PropTypes.string.isRequired,
    changeView:PropTypes.func.isRequired,
    clearSelected:PropTypes.func.isRequired,
    clearCompleted:PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired,
}
export default Controller;