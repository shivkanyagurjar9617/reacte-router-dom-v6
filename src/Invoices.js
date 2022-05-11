import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import getInvoice from './data';

export default function Invoices() {
    // 1. state
    let invoice = getInvoice();
    //2. function defination
    // 3. return statement

  return (
      <>
        <div>Invoices</div>
        {/* {console.log(invoice)} */}
        
        {
            invoice.length > 0 &&
            invoice.map((cv,idx,arr)=>{
             /*  console.log(cv.number) */
                return <Link style={{display:"block"}}   to={`/invoices/${cv.number}`}
                key={idx}>{cv.name} </Link>

                
            })
        }
        <Outlet/>
        
      </>
    
  )
}
