import React from 'react'

export default function ProductDetailsLayout({
    children,
}
:{children:React.ReactNode}) {
  return (
    <div>
        {children}
        <h2>Featured Products</h2>
    </div>
  )
}
