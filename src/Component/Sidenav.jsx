import { useState } from "react"

import {  NavLink } from "react-router-dom"

function Sidenav({children}){

    const [isOpen, setisOpen] = useState (false)

    const handleIsOpen =() =>{
        setisOpen(true)
    }

    const handlIsClose =() =>{
        setisOpen(false)
    }

    return <div>
    <  div style={{width:  isOpen  === true ?   "100px" : "" }} className="bg-purple-900 fixed overflow-hidden transition-all duration-500 text-white h-screen w-[22%]
     border-r-4 border-red-900">
         <i style={{display: isOpen === true ? "none" : "flex"}} onClick={handleIsOpen} className="fa-solid fa-xmark sm:text-4xl text-2xl text-white sm:ml-[205px] ml-[50px] mt-2"></i>
         <i style={{display: isOpen === true ? "block" : "none"}} onClick={handlIsClose} className="fa-solid fa-bars sm:text-4xl text-2xl text-white sm:ml-[1.2em] ml-[50px]  hidden"></i>
         <div style={{display: isOpen === true ? "none" : "flex"}} className="sm:ml-12 ml-2 sm:mt-10 mt-5 sm:text-2xl flex flex-col sm:gap-12 gap-6 transition-all duration-500">
              <NavLink to={"/"} className="cursor-pointer hover:underline"> <i class="fa-brands fa-microsoft"></i> Dahboard</NavLink>
              <NavLink to={"/Product"} className="cursor-pointer hover:underline"><i class="fa-brands fa-product-hunt"></i> Product</NavLink>
              <NavLink to={"/Service"} className="cursor-pointer hover:underline"><i class="fa-solid fa-bag-shopping"></i> Services</NavLink>
              <NavLink to={"/Parent"} className="cursor-pointer hover:underline"><i class="fa-solid fa-image-portrait"></i> Parent</NavLink>
              <NavLink to={"/Attendence"} className="cursor-pointer hover:underline"><i class="fa-solid fa-table-cells"></i> Attendence</NavLink>
              <NavLink tp={"/a"} className="cursor-pointer hover:underline"><i class="fa-solid fa-headphones"></i> Help</NavLink>
         </div>
       
      <div style={{display: isOpen === true ?"flex": "none"}} className="ml-10 mt-10 flex-col text-3xl gap-14 hidden">
      <i class="fa-brands fa-microsoft"></i>
      <i class="fa-brands fa-product-hunt"></i>
      <i class="fa-solid fa-bag-shopping"></i>
      <i class="fa-solid fa-image-portrait"></i>
      <i class="fa-solid fa-table-cells"></i>
      <i class="fa-solid fa-headphones"></i>
      </div>
        
    </div>

        <div className="ml-[21%] transition-all duration-500" style={{marginLeft: isOpen === true ? "50px " : ""}} >
            {children}
        </div>
</div>
   
   
}
export default Sidenav