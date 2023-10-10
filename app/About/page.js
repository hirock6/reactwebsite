import Link from 'next/link'
import React from 'react'
const page = ()=>{
  return(
    <>
    <div>Hellow world 
      <Link className='ml-4 border-2 border-cyan-300 bg-red-700 text-white' href="/Go">Sumnh</Link>
    </div>
    </>
  )
}
export default page