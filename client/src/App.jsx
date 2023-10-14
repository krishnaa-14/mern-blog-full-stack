import './App.css'
import NavBar from './NavBar'
import Posts from './Posts'
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {

  return (
    <BrowserRouter>
      <div className = "main">
          <NavBar></NavBar>
          <Routes>
            <Route exact path = "/" element = {<Posts></Posts>}> </Route>
            <Route exact path = "/register" element = {<Register></Register>}></Route>
            <Route exact path = "/login" element = {<Login></Login>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
