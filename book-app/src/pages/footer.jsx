export default function  Footer (){
    return (
        <>
        <div className="flex justify-center mt-3 bg-gray-600 text-center p-3 h-1/6 ">
            <p className=" capitalize text-l    ">maded by</p>
            <a href="/" target="blanck">ahmed</a> 

            <p class="text-center text-gray-500 text-xs">
    &copy;{Date.now()} Acme Corp. All rights reserved.
  </p>
        </div>
        </>
    )
}