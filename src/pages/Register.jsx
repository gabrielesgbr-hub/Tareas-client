import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { toast } from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
    const [formData, setFormData] = useState({
        nombre:'',
        email:'',
        password:'',
        password2:'',
    })

    const {nombre, email, password, password2} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/login')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error("las contraseñas no coinciden")
        } else {
            const userData = {
                nombre,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    if(isLoading) {
            return <Spinner />
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
                    <input name="nombre" type="text" className='form-control' id='nombre' value={nombre} placeholder='Por favor ingresa tu nombre :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input name="email" type="email" className='form-control' id='email' value={email} placeholder='Por favor ingresa tu email :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input name="password" type="password" className='form-control' id='password' value={password} placeholder='Por favor ingresa tu contraseña :3' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input name="password2" type="password" className='form-control' id='password2' value={password2} placeholder='Por favor confirma tu contraseña :3' onChange={onChange} />
                </div>
                <button type='submit' className="btn btn-block">
                    Registrate
                </button>
            </form>
        </section>
    </>
  )
}

export default Register