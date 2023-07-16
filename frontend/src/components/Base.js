import React from 'react'
import NavBar from './NavBar'

const Base = ({
  title = "My Title",
  description = "",
  className = "base text-white p-4",
  children
}) => {
  return (
    <div>
      <NavBar/>
      <div className='container-fluid base'>
        <div className='jumbotron base text-white text-center'>
          <h2 className='display-4'>{title}</h2>
          <p className='lead'>{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className='footer base mt-auto py-3'>
        <div className='container-fluid base text-white text-center py-3'>
          <h4>Career Launch ©</h4>
          <button className='btn baseButton btn-lg'>Contact Us</button>
          <div className='container'>
            <span className='text-white'>Let your career find you</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Base
