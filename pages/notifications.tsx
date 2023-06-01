import MobileNav from '@/components/mobilenav/MobileNav'
import Navbar from '@/components/navbar/Navbar'
import Notifications from '@/components/notification/Notification'
import Search from '@/components/search/Search'
import Trends from '@/components/trends/Trends'
import { NotificationsStyle } from '@/styles/Notifications.styled'
import React from 'react'

type Props = {}

const notifications = (props: any) => {
  // console.log(props.notification);
  
  return (
    <NotificationsStyle>
     <div className='notificationsContainer' >
        <Navbar />
        <div className='centerGridContainer' >
          <Notifications/>
          </div>
          <div className='rightGridContainer' >
          <Search />
          <Trends/>
        </div>
        <div className="mobileNav" > <MobileNav/></div>
      </div>
      </NotificationsStyle>
  )
}

export default notifications