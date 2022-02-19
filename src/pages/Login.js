import React, { useContext, useState } from 'react'
import Header from '../components/Header';
import { login } from '../http/userApi';
import { Context } from '../index';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
    //const { user } = useContext(Context)
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleLogin = async (event) => {
    //     event.preventDefault();
    //     let data;
    //     try {
    //         data = login(email, password);
    //         user.setUser(data)
    //         user.setIsAuth(true)
    //         history.push("/dashboard");
    //     } catch {
    //         alert("Something went wrong :(, please try again");
    //     }
    // }

    return (
        <div>
            <div className='d-flex text-center text-white bg-dark'>
                <div className='cover-container d-flex w-100 p-3 mx-auto flex-column'>
                    <header>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h5 className="float-md-start mb-0">Re Vera</h5>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <Link className="nav-link" to="/" >Home</Link>
                                <Link className="nav-link active" to="/login">Login</Link>
                                <Link className="nav-link" to="/register">Register</Link>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
            <div className='text-center mt-5'>
                <div className='form-center'>
                    <form autoComplete="new-password" >
                        <img class="mb-4" src="/user.png" alt="" width="86" height="86" />
                        <h1 class="font-bold h3 mb-3 fw-normal" style={{ fontWeight: 700 }}>Sign in</h1>

                        <div class="form-floating mb-2">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                autoComplete="new-password"
                                placeholder="name@example.com"
                                value={email}
                                onInput={e => setEmail(e.target.value)} />

                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-5">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                autoComplete="new-password"
                                placeholder="Password"
                                value={password}
                                onInput={e => setPassword(e.target.value)} />

                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="checkbox mb-4">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;