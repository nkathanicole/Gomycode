import React from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img1 from './img1.jpg.jpg'
import img2 from './img2.jpg.jpg'
import img3 from './img3.jpg.jpg'

function App(){


  return (
    <>
    <div className='APP'>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary " style={{position:'fixed',width:'100%',zIndex:'20',top:'0'}}>
  <a class="navbar-brand text-white" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white"  href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item text-white" href="#">Action</a>
          <a class="dropdown-item text-white" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled text-white" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div className='continer' style={{marginTop:'6rem', display:'flex', width:'75%', gap:'1.5rem',margin:'6rem auto'}}> 
<div className="card" style={{width: '18rem'}}>
  <img class="card-img-top" src={img1} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text text-muted">Chocolate chips with strawberry serup </p>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img class="card-img-top" src={img2} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text text-muted">Vanilla with strawberries</p>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img class="card-img-top" src={img3} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text text-muted">Vanilla with Chocolete</p>
  </div>
</div>
</div>
    </div>
    </>
  )
}

export default App
