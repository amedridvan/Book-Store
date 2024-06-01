
import useStore from '../Zustand'
import { useNavigate } from "react-router-dom";
export default function  Items({data}){
const data1 =Array(data)
console.log(data)
const navigate =useNavigate();
const id2 =useStore(st =>st.updateid)

const HandleZustand =(id) =>{
   console.log(id)
   id2(id)
}
const newid=useStore(st =>st.id)
console.log(newid);


    return(
        <>
            <div className=" flex flex-row flex-wrap justify-around bg-green-800  rounded-md mb-3 overflow-y-hidden mx-2">
                {data.map((item)=>{
                    return(
                        <>
                        <div className="flex flex-col w-[18%]   bg-gray-100 border-[3px]  mb-1 rounded mx-1">
                        <div className="  w-full h-[200px]  ">
                            <button className='w-full h-[200px]'  onClick={()=> HandleZustand(item._id)}>
                            <img src={item.image} alt={item.title} className="  w-full h-full " />
                            </button>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h5 className='text-black font-bold '>{item.title}</h5>
                            <p>
                                {String(item.date).slice(0,10)}
                            </p>
                            <p>
                                {item.cover}
                            </p>
                            <p>
                                {item.author==="unknown"? "":item.author }
                            </p>
                            <>
                            </>
                        </div>
                        </div>        
                        </>
                    )
                })}
             </div>
                      
        </>
    )
}