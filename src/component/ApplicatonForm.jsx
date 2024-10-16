import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    stream:'', 
    location: '',

  });
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneno' && value.length > 10) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
        const response = await fetch('https://collegeserverone.onrender.com/student/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Server error:', errorText); // Log the server error
            throw new Error(`Error: ${errorText}`);
        }

        const result = await response.json();
        console.log('Student created:', result);
        
        setMessage('Your application has been submitted successfully!');
        setFormData({ name: '', email: '', phoneno: '', stream:'',location: '' }); 
        navigate('/'); 
    } catch (error) {
        console.error('Error submitting data:', error); // Log error
        setError('Failed to submit your application. Please try again.');
    }
};


  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="text-center mb-4 colorful-heading">Student Application Form</h2>
          <Form onSubmit={handleSubmit} className="p-4 colorful-form">
            <Form.Group controlId="formName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phoneno" // Change to phoneno
                value={formData.phoneno} // Change to phoneno
                onChange={handleChange}
                required
              />
            </Form.Group>




            <Form.Group controlId="formstream">
              <Form.Label>Stream in 12th class</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your stream in 12th class"
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                required
              />
            </Form.Group>






            <Form.Group controlId="formAddress">
              <Form.Label>School Name and City</Form.Label>
              <Form.Control
              type="text"
                placeholder="Enter your school name"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 submit-btn">
              Submit
            </Button>
          </Form>

          {/* Display success or error message */}
          {message && <Alert variant="success" className="mt-3">{message}</Alert>}
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicationForm;










