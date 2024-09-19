import { useEffect,useState } from "react";
import { featchDataFromApi } from '../utils/api';

const useFetch=(endpoint)=>{
    const[data,setData]=useState();

    useEffect( ()=>{
       makeApiCall()
    },[endpoint])

    const makeApiCall=async ()=>{
        const res=await featchDataFromApi(endpoint)
        setData(res);
    };
    return {data};
};
export default useFetch;