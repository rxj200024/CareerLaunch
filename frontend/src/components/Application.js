import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { API } from '../backend';



function Application({post}) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null,
    description: '',
    saved: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      file: file
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your data processing and API request here
    sendDataToAPI(formData);
    handleClose()
  };

  const sendDataToAPI = (data) => {
    const url = `${API}job-applications/`; // Replace with your API endpoint

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('resume', data.file);
    formData.append('cover_letter', data.description);
    formData.append('application_status', true);

    fetch(url, {
      method: 'POST',
      body: formData
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
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Application
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header  className="lead bg-light border-dark" closeButton>
          <Modal.Title>{post.company}: {post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="lead modalcolor">
          <form>Name</form>
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <form>Email</form>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <form>Resume</form>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
          />
          <form>Cover Letter</form>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </Modal.Body>
        <Modal.Footer className="lead border-dark bg-light">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Application;

