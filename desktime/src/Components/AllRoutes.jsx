import {Routes, Route} from "react-router-dom";
import { useState } from "react";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login ";
import SignUp from "../Pages/SignUp";
import SidebarWithHeader from "../Pages/MainPage";

const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/main" element={<SidebarWithHeader/>}></Route>
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








