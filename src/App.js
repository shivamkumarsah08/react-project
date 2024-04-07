import Jsx,{Greet} from"./containers/Jsx";
import Databinding from "./containers/Databinding";
import Users from './containers/Users'
import{Routes,NavLink,Route} from 'react-router-dom';

function App(){
  return(
    <div>
      <div className="container">
       <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li>
            <NavLink className="nav-link"to="/users">users</NavLink>
          </li>
          <li>
            <NavLink className="nav-link"to="/binding">Databinding</NavLink>
          </li><li>
            <NavLink className="nav-link"to="/">Jsx</NavLink>
          </li>
        </ul>
       </nav>
       <Routes>

          <Route path="/" element={<Jsx/>}></Route>
          <Route path="/binding" element={<Databinding/>}></Route>
          <Route path="/users" element={<Users/>}></Route>

       </Routes>
    </div>
    </div>
  )     
   
}
export default App;