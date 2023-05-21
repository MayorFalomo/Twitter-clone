import MobileNav from '@/components/mobilenav/MobileNav'
import Navbar from '@/components/navbar/Navbar'
import { NotificationsStyle } from '@/styles/Notifications.styled'
import React from 'react'

type Props = {}

const notifications = (props: Props) => {
  return (
    <NotificationsStyle>
    <div className='notificationsCon' >
      <Navbar />
                <div className="mobileNav" > <MobileNav/></div>
      </div>
      </NotificationsStyle>
  )
}

export default notifications