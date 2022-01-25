import { Link } from 'react-router-dom';

export default function Mynavbar() {


  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link class="navbar-item" to="/">
            imhannaho
          </Link>
          {/*
          
          <Link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link> 
          */}
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/projects" className="navbar-item">Projects</Link>
            <Link to="/blog" className="navbar-item">Blog</Link>
          </div>
        </div>
      </nav>
    </>

  )
}
