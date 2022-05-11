import React from 'react'
import { useParams } from 'react-router-dom'

export default function Invoice() {
    // 1. state
    let params = useParams()
    // 2. function defination
    //3. return statement
  return (
            <>
                <div>Invoice</div>
                {/* {console.log(params.invoiceId)} */}
                {params.invoiceId}
            </>
    
  )
}
