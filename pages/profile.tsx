import Navbar from '@/components/navbar/Navbar'
import ProfilePage from '@/components/profilepage/ProfilePage'
import Search from '@/components/search/Search'
import Trends from '@/components/trends/Trends'
import Whotofollow from '@/components/whotofollow/Whotofollow'
import { ProfileStyled } from '@/styles/Profile.styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

type Props = {}

const profile = (props: Props) => {

  const [cookies, setCookie] = useCookies(["user"])
  const [userProfile, setUserProfile] = useState<any>([])
  const [allUsersTweets, setAllUsersTweets] = useState<any>([])
  const [editProfileModal, setEditProfileModal] = useState<boolean>(false)
  // console.log(cookies.user, "id");
  

     useEffect(() => {
    axios.get(`http://localhost:7000/api/users/${cookies.user}`).then((res) => setUserProfile(res.data )).catch((err) => console.log(err)
    )
     }, [cookies.user]);  
  
   useEffect(() => {
     axios.get(`http://localhost:7000/api/tweets/get-tweet/${userProfile?.username}`)
      .then((res) => setAllUsersTweets(res.data))
      .catch((err) => console.log(err))
  }, [userProfile?.username])
  
  // console.log(userProfile);
  


  return (
    <ProfileStyled>
      <div className='profileStyleContainer' >
        <Navbar />
        <div className='centerGridContainer' >
          <ProfilePage userProfile={userProfile} allUsersTweets={allUsersTweets} editProfileModal={editProfileModal} setEditProfileModal={setEditProfileModal}/>
          </div>
          <div className='rightGridContainer' >
      <Search />
          <Whotofollow />
          <Trends/>
        </div>
      </div>
      </ProfileStyled>
  )
}
export default profile