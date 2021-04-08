import React from 'react'

export default function SignUpForm({user, setUser, signUp}) {

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signUp(user)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>Username:</label>
            <input name="username" value={user.username} onChange={handleChange}/>
            <label>First Name</label>
            <input name="firstName" value={user.firstName} onChange={handleChange}/>
            <label>Last Name:</label>
            <input name="lastName" value={user.lastName} onChange={handleChange} />
            <label>Password:</label>
            <input name="password" type="password" value={user.password} onChange={handleChange} />
            <input type="submit" value="Register" />
        </form>
    )
}
