import { useState } from 'react'
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData = async () => {
        console.log(name, email, password)
        const result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.warn(await result.json());
    }
    return (
        <div className="register">


            <input type='text' className='feld' placeholder='enter your name' value={name}
                onChange={(e) => setName(e.target.value)} />

            <input type='text' className='feld' placeholder='enter your email' value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <input type='password' className='feld' placeholder='enter your password' value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={collectData} className='btn'>Click me </button>


        </div>
    )
}
export default Contact