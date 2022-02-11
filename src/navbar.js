import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Navbar = ()=>{
    return <nav>
        <div className="nav-center">
            <h1>Ricardo's <span>shop</span></h1>
            <ul className="nav-list">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/"><BiSearch/></a>
                </li>
            </ul>
        </div>
    </nav>
}
export default Navbar