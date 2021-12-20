import React, { useEffect } from 'react'
import { AuthConsumer } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ path, component}) {
    const { token } = AuthConsumer()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!token) {
            navigate(path)
        }
    }, [token])

    return component
}

export default PrivateRoute
