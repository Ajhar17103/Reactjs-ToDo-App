 import React from 'react';
 import { Button, Input } from 'reactstrap';
 import PropTypes from 'prop-types';
 
 function SearchPanel({term,toggleForm,handleSearch}) {
     return (
         <div className='d-flex'>
             <Input 
             placeholder='Enter Your Term'
             className=' mr-3'
             name='term'
             value={term}
             onChange={e=>{handleSearch(e.target.value)}}
             />
             <Button color='success' onClick={toggleForm}>
                    New
             </Button>
             
         </div>
     )
 }
 SearchPanel.propTypes={
     term:PropTypes.string.isRequired,
     handleSearch:PropTypes.func.isRequired,
     toggleForm:PropTypes.func.isRequired,
 }
 
 export default SearchPanel;
 