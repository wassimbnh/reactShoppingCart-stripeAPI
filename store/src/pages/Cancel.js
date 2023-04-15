import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Cancel = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Payment Cancelled</h1>
          <p className="text-center">We're sorry to see you go. If you'd like to try again, simply click the button below to go back to the home page.</p>
          <div className="d-flex justify-content-center">
            <Button variant="primary" size="lg" href="/" className="mt-4">Go Back to Checkout</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Cancel
