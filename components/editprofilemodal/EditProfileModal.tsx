import React, { useState } from 'react'
import { BiCamera } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { TfiAngleRight } from 'react-icons/tfi'
import { EditProfileStyle } from './EditProfile.styled'

type Props = {}

const EditProfileModal = (props: any) => {
    const [activeInput, setActiveInput] = useState<boolean>(false)
    const [currentActiveInput, setCurrentActiveInput] = useState<any>()

    const handleClick = (params:any) => {
        setCurrentActiveInput(params)
    }

    console.log(activeInput);
    
    return (
        <EditProfileStyle>
            <div className="modalContainer" >
          <form>
              <div className="formNavHeader" >
              <div className='flexNavHeader' >
              <span onClick={() => props.setEditProfileModal(false)} >{<MdClose fontSize={35} cursor= 'pointer' />} </span>
                  <h1>Edit profile </h1>
                  </div>
                  <button className="submitBtn"type="submit" >Save </button>
              </div>
              <div className='editProfileImg' >
                  <div style={{ backgroundImage: `url()` }} className='coverBg' >
                      <label htmlFor='fileCover' >{<BiCamera />} </label>
                      <input type='file' id='fileCover' style={{ display: 'none'}}/>
                  </div>
                  <div style={{ backgroundImage: `url()` }} className='profilePicBg' >
                      <label htmlFor='fileDp' >{<BiCamera />} </label>
                      <input type='file' id='fileDp' style={{ display: 'none'}}/>
                  </div>
              </div>
              <div className='labelContainer' >
                        <div className={currentActiveInput == 0 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Name </label>
                                {currentActiveInput == 0 ? <span>length </span> : ""}
                                </div>
                      <input onClick={() => setCurrentActiveInput(0)} type='text' placeholder='Name' />
                        </div>
                        
                        <div className={currentActiveInput == 1 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Bio </label>
                                {currentActiveInput == 1 ? <span>length </span> : ""}
                                </div>
                      <input onClick={() => setCurrentActiveInput(1)} type='text' placeholder='Bio' />
                      </div>
                        <div className={currentActiveInput == 2 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Location </label>
                                {currentActiveInput == 2 ? <span>length </span> : ""}
                                </div>
                      <input onClick={() => setCurrentActiveInput(2)} type='text' placeholder='Location' />
                      </div>
                        <div className={currentActiveInput == 3 ? "activeInput" : "labelBorder"} >
                            <div className='flexLabelBorder' >
                                <label>Website </label>
                                {currentActiveInput == 3 ? <span>length </span> : ""}
                                </div>
                      <input onClick={() => setCurrentActiveInput(3)} type='text' placeholder='Website' />
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