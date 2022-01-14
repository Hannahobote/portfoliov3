import React from 'react'
import {Link} from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <Link to='/blog/git-basics'> git basics tutorial</Link>
      <br></br>
      my blog
    </div>
  )
}
