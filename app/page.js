"use client"
import React,{useState} from 'react'
import Header from '@/Components/Header'
const page = ()=>{
  const [marks , setMarks] = useState(80)
  return(
    <>
      <Header/>
      <div class="page-1">{marks}</div>
      <div class="page-2">page-2</div>
      <div class="page-3">page-3</div>
    </>
  )
}
export default page