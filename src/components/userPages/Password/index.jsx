import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
import { useDispatch } from "react-redux";
import { updateUsers } from "../../../redux/Auth/Slice";
import { handleToast } from "../../../../toast";
 




const Password = () => {
    const userData = JSON.parse(localStorage.getItem('IsLoginData'));
    const dispatch=useDispatch()
 
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
 
  
    

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }

    const togglePassword = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

     


    
 
    

    const handlePasswordSubmit = (e) => {
        e.preventDefault();

      dispatch(updateUsers({values:{password:passwordInput},editId:userData?._id}))

      dispatch(handleToast('Password update success', 'success'));
    }

    return (
        <>
  
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Password</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                    Password
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Dashboard Content */}
            <div className="dashboard-content">
                <div className="container">
                    <div className="">
                    <ul className="dashborad-menus">
                        <li >
                                <Link to="/profile">
                                    <i className="fa-solid fa-user" /> <span>Profile</span>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to="/password">
                                    <i className="feather-grid" /> <span>Password</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/login">
                                    <i className="fas fa-light fa-circle-arrow-left" />{" "}
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dashboard-details">
                        <div className="row">
                        <div className="col-lg-12">
                                <div className="profile-sidebar">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Change Password</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handlePasswordSubmit}>
                                                <div className="form-group">
                                                    <label className="col-form-label">Current Password</label>
                                                    <div className="pass-group group-img">
                                                        <span className="lock-icon">
                                                            <i className="feather-lock" />
                                                        </span>
                                                        <input
                                                            type="password"
                                                            className="form-control pass-input"
                                                            placeholder="Current Password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">New Password</label>
                                                    <div className="pass-group group-img">
                                                        <span className="lock-icon">
                                                            <i className="feather-lock" />
                                                        </span>
                                                        <input
                                                            type={passwordType}
                                                            className="form-control pass-input"
                                                            value={passwordInput}
                                                            onChange={handlePasswordChange}
                                                        />
                                                        <span className={`toggle-password ${passwordType === "password" ? "feather-eye" : "feather-eye-off"}`} onClick={togglePassword} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">Confirm New Password</label>
                                                    <div className="pass-group group-img">
                                                        <span className="lock-icon">
                                                            <i className="feather-lock" />
                                                        </span>
                                                        <input
                                                            type={passwordType}
                                                            className="form-control pass-input"
                                                            value={passwordInput}
                                                            onChange={handlePasswordChange}
                                                        />
                                                        <span className={`toggle-password ${passwordType === "password" ? "feather-eye" : "feather-eye-off"}`} onClick={togglePassword} />
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary" type="submit">Change Password</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* /Dashboard Content */}
            
        </>

    );
}
export default Password;