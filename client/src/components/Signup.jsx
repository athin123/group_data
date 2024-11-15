import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./Signup.css"

function Signup(){
    const history=useNavigate();
    const [name, setName]= useState()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("mongodb://localhost:27017/signup",{
                name,email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    alert("User registered successfully.")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

    return(
        <div className="main-content d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text"
                        required="true"
                        placeholder="Name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0" 
                        onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text"
                        placeholder="Email"
                        autoComplete="off"
                        required="true"
                        name="email"
                        className="form-control rounded-0" 
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                        placeholder="Password"
                        name="password"
                        required="true"
                        className="form-control rounded-0" 
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-0">
                        Register
                    </button>
                    </form>
                    <br></br>
                    <p2>Already Have an account?</p2>
                    <Link to="/Login" className="btn btn-success border w-100 bg-grey rounded-0 text-decoraton-none">
                        Login
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to="/" className="btn btn-default border w-100 bg-grey rounded-0 text-decoraton-none">
                        Return
                    </Link>
            </div>
        </div>
    )
}

export default Signup;