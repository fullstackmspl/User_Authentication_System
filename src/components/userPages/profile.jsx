import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { profile_img } from "../imagepath";
import { useDispatch } from "react-redux";
import { updateUsers } from "../../redux/Auth/Slice";
import { handleToast } from "../../../toast";

const ProductAdd = () => {
    const userData = JSON.parse(localStorage.getItem('IsLoginData'));
    const dispatch=useDispatch()
    const [loginUser, setLoginUser] = useState(null);
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [profileData, setProfileData] = useState({
        fullname: userData.fullname || '',
                contact_number: userData.contact_number || '',
                email: userData.email || ''
    });
    const [selectedImage, setSelectedImage] = useState(null);
    

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }

    const togglePassword = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleProfileSubmit =async (e) => {
        e.preventDefault();
 
      dispatch(updateUsers({values:profileData,editId:userData?._id}))
 

    localStorage.setItem('IsLoginData',JSON.stringify({...userData,...profileData}))
    dispatch(handleToast('Profile update success', 'success'));

    }


    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    }

    

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Handle password change logic here
        console.log("New Password:", passwordInput);
    }

    return (
        <>
            {/* Breadscrumb Section */}
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Profile</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Profile
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadscrumb Section */}
            {/* Profile Content */}
            <div className="dashboard-content">
                <div className="container">
                    <div className="">
                        <ul className="dashborad-menus">
                        <li className="active">
                                <Link to="/profile">
                                    <i className="fa-solid fa-user" /> <span>Profile</span>
                                </Link>
                            </li>
                            <li>
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
                    <div className="profile-content">
                        <div className="row dashboard-info">
                            <div className="col-lg-12">
                                <div className="card dash-cards">
                                    <div className="card-header">
                                        <h4>Profile Details</h4>
                                    </div>
                                    <div className="card-body">
                                    <div className="profile-photo">
                                <div className="profile-img">
                                    <div className="settings-upload-img">
                                        {selectedImage ? (
                                            <img src={URL.createObjectURL(selectedImage)} alt="profile" />
                                        ) : (
                                            <img src={profile_img} alt="profile" />
                                        )}
                                    </div>
                                    <div className="settings-upload-btn">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            name="image"
                                            className="hide-input image-upload"
                                            id="file"
                                            onChange={handleImageChange}
                                        />
                                        <label htmlFor="file" className="file-upload">
                                            Upload New photo
                                        </label>
                                    </div>
                                    <span>Max file size: 10 MB</span>
                                </div>
                                <Link to="#" className="profile-img-del">
                                    <i className="feather-trash-2" />
                                </Link>
                            </div>
                                        <div className="profile-form">
                                            <form onSubmit={handleProfileSubmit}>
                                                <div className="form-group">
                                                    <label className="col-form-label">Your Full Name</label>
                                                    <div className="pass-group group-img">
                                                        <span className="lock-icon">
                                                            <i className="feather-user" />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="fullname"
                                                            value={profileData.fullname}
                                                            onChange={handleProfileChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="col-form-label">Phone Number</label>
                                                            <div className="pass-group group-img">
                                                                <span className="lock-icon">
                                                                    <i className="feather-phone-call" />
                                                                </span>
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    name="contact_number"
                                                                    value={profileData.contact_number}
                                                                    onChange={handleProfileChange}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="col-form-label">
                                                                Email Address
                                                            </label>
                                                            <div className="group-img">
                                                                <i className="feather-mail" />
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="email"
                                                                    value={profileData.email}
                                                                    onChange={handleProfileChange}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary" type="submit">Update Profile</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
            {/* /Profile Content */}
        </>
    );
}

export default ProductAdd;
