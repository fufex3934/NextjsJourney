import React from 'react'
import Link from 'next/link'
export default function InnerF2() {
  return (
    <div>
        <h1>Inner F2 Page</h1>
        <div>
            <Link href={"/f5"}>F5</Link>
        </div>
    </div>
  )
}
