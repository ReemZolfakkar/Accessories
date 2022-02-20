import React,{createContext,useState} from 'react'
export const myContext=createContext();
function MyContextProvider(props) {
    const [data,setData]=useState(333)
    return (
        <myContext.Provider value={data}>
            {props.children}
        </myContext.Provider>
    )
}
export default MyContextProvider;

