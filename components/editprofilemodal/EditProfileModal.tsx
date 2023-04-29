import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { BiCamera } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { TfiAngleRight } from 'react-icons/tfi'
import { EditProfileStyle } from './EditProfile.styled'

type Props = {}

const EditProfileModal = (props: any) => {
    const [activeInput, setActiveInput] = useState<boolean>(false)
    const [currentActiveInput, setCurrentActiveInput] = useState<any>()
    const [emptyInput, setEmptyInput] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [bio, setBio] = useState<string>("")
    const [location, setLocation] = useState<string>("");
    const [links, setLinks] = useState<string>("");
    const [profilePic, setProfilePic] = useState<string>("")
    const [coverPhoto, setCoverPhoto] = useState<string>("")

    
    const maxNameLength = 50;
    const maxBioLength = 160;
    const maxLocationLength = 30;
    const maxWebsiteLength = 100;

     const uploadImage = async (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    await axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
      .then((res) => setProfilePic(res.data.url))
      .catch((err) => console.log(err));
    props.setUserProfile({ ...props.userProfile , ...formData})
    };

    const uploadCoverImage = async (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    await axios
    .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
    .then((res) => setCoverPhoto(res.data.url))
    .catch((err) => console.log(err));
    props.setUserProfile({ ...props.userProfile , ...formData})
    };
    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const updatedUser = {
            userId: props.userProfile?._id,
            username: username.length > 1 ? username : props.userProfile?.username,
            bio: bio.length > 1 ? bio : props.userProfile?.bio,
            location: location.length > 1 ? location : props.userProfile?.location,
            links: links.length > 1 ? links : props.userProfile?.links,
            profilePic: profilePic.length > 1 ? profilePic : props.userProfile?.ProfilePic,
            coverPhoto: coverPhoto.length > 1 ? coverPhoto : props.userProfile?.coverPhoto,
        };
        try {
            await axios.put(`http://localhost:7000/api/users/${props.userProfile?._id}`, updatedUser)
            .catch((err) => console.log(err))
            setUsername("")
            setBio("")
            setLocation("")
            setLinks("")
            props.setUserProfile({ ...props.userProfile, ...updatedUser })
            props.setEditProfileModal(false)
            } catch (err) {
            console.log(err);
        }
    }
    
    // console.log(props.userProfile);
    // console.log(profilePic);
    
    return (
        <EditProfileStyle>
            <div className="modalContainer" >
          <form onSubmit={handleSubmit} >
              <div className="formNavHeader" >
              <div className='flexNavHeader' >
              <span onClick={() => props.setEditProfileModal(false)} >{<MdClose fontSize={35} cursor= 'pointer' />} </span>
                  <h1>Edit profile </h1>
                  </div>
                  <button className="submitBtn"type="submit" >Save </button>
              </div>
              <div className='editProfileImg' >
                    <div style={{ backgroundImage: `url(${props.userProfile?.coverPhoto})` }} className='coverBg' >
                        <div className='uploadCoverPhoto' >
                                <label htmlFor='fileCover' className='camera' style={{ borderRadius: '50%', padding: 20}} >{<BiCamera fontSize={35} cursor='pointer' />} </label>
                                <input  onChange={(e:any) => uploadCoverImage(e.target.files)} type='file' id='fileCover' style={{ display: 'none' }} />
                                <label htmlFor='fileRemove' onClick={() => setProfilePic("")} className='camera' style={{ borderRadius: '50%', padding: 20}} >{<MdClose fontSize={35} cursor='pointer' />} </label>
                                <input onChange={(e:any) => uploadCoverImage("")} id='fileRemove' style={{ display: 'none' }} />
                        </div>
                  </div>
                  <div style={{ backgroundImage: `url(${props.userProfile?.profilePic})` }} className='profilePicBg' >
                      <label htmlFor='fileDp' className='camera' style={{ borderRadius: '50%', padding: 20}}>{<BiCamera fontSize={35} cursor='pointer' />} </label>
                      <input onChange={(e:any) => uploadImage(e.target.files)} type='file' id='fileDp' style={{ display: 'none'}}/>
                  </div>
              </div>
              <div className='labelContainer' >
                        <div className={currentActiveInput == 0 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Name </label>
                                {currentActiveInput == 0 ? <span> {username.length} / { maxNameLength} </span> : ""}
                                </div>
                      <input onChange={(e:any) => setUsername(e.target.value) } value={username} onClick={() => setCurrentActiveInput(0)} maxLength={maxNameLength} type='text' placeholder={props.userProfile?.username}/>
                        </div>
                        
                        <div className={currentActiveInput == 1 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Bio </label>
                                {currentActiveInput == 1 ? <span>  {bio.length} / { maxBioLength} </span> : ""}
                                </div>
                      <input onChange={(e: any) => setBio(e.target.value)} value={bio} onClick={() => setCurrentActiveInput(1)} maxLength={maxBioLength} type='text' placeholder={props.userProfile?.bio} />
                      </div>
                        <div className={currentActiveInput == 2 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Location </label>
                                {currentActiveInput == 2 ? <span>  {location.length} / { maxLocationLength} </span> : ""}
                                </div>
                            <input onChange={(e: any) => setLocation(e.target.value)} value={location} onClick={() => setCurrentActiveInput(2)} maxLength={maxLocationLength} type='text' placeholder={props.userProfile.location} />
                      </div>
                        <div className={currentActiveInput == 3 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Website </label>
                                {currentActiveInput == 3 ? <span>  {links.length} / { maxWebsiteLength} </span> : ""}
                                </div>
                            <input onChange={(e: any) => setLinks(e.target.value)} value={links} onClick={() => setCurrentActiveInput(3)} maxLength={maxWebsiteLength} type='text' placeholder={props.userProfile?.links} />
                        </div>
                        
                    </div>
                    <div className='editBirth' >
                        <p>Birth date  <span>Edit </span></p>
                        <h1>April 19, 1999 </h1>
                    </div>
                    <ul>
                        <h1>Switch to professional </h1>
                        <span> {<TfiAngleRight />}</span>
                    </ul>
                </form>
                </div>
            </EditProfileStyle>
  )
}


    export default EditProfileModal