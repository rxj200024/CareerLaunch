import React, {useState, useEffect} from 'react'
import {getJobPosts} from './helper/apicalls'
import Base from './Base'
import "../styles.css"
import Post from './Post'


const Home = () => {

  const [jobPosts, setJobPosts] = useState([])
  const [error, setError] = useState(false)

  const loadAllJobPosts = () => {
    getJobPosts()
    .then(data => {
      if(data.error) {
        setError(data.error)
        console.log(error)
      } else {
        setJobPosts(data)
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    loadAllJobPosts()
  },[])

  return (
    <Base title="Career Launch" description="Launch your career today">
      {/* <h3 className='row justify-content-center'>Job Postings</h3> */}
      <div className='row justify-content-center'>
        {jobPosts.map((post, index) => {
          return(
            <div key={index} className="p-0 col-5 mb-4 bg-white text-white rounded">
              <Post post={post}/>
            </div>
          )
        })}
      </div>
    </Base>
  )
}

export default Home