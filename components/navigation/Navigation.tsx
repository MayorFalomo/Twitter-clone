import { AppContext } from '@/helpers/Helpers'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AiFillTwitterSquare, AiOutlineCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BsArrowUpRightSquare, BsLink, BsPersonFill } from 'react-icons/bs'
import { FaAngleDown, FaAngleUp, FaRegNewspaper } from 'react-icons/fa'
import { IoBookmarkOutline, IoPersonOutline, IoRocketOutline, IoSettingsOutline } from 'react-icons/io5'
import { MdClose, MdOutlineVerified } from 'react-icons/md'
import { NavigationStyle } from './Navigation.styled'
import { BiBarChart, BiLogIn, BiPlus } from 'react-icons/bi'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'
import { TbChartPie2 } from 'react-icons/tb'
import { FiEdit } from 'react-icons/fi'

type Props = {}

const Navigation = (props: Props) => {

    const { currentUser, setNavigation } = useContext(AppContext)
    
    const [openActive, setOpenActive] = useState<boolean>(false)
    const [dropActive, setDropActive] = useState<boolean>(false)
    const [settingsActive, setSettingsActive] = useState<boolean>(false)

   const handleCloseAll = () => {
        setNavigation(false)
       setOpenActive(false)
       setDropActive(false)
       setSettingsActive(false)
    }

    return (
      <NavigationStyle>
      <div className='navigationContainer' >
          <div className='flexHeading' >
              <p>Account Info </p>
              <span onClick={handleCloseAll} className='closeNav' >{<MdClose/>} </span>
          </div>
                <div className='userDetailsCon' >
                    <div className='userDetailsInfo' >
              <div className='detailsInfo' >
          <Link href='/profile' style={{ backgroundImage: `url(${currentUser?.profilePic})` }} className='profilePic' > </Link>
            <span><BiPlus fontSize={26} /> </span>
                        </div>
                         <h3>{currentUser?.username} </h3>
              <span style={{color: 'rgb(47,51,54)'}} >{currentUser?.usersAt} </span>
                        </div>
             
              <div className='followersCon' >
                  <span>{currentUser?.following?.length} Following </span>
                 <Link href='/allfollowers' > <span>{currentUser?.followers?.length} Followers </span></Link>
              </div>
              <ul>
                        <li>
                            <div className='flexLinks' >
                                <Link href="/profile"  ><span className='navIcons' ><IoPersonOutline /> </span></Link>
                                <Link href="/profile" ><span  className='navTexts' >Profile </span> </Link>
                                </div>
                        </li>
                        <li>
                            <div className='flexLinks' >
                                <Link href="/"  ><span className='navIcons' ><AiFillTwitterSquare /> </span></Link>
                                <Link href="/"  ><span className='navTexts' >Twitter Blue </span> </Link>
                                </div>
                        </li>
                        <li>
                            <div className='flexLinks' >
                                <Link href="/profile"  ><span className='navIcons' ><BsLink /> </span></Link>
                                <Link href="/profile"  ><span  className='navTexts' >Connect </span> </Link>
                                </div>
                        </li>
                        <li>
                            <div className='flexLinks' >
                                <Link href="/bookmarks"  ><span className='navIcons' ><IoBookmarkOutline /> </span></Link>
                                <Link href="/bookmarks"  ><span  className='navTexts' >Bookmarks </span> </Link>
                                </div>
                        </li>
                        <li>
                            <div className='flexLinks' >
                                <Link href="/"  ><span className='navIcons' ><MdOutlineVerified /> </span></Link>
                                <Link href="/"  ><span className='navTexts' >Verified Orgs </span> </Link>
                                </div>
                        </li>
               
              </ul>
                    <div className="others" >
                        <div className='subOthers' >
                            <div className='faqFlex' >
                                <p>Creator Studio </p>
                                {openActive ? <FaAngleUp onClick={() => setOpenActive(false)} color=' #1d9aef' fontSize={20}  /> : <span><FaAngleDown onClick={() => setOpenActive(true)} fontSize={20}  /> </span>}
                            </div>
                            {openActive ?  <div className='tools' >
                                <span><BiBarChart fontSize={20} /> Analytics </span>
                            </div> : ""}
                        </div>
                        <div className='subOthers' >
                            <div className='faqFlex' >
                            <p>Professional Tools </p>
                                {dropActive ? <FaAngleUp onClick={() => setDropActive(false)} color=' #1d9aef' fontSize={20}  /> : <span><FaAngleDown onClick={() => setDropActive(true)} fontSize={20}  /> </span>}
                                </div>
                             { dropActive ? <div className='tools' >
                                <span><IoRocketOutline fontSize={20} /> Twitter for Professionals </span>
                                <span><BsArrowUpRightSquare fontSize={20} /> Twitter Ads </span>
                                <span><FaRegNewspaper fontSize={20} /> Monetization </span>
                            </div> : ""}
                  </div>
                        <div className='subOthers' >
                            <div className='faqFlex' >
                            <p>Settings and Support </p>
                                {settingsActive ? <FaAngleUp onClick={() => setSettingsActive(false)} color=' #1d9aef' fontSize={20}  /> : <span><FaAngleDown onClick={() => setSettingsActive(true)} fontSize={20}  /> </span>}
                                </div>
                             { settingsActive ? <div className='tools' >
                                <span><IoSettingsOutline fontSize={20} /> Settings and Privacy </span>
                                <span><HiOutlineQuestionMarkCircle fontSize={20} /> Help Center </span>
                                <span><TbChartPie2 fontSize={20} /> Data saver </span>
                                <span><FiEdit fontSize={20} /> Display </span>
                                <span><AiOutlineCloseCircle fontSize={20} />Keyboard shortcuts</span>
                                <span><BiLogIn fontSize={20} />Log Out</span>
                            </div> : ""}
                  </div>
              </div>
              </div>
            </div>
            </NavigationStyle>
  )
}

export default Navigation