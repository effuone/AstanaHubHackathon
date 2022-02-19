import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import { registration } from '../http/userApi';
import { Context } from '../index';
import { Link } from 'react-router-dom';

function Register() {
  // const { user } = useContext(Context);
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleRegister = async () => {
  //   let data;
  //   try {
  //     data = registration()
  //     user.setUser(data)
  //     user.setIsAuth(true)
  //     history.push("/dashboard")
  //   } catch {
  //     alert("Something went wrong :(");
  //   }
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
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link active" to="/register">Register</Link>
              </nav>
            </div>
          </header>
        </div>
      </div>
      <div className='text-center mt-5'>
        <div className='form-center'>
          <form autocomplete="off">
            <img class="mb-4" src="/user.png" alt="" width="86" height="86" />
            <h1 class="font-bold h3 mb-3 fw-normal" style={{ fontWeight: 700 }}>Sign in</h1>
            <div class="form-floating mb-2">
              <input type="text" class="form-control" id="floatingInput" autoComplete="new-password" placeholder='Nickname' value={name} onInput={e => setName(e.target.value)} />
              <label for="floatingInput">User name</label>
            </div>
            <div class="form-floating mb-2">
              <input type="email" class="form-control" id="floatingInput" autoComplete="new-password" placeholder="name@example.com" value={email} onInput={e => setEmail(e.target.value)} />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-5">
              <input type="password" class="form-control" id="floatingPassword" autoComplete="new-password" placeholder="Password" value={password} onInput={e => setPassword(e.target.value)} />
              <label for="floatingPassword">Create a password</label>
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

export default Register