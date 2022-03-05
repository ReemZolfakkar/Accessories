import { useEffect, useState } from "react"

const ManageData=(url)=>
{
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(null);
    const [errors,setError]=useState(null);
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=>{
                    setIsPending(false);
                    setError(err.message);
            })
        },0);
    return {data,isPending,errors}
}
export default ManageData;