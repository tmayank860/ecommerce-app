import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div class="flex flex-row-reverse space-x-8 w-100% h-24 space-y-8 bg-red-500">
        <div>Sign In</div>
        <div>Products</div>
        <div>About</div>
        <div>
        <Link className="Nav__link" to="/">Home</Link>

            
            </div>
    </div>
  )
}

export default NavBar