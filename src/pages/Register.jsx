import React, {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

const Register = () => {
    const [formData, setFormData] = useState({
        nombre:'',
        email:'',
        password:'',
        password2:'',
    })

    const {nombre, email, password, password2} = formData

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
            <h5><FaUser /> Registrar Usuario</h5>
            <p>Por favor crea un usuario :3</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className='form-control' id='nombre' value={nombre} placeholder='Por favor ingresa tu nombre :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="email" className='form-control' id='email' value={email} placeholder='Por favor ingresa tu email :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' id='password' value={password} placeholder='Por favor ingresa tu contraseña :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className='form-control' id='password2' value={password2} placeholder='Por favor confirma tu contraseña :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type='submit' className="btn btn-block">
                        Crear
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register