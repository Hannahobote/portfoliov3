import React from 'react'
import { Link } from 'react-router-dom';
// import ComingSoon from './ComingSoon.js'

function Mynavbar() {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 my-2 mx-2 border-bottom">
      <Link to="/" className="d-flex align-items-center text-dark text-decoration-none"><span class="fs-4">imhannaho</span></Link>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto mx-2 mt-2">
        <Link class="me-3 py-2 text-dark text-decoration-none" to="/">Home</Link>
        <Link class="me-3 py-2 text-dark text-decoration-none" to="/comingsoon">About</Link>
        <Link class="me-3 py-2 text-dark text-decoration-none" to="/comingsoon">Projects</Link>
      </nav>
    </div>
  )
}

export default Mynavbar
