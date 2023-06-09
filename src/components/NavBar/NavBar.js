import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="flex flex-row-reverse space-x-14 w-100% h-24 space-y-8 bg-red-500 space-x-reverse">
      <div></div>
        <div className="text-white">Sign In</div>
        <div className="text-white">
        <Link className="Nav__link" to="/about">About</Link>
        </div>
        <div className="text-white">
        <Link className="Nav__link" to="/product">Product</Link>
        </div>
        <div className="text-white">
        <Link className="Nav__link" to="/">Home</Link>
        </div>
    </div>
  )
}

export default NavBar