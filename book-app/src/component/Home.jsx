import { useState , useEffect } from "react";
import axios from "axios"
import Pagination from '@mui/material/Pagination';

import Items from './Items'
export default function Home () {
const [page,setpage]=useState()    
const [data,setdata]=useState([])

const handleChange = (event, value) => {
  setpage(value);
};

const getdata =async () =>{
    const url1=`//127.0.0.1:8000/api/v1/book?page=${page}&limit=100`
try {
  const res= await axios({
    method: "GET" , 
    url: url1
  })
  setdata(res.data.data.data)
}

catch(err){
console.log(err)
}
}

useEffect (()=>{
getdata();

},[page])


console.log(data)
return (
    <>
    <div>
      
    </div>
    <div className="mt-3 ">
            <Items  data={data}  />
    </div>
    <div className=" flex justify-center">
    <Pagination shape="rounded"  onChange={handleChange} count={620} size="large"  color="secondary" 
    variant="outlined" />
    </div>
    </>
)
}