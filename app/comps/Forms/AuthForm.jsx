'use client'
import { signinWithGoogle } from '@/utils/actions'
import React from 'react'

const AuthForm = () => {
    return (
        <div>
            <form>
                <button className='btn' formAction={signinWithGoogle}>Sign in with Google</button>
            </form>
        </div>
    )
}

export default AuthForm
