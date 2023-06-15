import React from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

    return (
        <div>
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <img src='https://acefitfitnessstudio.com/wp-content/uploads/2022/06/acefit-logo.svg' style={{ height: '50px' }} />
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                <NavLink
                        to="/"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/training"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Training
                    </NavLink>
                    <NavLink
                        to="/nutrition"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Nutrition
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/testimonials"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Testimonials
                    </NavLink>
                    <NavLink
                        to="/contact"
                        style={({isActive}) => ({
                            color: isActive ? "#F90716" : "white"
                        })}
                    >
                        Contact Us
                    </NavLink>


                </div>


            </div>
        </div>
    )
}

export default Navbar
