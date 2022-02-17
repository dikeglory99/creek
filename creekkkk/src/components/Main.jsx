import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Register from './Register';
import Footer from "./Footer";
import Forms from "./Forms";
import Icons from "./Icons";

const Main = () => {
    return ( 
        
        <div className="main__container">
        <div className="main__box">
            <div className="main__content">
            <Icons/>

        <Router>
            <Forms/>
        
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
         </Router>

            </div>
            <Footer/>
        </div> 
        </div>

             

       
     );
}
 
export default Main;