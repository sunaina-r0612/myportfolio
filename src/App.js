import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Home'
import './index.css'
import React from 'react';
import { Container } from 'react-bootstrap';
import sr from "./assets/sr.png";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter , Route, Link, NavLink } from 'react-router-dom';
import {Switch} from 'react-router'
import Work from './components/WorkExperience'
import Art from './components/Artwork'
import Achieve from './components/Achievements';
import Contact from './components/Contact';
import Free from './components/Freelancework';
import Project from './components/Projects';
const resume_URL = 'http://localhost:3000/Sunaina_Rustagi_Resume.pdf'

function App() {


  {/***************************** NavBar *************************************/}


  const downloadFileAtURL = (url)=>{
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download',fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
}

const navigation = [
{name: 'Home', href:'Home.js'},
{name: 'WorkEx', href:'WorkExperience.js'},
{name: 'Projects', href:'Projects.js'},
{name: 'Achievements', href:'Achievements.js'},
{name: 'Artwork', href:'Artwork.js'},
{name: 'Freelance', href:'Freelancework.js'}
]

return (
<>
<Container>
<nav className="navbar navbar-expand-lg navbar-dark" variant="dark">

    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src={sr} style={{width: '50px'}}></img></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <BrowserRouter>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink exact to="./components/Home" class="nav-link">Home</NavLink>
          </li>
          <li class="nav-item"> 
            <NavLink exact to="./components/WorkExperience" class="nav-link">Work Experience</NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact to="./components/Projects" class="nav-link">Projects</NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact to="./components/Achievements" class="nav-link">Achievements</NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact to="./components/Artwork" class="nav-link">Art Work</NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact to="/components/Freelancework" class="nav-link">Freelance work</NavLink>
          </li>
          <li class="nav-item">
            <NavLink exact to="./components/Contact" class="nav-link">Contact me</NavLink>
          </li>
        </ul>
        <button type="button" class="btn " style={{backgroundColor: '#FDE0D9'}} onClick={()=>{downloadFileAtURL(resume_URL)}}>Download my CV</button>
        
        <Switch>
          <Route path="/" element={<Banner/>}/>
          <Route path="./components/WorkExperience" Component={Work}/>
          <Route path="./components/Artwork" Component={Art}/>
          <Route path="./components/Achievements" Component={Achieve}/>
          <Route path="./components/Freelancework" Component={Free}/>
          <Route path="./components/Projects" Component={Project}/>
          <Route path="./components/Contact" Component={Contact}/>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
    </nav>
    </Container>
    {/***************************** Footer *************************************/}

    {/***************************** Footer *************************************/}

    <div class='social'>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='https://twitter.com/SunainaRustagi'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/sunaina.rustagi/?utm_source=qr'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/sunaina-rustagi-48848b205/'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='https://www.youtube.com/channel/UC9-kdskW4iNjDWoCrI2WNKg'>
        <MDBIcon fab icon='youtube' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#481449' }} href='https://medium.com/@sunainarustagi1101'>
        <MDBIcon fab icon='medium' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/sunaina-r0612'>
        <MDBIcon fab icon='github' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ec4a89' }} href='https://leetcode.com/sunaina06292002/'>
        <MDBIcon fab icon='leetcode' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ff4500' }} href='https://www.codechef.com/users/sunaina_02'>
        <MDBIcon fab icon='codechef' />
      </MDBBtn>
      </div>
</>
  );
}

export default App;
