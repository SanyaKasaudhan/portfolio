import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Sanya Kasaudhan
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>Home</li>
                        <li>services</li>
                        <li>Experience</li>
                        <li>Portfoilo</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button n-button">Contact</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar