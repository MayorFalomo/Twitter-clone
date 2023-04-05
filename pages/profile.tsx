import Navbar from '@/components/navbar/Navbar'
import ProfilePage from '@/components/profilepage/ProfilePage'
import Search from '@/components/search/Search'
import Whotofollow from '@/components/whotofollow/Whotofollow'
import { ProfileStyled } from '@/styles/Profile.styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

type Props = {}

const profile = (props: Props) => {

      const [cookies, setCookie] = useCookies(["user"])
  const [userProfile, setUserProfile] = useState<any>([])
  
  // console.log(cookies.user, "id");
  

     useEffect(() => {
    axios.get(`http://localhost:7000/api/users/${cookies.user}`).then((res) => setUserProfile(res.data )).catch((err) => console.log(err)
    )
     }, [cookies.user]);  
  
  console.log(userProfile);
  // console.log(cookies);
  


  return (
    <ProfileStyled>
    <div className='profileStyleContainer' >
        <Navbar />
        <div>
          <ProfilePage userProfile={userProfile}/>
          </div>
          <div>
      <Search />
        <Whotofollow />
        </div>
      </div>
      </ProfileStyled>
  )
}
export default profile