import React from "react";
import Application from "./Application";
import 'bootstrap/dist/css/bootstrap.css';
import { API } from "../backend";
import axios from "axios";


const Post = ({post}) => {

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`${API}jobpost/${postId}`);
      console.log('Response:', response.data);
      // Handle the successful response here
    } catch (error) {
      console.error('Error:', error.response.data);
      // Handle the error response here
    }
  };


  const handleSave = async (postId) => {
    try {
      const response = await axios.put(`${API}jobpost/${post.id}`);
      const jobPost = response.data;
      console.log('Response:', response.data);

      const updatedSavedStatus = !jobPost.saved;
      await axios.put(`${API}jobpost/${postId}`, { saved: updatedSavedStatus });
      console.log('Saved status updated successfully');
    }
    catch (error) {
      console.error('Error:', error.response.data);
    }
  }


  return (
    <div className="card text-dark bg-light border-dark" >

      <div className="postheader card-header bg-secondary lead mb-2 border-primary" >{post.company}: {post.title}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={() => handleDelete(post.id)} type="button" className="btn btn-danger">X</button>
          {/* <button onClick={handleSave} type="button" className="btn btn-danger">X</button> */}
        </div>
      </div>
      <div className="p-2 lead">Location: {post.location}</div>
      <div className="p-2 lead">Salary: {post.salary}</div>
      <p className="p-2 lead">Description: {post.description}</p>
      <p className="p-2 lead">
          Experience Required: {post.experience_required}
        </p>
      <div className="card-body">
        <div className="row">
          <div className="col-12 justify-content-center">
            <Application post={post}/>
            <button
              onClick={handleSave}
              className="btn btn-block btn-outline-primary m-3 justify-content-center" 
              // className="d-flex justify-content-center align-items-center"
              styles={{paddingleft:"500px"}}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post

