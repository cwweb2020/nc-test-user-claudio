import { useState } from 'react'
import {AuthConsumer} from '../context/AuthProvider'
import { Mybutton } from '../styledComponents/Mybutton'

function LoginContainer() {
    const {login} = AuthConsumer()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })


    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(credentials)
    }

    return (
        <>
          <section className='login-total'>
            <form className='form-label' onSubmit={handleSubmit}>
               <p>Username</p>
               <input type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="form-control mb-4"
                />
                <p>Password</p>
               <input type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="form-control mb-3"
                />
                <Mybutton style={{width: "100%"}} Bc="blue" type="submit">Sign In</Mybutton>
            </form>
         </section>
        </>
    )
}

export default LoginContainer
