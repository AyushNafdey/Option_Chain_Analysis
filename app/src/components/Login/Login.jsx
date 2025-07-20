import React, { use } from 'react'
import { NavLink } from 'react-router-dom'
import google from '/images/google.svg'
import { jwtDecode } from 'jwt-decode'
import { GoogleLogin, googleLogout  } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    function handleLogout(){
        googleLogout()
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div >

            <div className="scale-110 sm:mx-auto sm:w-full sm:max-w-sm border-2 p-8 rounded-lg">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-2 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-2 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

            {/* Google sign in */}

            <div className='my-6'>
                <div className='text-xl my-5 text-center font-semibold underline'>
                    OR
                </div>

                <div className="flex items-center justify-center">
                    <GoogleLogin
                        onSuccess={(response) => {
                            navigate('/dashboard')
                        }}
                        onError={() => console.log("Login failed")}
                        auto_select = {true}
                    />
                </div>
            </div>
            <div className='mb-0'>
                <p className="text-center text-gray-500 text-lg">
                    Don't have an account ?&nbsp;
                    <NavLink className={`text-blue-400 hover:text-blue-700`}>
                        <span>Sign Up</span>
                    </NavLink>
                </p>
            </div>
            {/* </div > */}
        </>
    )
}

export default Login