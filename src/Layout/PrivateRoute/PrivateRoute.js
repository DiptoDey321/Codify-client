import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext) 
    const location = useLocation();
    if(loading){
        return (
            <div className="flex justify-center my-10">
                <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[360px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[330px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[300px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[360px] mb-2"></div>
                    <span >Loading...</span>
                </div>
            </div>
        )
    }
    if(!user){
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
    }
    return children;
}

export default PrivateRoute