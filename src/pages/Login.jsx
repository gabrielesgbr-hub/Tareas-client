import React, {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const {email, password} = formData

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

  return (
    <>
        <section className="heading">
            <h5><FaSignInAlt /> Login</h5>
            <p>Por ingresa tus credenciales :3</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" className='form-control' id='email' value={email} placeholder='Por favor ingresa tu email :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' id='password' value={password} placeholder='Por favor ingresa tu contraseña :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type='submit' className="btn btn-block">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login