import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import tareasReducer from '../features/tareas/tareasSlice'

export const store  = configureStore({
    reducer: {
        auth: authReducer,
        tarea: tareasReducer
    }
})