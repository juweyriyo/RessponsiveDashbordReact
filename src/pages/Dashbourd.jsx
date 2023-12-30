import { useState } from "react"
function Dashbourd(){

    const[isClose, setClose] = useState(false)
    const handleIsClose =()=>{
        setClose(true)
    }
     return<div>
        
 <div>
    <div className="flex sm:flex-row flex-col gap-10 ml-20 justify-center pt-5">
     <div className="sm:w-[300px] w-[150px] sm:h-[200px] h-[100px] bg-sky-500 rounded"> </div>
     <div className="sm:w-[300px] w-[150px] sm:h-[200px] h-[100px] bg-purple-500 rounded"> </div>
     <div className="sm:w-[300px] w-[150px] sm:h-[200px] h-[100px] bg-orange-500 rounded"> </div>

    </div>

 </div>
     </div>
}
export default Dashbourd