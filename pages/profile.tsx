import Navbar from '@/components/navbar/Navbar'
import Search from '@/components/search/Search'
import Whotofollow from '@/components/whotofollow/Whotofollow'
import { ProfileStyled } from '@/styles/Profile.styled'
import React from 'react'

type Props = {}

const profile = (props: Props) => {
  return (
    <ProfileStyled>
    <div className='profileStyleContainer' >
      <Navbar />
        <div className='subProfileStyle' >
          
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