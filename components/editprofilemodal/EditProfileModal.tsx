import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { useCookies } from 'react-cookie'
import { BiCamera } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { TfiAngleRight } from 'react-icons/tfi'
import { EditProfileStyle } from './EditProfile.styled'
import { AppContext } from '@/helpers/Helpers'
import { BsCheck2 } from 'react-icons/bs'

type Props = {}

const EditProfileModal = (props: any) => {

    const { currentUser, setCurrentUser } = useContext(AppContext)
    
    const [activeInput, setActiveInput] = useState<boolean>(false)
    const [currentActiveInput, setCurrentActiveInput] = useState<any>()
    const [emptyInput, setEmptyInput] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [bio, setBio] = useState<string>("")
    const [location, setLocation] = useState<string>("");
    const [links, setLinks] = useState<string>("");
    const [profilePic, setProfilePic] = useState<string>("")
    const [coverPhoto, setCoverPhoto] = useState<string>("")
    const [birthday, setBirthday] = useState<string>("")
    const [currentDay, setCurrentDay] = useState<string>("19")
    const [currentMonth, setCurrentMonth] = useState<string>("April")
    const [currentYear, setCurrentYear] = useState<string>("2023")
    const [editDateActive, setEditDateActive] = useState<boolean>(false)
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

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
         setUploadSuccess(true);
         setTimeout(() => {
            setUploadSuccess(true)
        }, 3000)
    // setCurrentUser({ ...currentUser?.profilePic , ...profilePic})
    };

    const uploadCoverImage = async (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    await axios
    .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
    .then((res) => setCoverPhoto(res.data.url))
            .catch((err) => console.log(err));
        setUploadSuccess(true);
        setTimeout(() => {
            setUploadSuccess(false)
        }, 3000)
    // setCurrentUser({ ...currentUser?.coverPhoto , coverPhoto})
    };
    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        // setBirthday()
        const updatedUser = {
            userId: currentUser?._id,
            username: username.length > 1 ? username : currentUser?.username,
            bio: bio.length > 1 ? bio : currentUser?.bio,
            location: location.length > 1 ? location : currentUser?.location,
            links: links.length > 1 ? links : currentUser?.links,
            profilePic: profilePic.length > 1 ? profilePic : currentUser?.ProfilePic,
            coverPhoto: coverPhoto.length > 1 ? coverPhoto : currentUser?.coverPhoto,
            birthday: `${currentMonth} ${currentDay} ${currentYear}`,
        };
        try {
            await axios.put(`https://twitter-clone-server-nu.vercel.app/api/users/${currentUser?._id}`, updatedUser)
            .catch((err) => console.log(err))
            setUsername("")
            setBio("")
            setLocation("")
            setLinks("")
            setEditDateActive(false)
            setCurrentUser({ ...currentUser, updatedUser })
            props.setEditProfileModal(false)
            } catch (err) {
            console.log(err);
        }
    }

    const handleMonth = (e:any) => {
        setCurrentMonth(e.target.value)
    }

    const handleDay = (e:any) => {
        setCurrentDay(e.target.value)
    }
    const handleYear = (e:any) => {
        setCurrentYear(e.target.value)
    }

    // console.log(props.userProfile);
    // console.log(profilePic);
    
    
    return (
        <EditProfileStyle>
            <div className="modalContainer" >
          <form onSubmit={handleSubmit} >
              <div className="formNavHeader" >
              <div className='flexNavHeader' >
              <span onClick={() => props.setEditProfileModal(false)} >{<MdClose cursor= 'pointer' />} </span>
                  <h1>Edit profile </h1>
                        </div>
                        {uploadSuccess ? <p>Image has been uploaded {<BsCheck2/>} </p> : "" }
                  <button className="submitBtn"type="submit" >Save </button>
              </div>
              <div className='editProfileImg' >
                    <div style={{ backgroundImage: `url(${currentUser?.coverPhoto})` }} className='coverBg' >
                        <div className='uploadCoverPhoto' >
                                <label htmlFor='fileCover' className='camera' style={{ borderRadius: '50%', padding: 20}} >{<BiCamera fontSize={30} cursor='pointer' />} </label>
                                <input  onChange={(e:any) => uploadCoverImage(e.target.files)} type='file' id='fileCover' style={{ display: 'none' }} />
                                <label htmlFor='fileRemove' onClick={() => setProfilePic("")} className='camera' style={{ borderRadius: '50%', padding: 20}} >{<MdClose fontSize={30} cursor='pointer' />} </label>
                                <input onChange={(e:any) => uploadCoverImage("")} id='fileRemove' style={{ display: 'none' }} />
                        </div>
                  </div>
                  <div style={{ backgroundImage: `url(${currentUser?.profilePic})` }} className='profilePicBg' >
                      <label htmlFor='fileDp' className='camera' style={{ borderRadius: '50%', padding: 20}}>{<BiCamera fontSize={30} cursor='pointer' />} </label>
                      <input onChange={(e:any) => uploadImage(e.target.files)} type='file' id='fileDp' style={{ display: 'none'}}/>
                  </div>
              </div>
              <div className='labelContainer' >
                        <div className={currentActiveInput == 0 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Name </label>
                                {currentActiveInput == 0 ? <span> {username.length} / { maxNameLength} </span> : ""}
                                </div>
                      <input onChange={(e:any) => setUsername(e.target.value) } value={username} onClick={() => setCurrentActiveInput(0)} maxLength={maxNameLength} type='text' placeholder={currentUser?.username}/>
                        </div>
                        
                        <div className={currentActiveInput == 1 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Bio </label>
                                {currentActiveInput == 1 ? <span>  {bio.length} / { maxBioLength} </span> : ""}
                                </div>
                      <input onChange={(e: any) => setBio(e.target.value)} value={bio} onClick={() => setCurrentActiveInput(1)} maxLength={maxBioLength} type='text' placeholder={currentUser?.bio} />
                      </div>
                        <div className={currentActiveInput == 2 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Location </label>
                                {currentActiveInput == 2 ? <span>  {location.length} / { maxLocationLength} </span> : ""}
                                </div>
                            <input onChange={(e: any) => setLocation(e.target.value)} value={location} onClick={() => setCurrentActiveInput(2)} maxLength={maxLocationLength} type='text' placeholder={currentUser.location} />
                      </div>
                        <div className={currentActiveInput == 3 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Website </label>
                                {currentActiveInput == 3 ? <span>  {links.length} / { maxWebsiteLength} </span> : ""}
                                </div>
                            <input onChange={(e: any) => setLinks(e.target.value)} value={links} onClick={() => setCurrentActiveInput(3)} maxLength={maxWebsiteLength} type='text' placeholder={currentUser?.links} />
                        </div>
                        
                    </div>
                    <div className="dateOfBirthCon"  >
                        <p>Birth date  {editDateActive ?<span onClick={() => setEditDateActive(false)} >Cancel </span> : <span onClick={() => setEditDateActive(true)} >Edit </span>}</p>
                       
                        
                        {editDateActive ? <div className='editBirth' >
                        <div className='editMonth' >
                            <p>Money </p>
                                <select onChange={handleMonth} className='month' >
                            <option value='January' >January </option>
                            <option value='February' >February </option>
                            <option value='March' >March </option>
                            <option value='April'>April </option>
                            <option value='may' >May </option>
                            <option value='June' >June</option>
                            <option value='July' >july </option>
                            <option value='August' >August </option>
                            <option value='September'>September </option>
                            <option value='October'>October </option>
                            <option value='November'>November </option>
                            <option value='December'>December </option>
                            </select>
                        </div>
                        <div className='editDay' >
                            <p>Day </p>
                        <select onChange={handleDay} className='day' >
                            <option value='1' >1</option>
                            <option value='2' >2</option>
                            <option value='3' >3</option>
                            <option value='4'>4</option>
                            <option value='5' >5</option>
                            <option value='6' >6</option>
                            <option value='7' >7</option>
                            <option value='8' >8</option>
                            <option value='9' >9</option>
                            <option value='10'>10</option>
                            <option value='11' >11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                            <option value='24'>24</option>
                            <option value='25'>25</option>
                            <option value='26'>26</option>
                            <option value='27'>27</option>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>
                            <option value='31' >31</option>
                            </select>
                        </div>
                        <div className='editYear' >
                            <p>Year </p>
                        <select onChange={handleYear} className='year' >
                            <option value='1990' >1990 </option>    
                            <option value='1991' >1991 </option>    
                            <option value='1992' >1992 </option>    
                            <option value='1993' >1993 </option>    
                            <option value='1994' >1994 </option>    
                            <option value='1995' >1995 </option>    
                            <option value='1996' >1996 </option>    
                            <option value='1997' >1997 </option>    
                            <option value='1998' >1998 </option>    
                            <option value='1999' >1999 </option>    
                            <option value='2000' >2000 </option>    
                            <option value='2001' >2001 </option>    
                            <option value='2002' >2002 </option>    
                            <option value='2003' >2003 </option>    
                            <option value='2004' >2004 </option>    
                            <option value='2005' >2005 </option>    
                            </select>
                            </div>
                        </div> : <h1>{currentUser.birthday}</h1>}
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