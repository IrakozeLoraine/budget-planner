import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar bg-blue-900 text-white">
            <nav className="pt-4 grid md:grid-cols-2 grid-cols-1">
                <div className="flex flex-row">
                    <div>
                        <span className="px-5 py-3 font-bold coloredText">Budget-Planner</span>
                    </div>
                </div>
                <div className="text-right py-3">
                    <Link to="/" className="px-5">Home</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
