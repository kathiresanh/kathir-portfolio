import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

import IntroTemp from './IntroTemp';

function App() {
  return (
<BrowserRouter>
<div className="">
{/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      
      <Route path='/project' element={<Projects></Projects>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes> */}


      <IntroTemp></IntroTemp>

    </div>
</BrowserRouter>
  );
}

export default App;
