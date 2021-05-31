import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/DashBoard")
     


    } 
    catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  function loginТwo(){

   
    let uname = emailRef.current.value;
    let pwd = passwordRef.current.value;
    
    if(uname ==='admin@gmail.com'&&pwd==='123456789')
		{
	          alert('Hello,Admin!Press ok to be redirected to the admin panel.');
                  //Redirecting to other page or webste code or you can set your own html page.
          
           window.location.href = "https://console.firebase.google.com/u/1/project/form-5a270/authentication/users";
         // history.push("https://console.firebase.google.com/u/1/project/form-5a270/authentication/users")
		}
    else{alert("fail");}


  }

  return (
    <>


      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
           
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="Signup">Sign Up</Link>
      </div>
      <button onClick={loginТwo}>Admin log in</button>
     
    </>
  )
}