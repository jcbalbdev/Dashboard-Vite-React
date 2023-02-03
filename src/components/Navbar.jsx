import React from "react";
import {BsBook} from 'react-icons/bs'


const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-slate-900 h-20 w-full flex items-center pl-10 space-x-4'>
            <div>
            <BsBook className='text-slate-50 text-4xl'/>
            </div>

            <div>
            <p className='text-slate-50 text-3xl'>Dashboard</p>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;