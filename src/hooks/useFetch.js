import { useEffect,useState } from "react";
import axios from "axios";
import { makeRequest } from "../makeRequest";


const useFetch = (url)=>{
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(false);

    useEffect(()=>{
        const fetch = async () => {
            try {
                setLoading(true);
                const response = await makeRequest.get(url);
                console.log("Data -> ", response);
                setData(response.data?.data);
            } catch (error) { 
                setError(true);
                console.log(error);
            }
            setLoading(false);
        }
        fetch();
    },[url]);

    return {data,loading,error}
};

export  default useFetch;


//process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
