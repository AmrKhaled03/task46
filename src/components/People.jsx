import React, { useContext } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { myContext } from './ContextApi';

const People = () => {
  const { dates = [], loader } = useContext(myContext);

  return (
    <div className='people'>
      <Container className='container'>
        <Row>
          {loader ? (
            <Col>
              <h1>Loading...</h1>
            </Col>
          ) : (
            dates.length === 0 ? (
              <Col>
                <h1>No Data Found</h1>
              </Col>
            ) : (
              dates.map((date) => (
                <React.Fragment key={date.id}>
                  <Col lg={12} className='d-flex align-items-center'>
                    <img src={date.img} alt={date.name} className='img-fluid user-img' />
                    <div className='body'>
                      <h3 className='text-success'>{date.name}</h3>
                      <h5 className={date.age<20 ? 'text-danger' : 'text-success'}>{date.age}</h5>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <hr />
                  </Col>
                </React.Fragment>
              ))
            )
          )}
        </Row>
      </Container>
    </div>
  );
}

export default People;
