import React, { useState } from "react";
 
import { Link, useNavigate } from "react-router-dom";
import { apple, facebook, google } from "../imagepath";
import config, { GetKey } from "../../../config";
import { useDispatch } from "react-redux";
import { LoginAuths, setRole } from "../../redux/Auth/Slice";
 
import ButtonLoder from "../common/ButtonLoder";
import { handleToast } from "../../../toast";



const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
const [lodaer,setLoder]=useState(false)
const dispatch=  useDispatch()
  const { userProfile,IsLogin } = config;


  const navigate = useNavigate()
  const [objData,setObjData]=useState({
    email:'',
    password:''
  })

  console.log(IsLogin);
  const handlePasswordChange =(evnt)=>{
    setPasswordInput(evnt.target.value);
}

const togglePassword =()=>{
  if(passwordType==="password")
  {
   setPasswordType("text")
   return;
  }
  setPasswordType("password")
}

const loginFun = (e)=>{
    setObjData({
        ...objData,
        [e.target.id]:e.target.value
    })
}

const handleSubmit = async(e) => {
    setLoder(true)
    e.preventDefault();

 const res = await  dispatch(LoginAuths(objData))

 

if (res?.payload?.isSuccess) {
    
    const login =await res?.payload?.data  
    localStorage.setItem('IsLoginData',JSON.stringify(login))
    //   const roleRes= await dispatch(getbtIDmode({id:login?.role}))

       
 
 
    setLoder(false)
    dispatch(handleToast('Login success', 'success'));
          navigate(`/profile`);
     
}
else {
    dispatch(handleToast('Invalid email or password', 'error'))

     
    setLoder(false)

    }
     
  };
    return (
        <>


            
            {/* Login Section */}
            <div className="login-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 mx-auto">
                            <div className="login-wrap">
                                <div className="login-header">
                                    <h3>Welcome Back</h3>
                                    <p>Please Enter your Details</p>
                                </div>
                                {/* Login Form */}
                                <form action="dashboard">
                                    <div className="form-group group-img">
                                        <div className="group-img">
                                            <i className="feather-mail" />
                                            <input
                                                type="text"
                                                id="email"
                                                className="form-control"
                                                onChange={loginFun}
                                                value={objData.email}
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="pass-group group-img">
                                            <i className="feather-lock" />
                                            <input
                                                type={passwordType}
                                                id="password"

                                                className="form-control pass-input"
                                                placeholder="Password"
                                                onChange={loginFun}
                                                value={objData.password}

                                            />
                                            <span className={`toggle-password  ${ passwordType==="password"? "feather-eye":"feather-eye-off" } `} onClick={togglePassword}></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <label className="custom_check">
                                                <input
                                                    type="checkbox"
                                                    name="rememberme"
                                                    className="rememberme"
                                                />
                                                <span className="checkmark" />
                                                Remember Me
                                            </label>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="text-md-end">
                                                <Link className="forgot-link" to="/forgot-password">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>  
                                    <button  onClick={handleSubmit} className="btn btn-primary w-100 login-btn" type="submit">
                                        {lodaer ?<ButtonLoder/>:"Sign in"}
                                    </button>
                                            
                                    <div className="register-link text-center">
                                        <p>
                                            No account yet?{" "}
                                            <Link className="forgot-link" to="/signup">
                                                Signup
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="login-or">
                                        <span className="or-line" />
                                        <span className="span-or">
                                            Sign in with Social Media Accounts
                                        </span>
                                    </div>
                                    <div className="social-login">
                                        <Link to="#" className="btn btn-apple w-100">
                                            <img src={apple} className="me-1" alt="img" />
                                            Sign in with Apple
                                        </Link>
                                    </div>
                                    <div className="social-login">
                                        <Link to="#" className="btn btn-google w-100">
                                            <img src={google} className="me-1" alt="img" />
                                            Sign in with Google
                                        </Link>
                                    </div>
                                    <div className="social-login">
                                        <Link to="#" className="btn btn-facebook w-100 mb-0">
                                            <img
                                                src={facebook}
                                                className="me-2"
                                                alt="img"
                                            />
                                            Continue with Facebook
                                        </Link>
                                    </div>
                                </form>
                                {/* /Login Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>

    );
}
export default Login;