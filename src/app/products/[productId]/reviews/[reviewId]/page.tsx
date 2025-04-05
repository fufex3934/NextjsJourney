import React from 'react'

export default async function ProductView(
    {params,

    }:{
        params:Promise<{productId:string,reviewId:string}>
    }
) {
    const {productId,reviewId} = await params;
  return (
    
    <div>
  <h1>Review {reviewId} for Product {productId}</h1>
    </div>
  )
}
