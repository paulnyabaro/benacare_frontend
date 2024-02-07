import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="border-b-2">
        <div className="container py-3">
          <div className="flex justify-between items-center">
            <img src="/img/logo.png" alt="" width="200px" />
            <ul className="flex gap-x-8">
              <li><a href="">What We Do</a></li>
              <li><a href="">Who We Are</a></li>
              <li><a href="">Work With Us</a></li>
              <li><a href="">News & Media</a></li>
              <li><a href="/shop">Shop</a></li>
            </ul>
            <ul className="flex gap-x-8">
              <li><a href=""><i className="bi bi-person"></i> Login</a></li>
              <li><a href="" className="cart-box"><i className="bi bi-handbag"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
