import React from "react";
import {useState} from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import "./Login.css";
import {Link} from 'react-router-dom';


function Login()
{

    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("mongodb://localhost:27017/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/Dashboard",{state:{id:email,password}})
                }
                else if(res.data=="invalid"){
                    alert("User credentials are invalid.")
                }
                else if(res.data=="notexist"){
                    alert("User isn't registered.")
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
        <div className=" main-content d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input type="text"
                            placeholder="Email"
                            name="email"
                            className="form-control rounded-0" 
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input type="password"
                            placeholder="Password"
                            name="password"
                            className="form-control rounded-0" 
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                    </form>
                    <br></br>
                    <p2>Haven't registered an account?</p2>
                    <Link to="/register" className="btn btn-primary border w-100 bg-grey rounded-0 text-decoraton-none">
                        Register
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

export default Login;