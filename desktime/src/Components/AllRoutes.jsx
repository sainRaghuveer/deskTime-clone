import {Routes, Route} from "react-router-dom";
import { useState } from "react";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login ";
import SignUp from "../Pages/SignUp";
import SidebarWithHeader from "../Pages/MainPage";
import Projects from "../Pages/Projects";

const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/main" element={<SidebarWithHeader/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes;



// import {Routes, Route} from "react-router-dom";
// import Home from "../Pages/HomePage";
// import Login from "../Pages/Login ";
// import SignUp from "../Pages/SignUp";


// const AllRoutes=()=>{
//     return(
//         <div>
//             <Routes>
//                 <Route path="/" element={<Home/>}></Route>
//                 <Route path="/login" element={<Login/>}></Route>
//                 <Route path="/signup" element={<SignUp/>}></Route>
//             </Routes>
//         </div>
//     )

// }

// export default AllRoutes;








