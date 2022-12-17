import React,{useState,useEffect} from "react";


export const AuthContext = React.createContext();



function AuthContextProvider({children}) {

    const [state, setState] = useState({isAuth:false, token:null});

    const login=(token)=>{
        setState({...state,isAuth:true,token})
    }

    const logout=()=>{
        setState({...state,isAuth:false})
    }

    return(
        <AuthContext.Provider value={{newState:state,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;
