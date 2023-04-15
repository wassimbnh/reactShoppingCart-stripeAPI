import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Success = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <i className="fas fa-check-circle fa-7x text-success mb-4"></i>
        <h1 className="mb-3">Thank you for your purchase!</h1>
        <p>Your payment has been successfully processed.</p>
        <Link to="/">
        <Button variant="success" className="mt-3">
          Back to Home
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default Success
