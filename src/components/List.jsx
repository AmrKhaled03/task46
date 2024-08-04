import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { myContext } from './ContextApi';
import '../App.css';
import Badge from 'react-bootstrap/Badge';
const List = () => {
    const{dates=[]}=useContext(myContext);
  return (
    <div className='list my-5 px-4 text-center'>
<Container>
      <Row>
        <Col xs={12} sm={12} lg={12} md={12} >
        <h1>
          
            {
                dates.length === 0 ? (<>
                    <Badge bg="danger" className='text-center'> You have {dates.length} dates</Badge>
                </>):
                (<>
                    <Badge bg="success" className='text-center'> You have {dates.length} dates</Badge>
                </>)
            }
        </h1>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default List