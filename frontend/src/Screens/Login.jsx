import {useState} from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }} >
    <h1 style={{ fontSize: '4vw', fontFamily: 'times new roman'}}>GENRE FINDER</h1>
    <p style={{ fontSize: '1vw', fontFamily: 'times new roman'}}>Find a movie based on your interests!</p>
    <Card classname='bg-secondary' style={{ width: '30vw', padding: '20px', borderRadius: '10px', color: 'white' }}>
        <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Title style={{ fontSize: '2vw', fontFamily: 'times new roman' }}>Log In</Card.Title>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', marginBottom: '10px', borderRadius: '5px' }} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', marginBottom: '10px', borderRadius: '5px' }} />
            <Link to="/register" style={{ color: 'white', marginBottom: '10px' }}>
            Don't have an account? Register here.
            </Link>
            <button type="button" class="btn btn-secondary">Login</button>
        </Card.Body>
    </Card> 
    </div>
  )
}

export default Login
