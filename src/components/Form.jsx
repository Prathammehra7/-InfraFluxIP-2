import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(data)

    }


    return (
        <form method='post' onSubmit={handleSubmit}>
            <h1>Contact <span>Here</span> </h1>
            <input type="text" name='name' id=''  onChange={handleChange} value={data.name} placeholder='Enter name' required/>
            <input type="email" name='email' id='' onChange={handleChange} value={data.email} placeholder='example@gmail.com' required/>
            <input type="number" name='phone' id='' onChange={handleChange} value={data.phone} placeholder='+91' required/>
            <textarea name="message" id="" cols="30" required onChange={handleChange} value={data.message} rows="10" placeholder='type here...' />
            <button type='submit'>send</button>
            <p>{data.name} {data.email} {data.phone} {data.message}</p>
        </form>
    )
}

export default Form