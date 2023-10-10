import React from 'react'
import Link from 'next/link'

const Header = ()=>{
    return(
        <div id="header" className="text-gray-800 flex justify-between px-10 bg-slate-600 text-green-100">
            <div class='header-left'><img src="https://plus.unsplash.com/premium_photo-1671038497016-9d8c725b9f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/></div>
            <div className="flex gap-6">
                <Link href="/About">About</Link>
                <Link href="/About">Descriptions</Link>
                <Link href="/About">Call Now</Link>
            </div>
        </div>
    )
}
export default Header