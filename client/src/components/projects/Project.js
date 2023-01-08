import React from 'react'

const Project = ({ project }) => {
  return (
    <li className='d-flex'>
      <button
        className='btn btn-link'
      >{project.name}
      </button>
    </li>
  )
}

export default Project
