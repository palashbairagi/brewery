import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Progress extends Component 
{
    render()
    {
        return (
            <Row>
                <Col>
                    <div className = 'content-wrapper' >
                        Loading...
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Progress