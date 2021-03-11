import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import ListItem from './Components/ListView/Index';
import Todos from './Components/todos/Index';

function App() {
 
    return (
       
           <Container className='my-3'>
               <Row>
                   <Col>
                 <Todos/>
                  
                    
                   </Col>
               </Row>
           </Container>
    );
       
}

export default App;
