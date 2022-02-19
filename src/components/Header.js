import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

function Header({ }) {
    // const { user } = useContext();

    // function signOut() {
    //     user.setUser({})
    //     user.setIsAuth(false)
    // }

    return (
        <div className='d-flex text-center text-white bg-dark'>
            <div className='cover-container d-flex w-100 p-3 mx-auto flex-column'>
                <header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="float-md-start mb-0">Re Vera</h5>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <Link className="nav-link active" to="/" >Home</Link>
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/register">Register</Link>
                        </nav>
                        {/* {user.isAuth ? 
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <Link className="nav-link active" to="/" >Home</Link>
                                <Link className="nav-link" to="/login">Login</Link>
                                <Link className="nav-link" to="/register">Register</Link>
                            </nav>
                            :
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <Link className="nav-link active" to="/" >Home</Link>
                                <Link className="nav-link" to="/login">Dashboard</Link>
                                <button onClick={signOut} className="nav-link">Sign out</button>
                            </nav>
                        } */}
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header