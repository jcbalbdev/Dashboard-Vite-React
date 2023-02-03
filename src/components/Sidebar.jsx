import React from 'react'
import {SidebarData} from '../data/SidebarData'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const activeLink = 'hover:bg-slate-700 mt-7 pl-7 w-full h-14 flex justify-start items-center text-slate-50 text-2xl space-x-1 font-bold bg-slate-700'
    const normalLink = 'hover:bg-slate-700 pl-7 mt-7 w-full h-14 flex justify-start items-center text-slate-50 text-2xl space-x-1 font-bold'

  return (
    <React.Fragment>
    <section>
      <div className="text-slate-50">
          {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index}>
                        <NavLink to={item.path}
                        className={({ isActive }) =>
                        isActive ? activeLink: normalLink}
                      
                         >
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
  </React.Fragment>
  )
}

export default Sidebar