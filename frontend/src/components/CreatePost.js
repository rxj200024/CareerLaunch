import React, {useState} from 'react'
import Base from './Base'
import Button from 'react-bootstrap/Button';
import { API } from '../backend';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const CreatePost = () => {

  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    salary: '', 
    description: '',
    experience_required: '',
    created_at: "2023-07-02T22:44:59.931570Z",
    saved: false,
    category: 1
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your data processing and API request here
    createJobPost(formData);
  }

  const createJobPost = async (data) => {
    try {
      const response = await axios.post(`${API}jobpost/`, data);
      console.log('Response:', response.data);
      // Handle the successful response here
    } catch (error) {
      console.error('Error:', error.response.data);
      // Handle the error response here
    }
  };

  const sendDataToAPI = (data) => {
    const url = `${API}jobpost/`;

    const formData = new FormData()
    formData.append('company', data.company)
    formData.append('title', data.title)
    formData.append('location', data.location)
    formData.append('salary', data.salary)
    formData.append('description', data.description)
    formData.append('experience_required', data.experience_required)
    formData.append('created_at', data.created_at)
    formData.append('saved', false)
    formData.append('category', data.category)

    console.log(`${data.company} ${data.title} ${data.company} ${data.title}`)

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(response => response.json())
      .then(responseData => {
        // Handle the API response
        console.log('Response:', responseData);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  }

  return (
    <Base title="Job Post Creation">
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" name='company' value={formData.company} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name='title' value={formData.title} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" name='location' value={formData.location} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" name='salary' value={formData.salary} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name='description' value={formData.description} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Experience Required</Form.Label>
        <Form.Control type="text" name='experience_required' value={formData.experience_required} onChange={handleInputChange}/>
      </Form.Group>
    </Form>
    <Button variant="primary" onClick={handleSubmit}>
            Submit
    </Button>
    </Base>
  )
}

export default CreatePost
